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
    public class Activity1Controller : ControllerBase
    {
        private UserManager<LMSUser> _userManager;

        private IProgramRepository _programrepository;
        private IDocumentRepository _documentrepository;
        private ApplicationDbContext _context;
        private IHostingEnvironment _environment;

        public Activity1Controller(IProgramRepository programrepository
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

        // GET: api/Activity1/5
        [HttpGet("{id}", Name = "GetAct")]
        public string GetActivityById(int id)
        {
            return "value";
        }

        [HttpGet("ActivityTypes")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<ICollection<ActivityType>>> GetActivityTypes()
        {
          return await  _context.ActivityTypes.ToListAsync();
        }


        // POST: api/Activity1
        // POST: api/Module1
        [HttpPost("PostActivity")]
        [Authorize(Roles = "Teacher")]
        //public async Task<ActionResult<LMSActivity>> PostActivity([FromBody] dynamic activtyVm)
        public async Task<ActionResult<LMSActivity>> PostActivity([FromBody] ActivityFormModel activtyVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            LMSActivity activity = new LMSActivity
            {
                Name = activtyVm.Name,
                StartDate = activtyVm.StartDate,
                EndDate = activtyVm.EndDate,
                Description = activtyVm.Description,
                ModuleId = Guid.Parse(activtyVm.moduleid),
                ActivityTypeId= activtyVm.ActivityTypeId
            };

            _context.Add(activity);
            await _context.SaveChangesAsync();
            return Created("", activity);
        }

        // PUT: api/Activity1/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Teacher")]
        public async Task Delete(int id)
        {
            var activity = _context.LMSActivity.FindAsync(id);
            if (activity == null)
            {
                return;
            }

            _context.Remove(activity);
            await _context.SaveChangesAsync();

        }
    }
}
