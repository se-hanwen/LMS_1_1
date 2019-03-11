using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Utility;
using LMS_1_1.ViewModels;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Courses1Controller : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _environment;

        public Courses1Controller (ApplicationDbContext context, IHostingEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        // GET: api/Courses1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            return Ok(await _context.Courses.ToListAsync());
        }

        // GET: api/Courses1/5/true course , modules and activites
        // GET: api/Courses1/5/false  just the course
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(string id)
        {
           Guid idG = Guid.Parse(id);
            Course course = await _context.Courses.FindAsync(idG);
            

            if (course == null)
            {
                return NotFound();
            }

            return course;
        }
        
        [HttpGet("All")]
        public async Task<ActionResult<CourseAllViewModel>> GetCourseAll(string id)
        {
         //   Guid idG = Guid.Parse(id);

              var  course1 = await _context.Courses
                            .Include(c => c.Modules)
                            .ThenInclude(m => m.LMSActivities)
                            .ThenInclude(a => a.ActivityType)
                            .FirstOrDefaultAsync(c => c.Id.ToString() == id);



            var Modules = new List<ModelAllViewModel>();
            foreach (var Modul in course1.Modules)
            {
                var Activities = new List<ActivityAllViewModel>();
                foreach (var Actitivity in Modul.LMSActivities)
                {
                    Activities.Add(
                            new ActivityAllViewModel
                            {
                                Id = Actitivity.Id,
                                Name = Actitivity.Name,
                                StartDate = Actitivity.StartDate,
                                EndDate = Actitivity.EndDate,
                                Description = Actitivity.Description,
                                ActivityType = Actitivity.ActivityType
                            }

                        );
                }

                Modules.Add(
                     new ModelAllViewModel
                     {
                         Id = Modul.Id,
                         Name = Modul.Name,
                         StartDate = Modul.StartDate,
                         EndDate = Modul.EndDate,
                         Description = Modul.Description,
                         Activities = Activities
                     }
                    );
            }

            CourseAllViewModel course = new CourseAllViewModel
            {
                Id = course1.Id,
                Name = course1.Name,
                StartDate = course1.StartDate,
                Description = course1.Description,
                courseImgPath = course1.CourseImgPath,
                Modules = Modules
            };


            if (course == null)
            {
                return NotFound();
            }

            return course;
        }
        
        // PUT: api/Courses1/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(Guid id, Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
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

        // POST: api/Courses1
        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult<Course>> PostCourse([FromForm] CourseViewModel courseVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Course course = new Course
            {
                Name = courseVm.Name,
                StartDate = courseVm.StartDate,
                Description = courseVm.Description,
                CourseImgPath = @"..\assets\img\"+ courseVm.FileData.FileName
            };
         
           _context.Courses.Add(course);
            await _context.SaveChangesAsync();
            Upload.UploadFile(courseVm.FileData);
            return CreatedAtAction("GetCourse", new { id = course.Id }, course);
        }


        


        // DELETE: api/Courses1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Course>> DeleteCourse(Guid id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return course;
        }

        private bool CourseExists(Guid id)
        {
            return _context.Courses.Any(e => e.Id == id);
        }
    }
}
