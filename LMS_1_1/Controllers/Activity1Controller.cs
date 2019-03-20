using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Activity1Controller : ControllerBase
    {
        private UserManager<LMSUser> _userManager;
        public Activity1Controller(UserManager<LMSUser> userManager)
        {
            _userManager = userManager;
        }

        // GET: api/Activity1
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Activity1/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
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

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
