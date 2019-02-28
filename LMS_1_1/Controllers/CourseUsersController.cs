using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public CourseUsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CourseUsers
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<CourseUser>>> GetCourseUsers()
        {
            return await _context.CourseUsers.ToListAsync();
        }

        // GET: api/CourseUsers/5
        [HttpGet("{Courseid}")]
        [Authorize]
        public async Task<ActionResult<LMSUser>> GetCourseUser(Guid Courseid)
        {
            var courseUser = await _context.CourseUsers
                .Include(cu=> cu.LMSUser)                
                .Where(cu => cu.CourseId == Courseid)
                .Select(cu => cu.LMSUser)
                .FirstOrDefaultAsync()
                ;

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
                if (!CourseUserExists(Courseid))
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
                if (CourseUserExists(courseUser.CourseId))
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
            var courseUser = await _context.CourseUsers.FirstOrDefaultAsync(cu => cu.CourseId==Courseid && cu.LMSUserId==LMSUserId);
            if (courseUser == null)
            {
                return NotFound();
            }

            _context.CourseUsers.Remove(courseUser);
            await _context.SaveChangesAsync();

            return courseUser;
        }

        private bool CourseUserExists(Guid Courseid)
        {
            return _context.CourseUsers.Any(e => e.CourseId == Courseid);
        }
    }
}
