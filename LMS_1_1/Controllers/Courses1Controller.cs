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
using System.IO;
using Microsoft.AspNetCore.Hosting;
using LMS_1_1.Repository;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Data.SqlClient;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class Courses1Controller : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IHostingEnvironment _environment;
        private readonly UserManager<LMSUser> _userManager;
        private readonly ILogger<CoursesController> _logger;
        private readonly IProgramRepository _programrepository;
        private readonly IDocumentRepository _documentrepository;

        public Courses1Controller (IProgramRepository programrepository 
            ,IDocumentRepository documentrepository
            , ILogger<CoursesController> logger
            , ApplicationDbContext context
            , IHostingEnvironment environment
            , UserManager<LMSUser> userManager)
        {
            _programrepository = programrepository;
            _documentrepository = documentrepository;
            _logger = logger;
            _context = context;
            _environment = environment;
            _userManager = userManager;
        }

        // GET: api/Courses1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
           
            return Ok(await _programrepository.GetAllCoursesAsync(false));
        }


        [HttpGet("foruser")]
        public async Task<ActionResult<IEnumerable<Course>>> GetCoursesforuser()
        {

            var user = await _userManager.FindByNameAsync(User.Identity.Name);


            return Ok(await _programrepository.GetCoursesForUserAsync(user.Id));
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
                var Activities = new List<ActivityViewModel>();
                foreach (var Actitivity in Modul.LMSActivities)
                {
                    Activities.Add(
                            new ActivityViewModel
                            {
                                Id = Actitivity.Id,
                                Name = Actitivity.Name,
                                StartDate = Actitivity.StartDate,
                                EndDate = Actitivity.EndDate,
                                Description = Actitivity.Description,
                                ActivityType = Actitivity.ActivityType.Name,
                                Name2 = (Guid.NewGuid()).ToString(),
                                isExpanded = ""

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
                         Activities = (ICollection<ActivityViewModel>)Activities,
                         Name2=(Guid.NewGuid()).ToString(),
                        // Name2 = "C" + (i++).ToString(),
                         isExpanded = ""
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

            return Ok(course);
        }

        [HttpGet("CAndM")]
        public async Task<ActionResult<CourseAllViewModel>> GetCourseAndModule(string id)
        {
            //   Guid idG = Guid.Parse(id);
            var course1 = await _context.Courses
                          .Include(c => c.Modules)
                          .FirstOrDefaultAsync(c => c.Id.ToString() == id);



            var Modules = new List<ModelAllViewModel>();
            foreach (var Modul in course1.Modules)
            {
                

                Modules.Add(
                     new ModelAllViewModel
                     {
                         Id = Modul.Id,
                         Name = Modul.Name,
                         StartDate = Modul.StartDate,
                         EndDate = Modul.EndDate,
                         Description = Modul.Description,
                         Activities = null,
                         Name2=(Guid.NewGuid()).ToString(),
                        // Name2 = "C" + (i++).ToString(),
                         isExpanded = ""
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

            return Ok(course);
        }
        
        [HttpGet("AfromMid")]
        public async Task<ActionResult<ICollection<ActivityViewModel>>> GetActivitiesFromModulid(string id)
        {
            //   Guid idG = Guid.Parse(id);
            var Activities =await  _context.LMSActivity
                           .Include(a => a.ActivityType)
                          .Where(a => a.ModuleId.ToString() == id)
                          .ToArrayAsync();
                          



            var res = new List<ActivityViewModel>();
            foreach (var activity in Activities)
            {


                res.Add(
                     new ActivityViewModel
                     {
                         Id = activity.Id,
                         Name = activity.Name,
                         StartDate = activity.StartDate,
                         EndDate = activity.EndDate,
                         Description = activity.Description,
                         ActivityType = activity.ActivityType.Name
                     }
                    );
            }


            if (res == null)
            {
                return NotFound();
            }

            return Ok(res);
        }

        
        [HttpGet("MAndAfromMid")]
        public async Task<ActionResult<ModelAllViewModel>> GetModulesAndActivitiesFromModulid(string id)
        {
            //   Guid idG = Guid.Parse(id);
    
            var Module = await _context.Modules
                            .Include(m => m.LMSActivities)
                           .ThenInclude(a => a.ActivityType)
                          .Where(m => m.Id.ToString() == id)
                          .FirstOrDefaultAsync();




            var res = new List<ActivityViewModel>();
            foreach (var activity in Module.LMSActivities)
            {


                res.Add(
                     new ActivityViewModel
                     {
                         Id = activity.Id,
                         Name = activity.Name,
                         StartDate = activity.StartDate,
                         EndDate = activity.EndDate,
                         Description = activity.Description,
                         ActivityType = activity.ActivityType.Name,
                         Name2 = (Guid.NewGuid()).ToString(),
                         isExpanded = ""
                     }
                    );
            }


            ModelAllViewModel Module1 = new ModelAllViewModel
            {
                Id = Module.Id,
                Name = Module.Name,
                StartDate = Module.StartDate,
                EndDate = Module.EndDate,
                Description = Module.Description,
                Activities = res,
                CourseId=Module.CourseId
            };

            if (Module1 == null)
            {
                return NotFound();
            }

            return Ok(Module1);
        }


        // PUT: api/Courses1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(string id, [FromForm] CourseViewModel editModel)
        {
            //if (editModel.criD==null)
            if(id != editModel.criD)
            {
                return BadRequest();
            }

            Guid Crid = new Guid(editModel.criD);

            Course edCourse = new Course {
                Id = Crid,
                Name = editModel.Name,
                StartDate = editModel.StartDate,
                Description = editModel.Description,
                CourseImgPath = editModel.FileData.FileName
            };

            _context.Entry(edCourse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(Crid))
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
            await _documentrepository.UploadFile(courseVm.FileData);
            return CreatedAtAction("GetCourse", new { id = course.Id }, course);
        }


        


        // DELETE: api/Courses1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Course>> DeleteCourse(Guid iD)
        {
            var course = await _context.Courses.FindAsync(iD);
            if (course == null)
            {
                return NotFound();
            }


            //Delete course. Data related in Modules and LMSActivity also are deleted.
            _context.Courses.Remove(course);
            _context.SaveChanges();

            _logger.LogDebug("!!! Course of {name} deleted.", course.Name);


            return Ok(course);      //Send back 200.
        }

        private bool CourseExists(Guid id)
        {
            return _context.Courses.Any(e => e.Id == id);
        }
    }
}
