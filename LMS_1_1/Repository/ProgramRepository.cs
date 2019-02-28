using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace LMS_1_1.Repository
{
    public class ProgramRepository : IProgramRepository

    {
        private readonly ApplicationDbContext _ctx;
        private readonly ILogger<ProgramRepository> _logger;

        public ProgramRepository (ApplicationDbContext ctx, ILogger<ProgramRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public void AddEntity (object model)
        {
            if (model is Course || model is Module || model is LMSActivity || model is ActivityType)
            {
                _ctx.Add(model);
            }
        }

        public void UpdateEntity (object model)
        {
            if (model is Course || model is Module || model is LMSActivity || model is ActivityType)
            {
                _ctx.Update(model);
            }
        }
        public void RemoveEntity (object model)
        {
            if (model is Course || model is Module || model is LMSActivity || model is ActivityType)
            {
                _ctx.Remove(model);
            }
        }

        public bool SaveAll ()
        {
            return _ctx.SaveChanges() > 0;
        }

        public IEnumerable<Course> GetAllCourses (bool includeModule)
        {
            var courses = _ctx.Courses;
            if (includeModule)
            {
                return courses
                           .Include(c => c.Modules).ToList();
            }
            return courses.ToList();
        }

        public Course GetCourseById (string courseId, bool includeModule)
        {
            var course = _ctx.Courses
               .Where(c => c.Id == courseId);

            if (includeModule)
            {
                return course
                           .Include(c => c.Modules)
                            .FirstOrDefault();
            }
            return course
                   .FirstOrDefault();

        }

        public bool CourseExists (string id)
        {
            return _ctx.Courses.Any(e => e.Id == id);
        }

        public IEnumerable<Module> GetAllModules (bool includeActivities)
        {
            var modules = _ctx.Modules
                          .Include(c => c.Courses);

            if (includeActivities)
            {
                return modules
                           .Include(m => m.LMSActivities)
                           .ToList();
            }
            return modules
                       .ToList();

        }

        public Module GetModuleById (string moduleId, bool includeActivity)
        {
            var module = _ctx.Modules
                         .Include(c => c.Courses)
                         .Where(m => m.Id == moduleId);
            if (includeActivity)
            {
                return module
                           .Include(m => m.LMSActivities)
                           .FirstOrDefault();

            }
            else
            {
                return module
                           .FirstOrDefault();
            }
        }

        public bool ModuleExists (string id)
        {
            return _ctx.Modules.Any(e => e.Id == id);
        }
        public IEnumerable<LMSActivity> GetAllActivities ()
        {
            return _ctx.LMSActivity
                     .Include(a => a.ActivityType)
                      .Include(a => a.Modules).ToList();


        }

        public LMSActivity GetActivityById (string activityId)
        {
            return _ctx.LMSActivity
                 .Include(a => a.ActivityType)
                 .Include(a => a.Modules).ToList()
                 .FirstOrDefault(a => a.Id == activityId);

        }
        public bool LMSActivityExists (string id)
        {
            return _ctx.LMSActivity.Any(e => e.Id == id);
        }


        public IEnumerable<ActivityType> GetAllActivitiyTypes ()
        {
            return _ctx.ActivityTypes.ToList();
        }

        public ActivityType GetAllActivitiyTypesById (int activityTypeId)
        {
            return _ctx.ActivityTypes
                .FirstOrDefault(a => a.Id == activityTypeId);
        }

        public bool ActivityTypeExists (int id)
        {
            return _ctx.ActivityTypes.Any(e => e.Id == id);
        }

       
    }
    }
