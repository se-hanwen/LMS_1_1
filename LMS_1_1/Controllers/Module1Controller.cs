using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.ViewModels;
using LMS_1_1.Repository;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class Module1Controller : ControllerBase
    {
        private UserManager<LMSUser> _userManager;

        private IProgramRepository _programrepository;
        private IDocumentRepository _documentrepository;
        private ApplicationDbContext _context;
        private IHostingEnvironment _environment;

        public Module1Controller(IProgramRepository programrepository
            , IDocumentRepository documentrepository
            , ILogger<CoursesController> logger
            , ApplicationDbContext context
            , IHostingEnvironment environment
            , UserManager<LMSUser> userManager)
        {
            _userManager = userManager;
            _programrepository = programrepository;
            _documentrepository = documentrepository;
            _context = context;
            _environment = environment;
       
      
        }



        // GET: api/Module1/5
        [HttpGet("{id}", Name = "GetModule")]
        public string GetModuleById(int id)
        {
            return "value";
        }

        // POST: api/Module1
        [HttpPost("PostModule")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<Module>> PostModule([FromBody] ModuleViewModel modelVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Module module = new Module
            {
                Name = modelVm.Name,
                StartDate = modelVm.StartDate,
                EndDate = modelVm.EndDate,
                Description = modelVm.Description,
                CourseId = modelVm.CourseId
            };

            _context.Add(module);
            await _context.SaveChangesAsync();
            return Created("", module);
        }

        // PUT: api/Module1/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/module1/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Teacher")]
        public async void Delete(Guid iD)
        {
            var module = _context.Modules.FindAsync(iD);
            if (module == null)
            {
                return;
            }

            _context.Remove(module);
            await _context.SaveChangesAsync();
        }


        [HttpPost("TestIfInRange")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<bool>> TestIfInRange([FromBody] DubbParas parmas)
        {
            bool res = false;
            if(parmas.Dubbtype == "Module")
            {
                 res = await _programrepository.CheckIfModuleInRange(parmas.Dubbid, parmas.Dubbstart, parmas.Dubbend);


            }
            else if(parmas.Dubbtype == "Activity")
            {
                res = await _programrepository.CheckIfActivityInRange(parmas.Dubbid, parmas.Dubbstart, parmas.Dubbend);
            }
            else
            {
                return StatusCode(500, "invalid type")
;
            }
            return Ok(res);
        }

    }
}
