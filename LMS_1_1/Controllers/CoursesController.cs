using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
       
        private readonly IProgramRepository _repository;
        private readonly ILogger<CoursesController> _logger;

        public CoursesController (IProgramRepository repository, ILogger<CoursesController> logger)
        {
            _repository = repository;
            _logger = logger;
          

        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<ICollection<Course>>> GetCourses()
        {
            return Ok(await _repository.GetAllCourses(false).ToListAsync());
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(Guid id)
        {
            
            var course = _repository.GetCourseById(id, true);
            if (course == null)
            {
                return NotFound();
            }

            return course;
        }

        // PUT: api/Courses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(Guid id, Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

          //  _context.Entry(course).State = EntityState.Modified;

            try
            {
                _repository.UpdateEntity(course);
                _repository.SaveAll();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_repository.CourseExists(id))
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

        // POST: api/Courses
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse([FromBody]Course course)
        {
            _repository.AddEntity(course);
            _repository.SaveAll();

            return CreatedAtAction("GetCourse", new { id = course.Id }, course);
        }

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Course>> DeleteCourse(Guid id)
        {
            var course = _repository.GetCourseById(id, false);
            if (course == null)
            {
                return NotFound();
            }
          
            _repository.RemoveEntity(course);
            _repository.SaveAll();
         

            return course;
        }

       
    }
}
