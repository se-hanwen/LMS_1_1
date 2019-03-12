using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace LMS_1_1.Controllers
{
    public class AccountController : Controller
    {

        private readonly ILogger<AccountController> _logger;
        private readonly SignInManager<LMSUser> _signInManager;
        private readonly UserManager<LMSUser> _userManager;
        private readonly IConfiguration _config;
        private readonly RoleManager<LMSUser> _roleManager;
        private readonly IProgramRepository _programRepository;
        private readonly IUserClaimsPrincipalFactory<LMSUser> _claimsFactory;

        public AccountController(ILogger<AccountController> logger,
          SignInManager<LMSUser> signInManager,
          UserManager<LMSUser> userManager,
          IConfiguration config,
          RoleManager<LMSUser> roleManager, IProgramRepository programRepository
            ,IUserClaimsPrincipalFactory<LMSUser> claimsFactory


            )
        {
            _logger = logger;
            _signInManager = signInManager;
            _userManager = userManager;
            _config = config;
            _roleManager = roleManager;
            _programRepository = programRepository;
            _claimsFactory = claimsFactory;
        }

        [HttpPost]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(model.Username);
               
                if (user != null)
                {
                    var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);

                    if (result.Succeeded)
                    {
                        var principal = await _claimsFactory.CreateAsync(user);
                        // Create the token
                        var claims = principal.Claims.ToList();

                        claims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Email));
                        claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                        claims.Add(new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName));
                        foreach (var role in await _userManager.GetRolesAsync(user))
                        {
                            claims.Add(new Claim(ClaimTypes.Role, role));
                         }
                              
                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                          _config["Tokens:Issuer"],
                          _config["Tokens:Audience"],
                          claims.ToArray(),
                          expires: DateTime.Now.AddMinutes(30),
                          signingCredentials: creds);
                        
                        var results = new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo
                        };
                      //  await _programRepository.AddTokenUser(results.token, user.Id);

                        return Created("", results);
                    }
                }
            }

            return BadRequest();
        }

        [HttpPost]
        public async Task<bool> IsTeacher(string token)
        {
            return await _programRepository.IsTeacher(token);

        }
    }
}
