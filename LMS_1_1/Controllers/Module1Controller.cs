using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Module1Controller : ControllerBase
    {
        private ApplicationDbContext _context;
        private UserManager<LMSUser> _userManager;

        public Module1Controller(
            ApplicationDbContext applicationDbContext,
            UserManager<LMSUser> userManager)
        {
            _context = applicationDbContext;
            _userManager = userManager;
        }

        // GET: api/Module1
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Module1/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Module1
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Module1/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Module1/5
        [HttpDelete("{id}")]
        public async void DeleteModule(Guid iD)
        {
            var module = _context.Modules.FindAsync(iD);
            if (module==null)
            {
                return;
            }

            _context.Remove(module);
            await _context.SaveChangesAsync();
        }
    }
}
