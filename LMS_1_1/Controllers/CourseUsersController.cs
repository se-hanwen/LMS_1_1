using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseUsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<CoursesController> _logger;
        private readonly ICourseUsersRepository _repository;
        private readonly UserManager<LMSUser> _userManager;

        public CourseUsersController(ICourseUsersRepository repository, ILogger<CoursesController> logger, ApplicationDbContext context, UserManager<LMSUser> userManager)
        {
            _context = context;
            _logger = logger;
            _repository = repository;
            _userManager = userManager;
        }

        // GET: api/CourseUsers/5
        [HttpGet("{CourseId}")]
        [Authorize]
        public async Task<ActionResult<ICollection<CourseUser>>> GetCourseUsers(Guid CourseId)
        {
            return await _repository.GetCourseUsers(CourseId).ToListAsync();
        }

        // GET: api/CourseUsers/5
        [HttpGet]
        [Authorize]
        //public IQueryable<CourseUser> GetCoursesForUsers(string LMSUserId)
        public async Task<ActionResult<ICollection<CourseUser>>> GetCoursesForUsers()
        {
            var userid = _userManager.GetUserId(User);
            // to do Teacher case
            var courseUser = await _repository.GetCoursesForUsers(userid).ToListAsync();


            if (courseUser == null)
            {
                return NotFound();
            }

            return courseUser;
        }

        // PUT: api/CourseUsers/5
        [HttpPut("{Courseid}")]
        [Authorize(Roles = "Teacher")]
        public async Task<IActionResult> PutCourseUser(Guid Courseid, CourseUser courseUser)
        {
            if (Courseid != courseUser.CourseId)
            {
                return BadRequest();
            }

            _context.Entry(courseUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseUserExists(Courseid, courseUser.LMSUserId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CourseUsers
        [HttpPost]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<CourseUser>> PostCourseUser(CourseUser courseUser)
        {
            _context.CourseUsers.Add(courseUser);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CourseUserExists(courseUser.CourseId, courseUser.LMSUserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCourseUser", new { Courseid = courseUser.CourseId }, courseUser);
        }

        // DELETE: api/CourseUsers/5
        [HttpDelete("{Courseid,LMSUserId}")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<CourseUser>> DeleteCourseUser(Guid Courseid, string LMSUserId)
        {
            var courseUser = await _context.CourseUsers.FirstOrDefaultAsync(cu => cu.CourseId == Courseid && cu.LMSUserId == LMSUserId);
            if (courseUser == null)
            {
                return NotFound();
            }

            _context.CourseUsers.Remove(courseUser);
            await _context.SaveChangesAsync();

            return courseUser;
        }

        private bool CourseUserExists(Guid Courseid, string LMSUserid)
        {
            return _context.CourseUsers.Any(e => e.CourseId == Courseid && e.LMSUserId == LMSUserid);
        }
    }
}
