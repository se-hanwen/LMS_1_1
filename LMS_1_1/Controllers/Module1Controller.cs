using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using LMS_1_1.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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

        // GET: api/Module1
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Module1/5
        [HttpGet("{id}", Name = "GetModule")]
        public string GetModuleById(int id)
        {
            return "value";
        }

        // POST: api/Module1
        [HttpPost]
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
    }
}
