using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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

        // GET: api/Activity1
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Activity1/5
        [HttpGet("{id}", Name = "GetAct")]
        public string GetActivityById(int id)
        {
            return "value";
        }

        // POST: api/Activity1
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Activity1/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Activity1/5
        [HttpDelete("{id}")]
        public async void Delete(Guid iD)
        {
            var actv = _context.LMSActivity.Find(iD);
            if (actv == null)
            {
                return;
            }

            _context.LMSActivity.Remove(actv);
            await _context.SaveChangesAsync();

        }
    }
}
