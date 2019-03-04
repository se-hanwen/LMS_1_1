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
    public class ProgramRepository:IProgramRepository 

    {
        private readonly ApplicationDbContext _ctx;
        private readonly ILogger<ProgramRepository> _logger;

        public ProgramRepository (ApplicationDbContext ctx, ILogger<ProgramRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }
        #region Commen
        public void AddEntity (object model)
        {
            if (model is IProgram || model is ActivityType)
            {
                _ctx.Add(model);
            }
        }

        public  void UpdateEntity (object model)
        {
            if (model is IProgram || model is ActivityType)
            {
                _ctx.Update(model);
            }
        }
        public void RemoveEntity (object model)
        {
            if (model is IProgram || model is ActivityType)
            {
                 _ctx.Remove(model);
            }
        }

        public  bool SaveAll ()
        {
            return  _ctx.SaveChanges() > 0;
        }
        #endregion
        #region Course
        public   IQueryable<Course> GetAllCourses (bool includeModule)
        {
            var courses =  _ctx.Courses;
            if (includeModule)
            {
                return   courses
                           .Include(c => c.Modules);
            }
            return  courses;
        }

        public Course GetCourseById (Guid courseId, bool includeModule)
        {
            var course = _ctx.Courses
               .Where(c => c.Id == courseId);

            if (includeModule)
            {
                return  course
                           .Include(c => c.Modules)
                            .FirstOrDefault();
            }
            return  course
                   .FirstOrDefault();

        }

        public bool CourseExists(Guid courseId)
        {
            return  _ctx.Courses.Any(e => e.Id == courseId);
        }
        #endregion
        #region Module
        public  IQueryable<Module> GetAllModules (bool includeActivities)
        {
            var modules = _ctx.Modules
                          .Include(c => c.Courses);

            if (includeActivities)
            {
                return modules
                           .Include(m => m.LMSActivities);
                           
            }
            return modules;
                       

        }

        public Module GetModuleById (Guid moduleId, bool includeActivity)
        {
            var module = _ctx.Modules
                         .Include(c => c.Courses)
                         .Where(m => m.Id == moduleId);
            if (includeActivity)
            {
                return  module
                           .Include(m => m.LMSActivities)
                           .ThenInclude(a=> a.ActivityType)
                           .FirstOrDefault();

            }
            else
            {
                return  module
                           .FirstOrDefault();
            }
        }

        public  bool ModuleExists (Guid moduleId)
        {
            return  _ctx.Modules.Any(e => e.Id == moduleId);
        }
        #endregion
        #region Activity
        public  IQueryable<LMSActivity> GetAllActivities ()
        {
            return  _ctx.LMSActivity
                     .Include(a => a.ActivityType)
                      .Include(a => a.Modules);
        }

        public LMSActivity GetActivityById (Guid activityId)
        {
            return  _ctx.LMSActivity
                 .Include(a => a.ActivityType)
                 .Include(a => a.Modules)
                 .FirstOrDefault(a => a.Id == activityId);

        }
        public  bool LMSActivityExists (Guid activityId)
        {
            return  _ctx.LMSActivity.Any(e => e.Id == activityId);
        }

        #endregion
        #region ActivityType
        public  IQueryable<ActivityType> GetAllActivityTypes ()
        {
            return  _ctx.ActivityTypes;
        }

        public  ActivityType GetAllActivityTypesById (int activityTypeId)
        {
            return  _ctx.ActivityTypes
                .FirstOrDefault(a => a.Id == activityTypeId);
        }

        public  bool ActivityTypeExists (int activityTypeId)
        {
            return  _ctx.ActivityTypes.Any(e => e.Id == activityTypeId);
        }
        #endregion


    }
}
