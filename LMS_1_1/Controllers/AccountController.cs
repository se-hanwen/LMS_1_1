using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using LMS_1_1.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
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
        private readonly IProgramRepository _programRepository;
        private readonly IUserClaimsPrincipalFactory<LMSUser> _claimsFactory;
        private readonly IEmailSender _emailSender;
        private readonly JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
  

        public AccountController(ILogger<AccountController> logger,
          SignInManager<LMSUser> signInManager,
          UserManager<LMSUser> userManager,
          IConfiguration config,
          IProgramRepository programRepository
         ,IUserClaimsPrincipalFactory<LMSUser> claimsFactory
         ,IEmailSender emailSender


            )
        {
            _logger = logger;
            _signInManager = signInManager;
            _userManager = userManager;
            _config = config;
          
            _programRepository = programRepository;
            _claimsFactory = claimsFactory;
            _emailSender = emailSender;
        }

        public IActionResult Login()
        {
            if (this.User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "App");
            }

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "App");
        }


        [HttpPost]
     // [HttpGet]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel model)
      //  public async Task<IActionResult> CreateToken( )
        {
             if (ModelState.IsValid)
             {


                var user = await _userManager.FindByNameAsync(model.Username);

    

                if (user != null)
                {
                   var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);
                  //  var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, lockoutOnFailure: true);
                    if (result.Succeeded)
                    {
                        var principal = await _claimsFactory.CreateAsync(user);
                        // Create the token
                        var claims = principal.Claims.ToList();

                        claims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Email));
                        claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                        claims.Add(new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName ?? ""));
                        claims.Add(new Claim(JwtRegisteredClaimNames.GivenName, user.FirstName ?? ""));
                        claims.Add(new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName ?? ""));
                       // claims.Add(new Claim(JwtRegisteredClaimNames.NameId, user.Id));

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
                            expiration = token.ValidTo,
                            isTeacher = token.Claims.Where(c => c.Type == ClaimTypes.Role && c.Value == "Teacher").Select(c => c.Value).FirstOrDefault(),
                            FirstName = token.Claims.Where(c => c.Type == JwtRegisteredClaimNames.GivenName).Select(c => c.Value).FirstOrDefault(),
                            LastName = token.Claims.Where(c => c.Type == JwtRegisteredClaimNames.FamilyName).Select(c => c.Value).FirstOrDefault()
                           // Userid = token.Claims.Where(c => c.Type == JwtRegisteredClaimNames.NameId).Select(c => c.Value).FirstOrDefault()
                        };
                       // await _programRepository.AddTokenUser(results.token, user.Id);

                        return Created("", results);
                    }
                }
           }

            return BadRequest();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Authorize(Roles = "Teacher")]
        public async Task<IActionResult> RegisterNewUser([FromBody] RegisterUserViewModel registerUser)
        {
            if (ModelState.IsValid)
            {

                var user = new LMSUser { UserName = registerUser.Email, Email = registerUser.Email, FirstName = registerUser.FirstName, LastName = registerUser.LastName };
                var Role = registerUser.Role;
                var result = await _userManager.CreateAsync(user, registerUser.Password);
                if (result.Succeeded)
                {
                    _logger.LogInformation("User created a new account with password.");

                    var ok = await _userManager.AddToRoleAsync(user, Role);
                    if (!ok.Succeeded)
                    {
                        throw new Exception(string.Join("\n", ok.Errors));
                    }
                  /*  var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        pageHandler: null,
                        values: new { userId = user.Id, code = code },
                        protocol: Request.Scheme);

                    await _emailSender.SendEmailAsync(registerUser.Email, "Confirm your email",
                        $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");
                        */
                    // teacher makes users so no log in.
                    // await _signInManager.SignInAsync(user, isPersistent: false);
                    return Created("", true);
                }
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            // If we got this far, something failed, redisplay form
            return StatusCode(500, ModelState);

        }

        [HttpPost]
        public async Task<bool> IsTeacher(string token)
        {
            return await _programRepository.IsTeacher(token);

        }
    }
}
