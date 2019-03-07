using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;

namespace LMS_1_1.Repository
{
    public class ProgramRepository : IProgramRepository

    {
        private readonly ApplicationDbContext _ctx;
        private readonly ILogger<ProgramRepository> _logger;
        private readonly UserManager<LMSUser> _userManager;
        private readonly RoleManager<LMSUser> _roleManager;

        public ProgramRepository (ApplicationDbContext ctx, ILogger<ProgramRepository> logger ,UserManager<LMSUser> userManager, RoleManager<LMSUser> roleManager)
        {
            _ctx = ctx;
            _logger = logger;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        #region Commen
        public async Task AddEntityAsync (object model)
        {
            if (model is IProgram || model is ActivityType)
            {
                await _ctx.AddAsync(model);
            }
        }

        public void UpdateEntity (object model)
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

        public async Task<bool> SaveAllAsync ()
        {
            return await _ctx.SaveChangesAsync() > 0;
        }
        #endregion
        #region Course
        public async Task<IEnumerable<Course>> GetAllCoursesAsync (bool includeModule)
        {
            var courses = _ctx.Courses;
            if (includeModule)
            {
                return await courses
                           .Include(c => c.Modules).ToListAsync();
            }
            return await courses.ToListAsync();
        }

        public async Task<Course> GetCourseByIdAsync (Guid courseId, bool includeModule)
        {
            var course = _ctx.Courses
               .Where(c => c.Id == courseId);

            if (includeModule)
            {
                var res = await course
                          .Include(c => c.Modules)
                          .ThenInclude(m => m.LMSActivities)
                          .ThenInclude(a => a.ActivityType)
                           .FirstOrDefaultAsync();
                return res;
            }
            return await course
                   .FirstOrDefaultAsync();

        }

        public async Task<bool> CourseExistsAsync (Guid courseId)
        {
            return await _ctx.Courses.AnyAsync(e => e.Id == courseId);
        }
        #endregion
        #region Module
        public async Task<IEnumerable<Module>> GetAllModulesAsync (bool includeActivities)
        {
            var modules = _ctx.Modules
                          .Include(c => c.Courses);

            if (includeActivities)
            {
                return await modules
                           .Include(m => m.LMSActivities)
                           .ToListAsync();
            }
            return await modules
                       .ToListAsync();

        }

        public async Task<Module> GetModuleByIdAsync (Guid moduleId, bool includeActivity)
        {
            var module = _ctx.Modules
                         .Include(c => c.Courses)
                         .Where(m => m.Id == moduleId);
            if (includeActivity)
            {
                return await module
                           .Include(m => m.LMSActivities)
                           .ThenInclude(a => a.ActivityType)
                           .FirstOrDefaultAsync();

            }
            else
            {
                return await module
                           .FirstOrDefaultAsync();
            }
        }

        public async Task<bool> ModuleExistsAsync (Guid moduleId)
        {
            return await _ctx.Modules.AnyAsync(e => e.Id == moduleId);
        }
        #endregion
        #region Activity
        public async Task<IEnumerable<LMSActivity>> GetAllActivitiesAsync ()
        {
            return await _ctx.LMSActivity
                     .Include(a => a.ActivityType)
                      .Include(a => a.Modules).ToListAsync();
        }

        public async Task<LMSActivity> GetActivityByIdAsync (Guid activityId)
        {
            return await _ctx.LMSActivity
                 .Include(a => a.ActivityType)
                 .Include(a => a.Modules)
                 .FirstOrDefaultAsync(a => a.Id == activityId);

        }
        public async Task<bool> LMSActivityExistsAsync (Guid activityId)
        {
            return await _ctx.LMSActivity.AnyAsync(e => e.Id == activityId);
        }

        #endregion
        #region ActivityType
        public async Task<IEnumerable<ActivityType>> GetAllActivityTypesAsync ()
        {
            return await _ctx.ActivityTypes.ToListAsync();
        }

        public async Task<ActivityType> GetAllActivityTypesByIdAsync (int activityTypeId)
        {
            return await _ctx.ActivityTypes
                .FirstOrDefaultAsync(a => a.Id == activityTypeId);
        }

        public async Task<bool> ActivityTypeExistsAsync (int activityTypeId)
        {
            return await _ctx.ActivityTypes.AnyAsync(e => e.Id == activityTypeId);
        }
        #endregion

        #region Token user

        public async Task AddTokenUser(string token, string userid)
        {
            var model = new TokenUser
            {
                Token = token,
                LMSUserId = userid
            };
            
            await _ctx.AddAsync(model);
        }

        public async Task<bool> RemoveTokenUser(string token)
        {
            var models = _ctx.TokenUsers.Where(tu => tu.Token == token);

            _ctx.RemoveRange(models);
            return await _ctx.SaveChangesAsync() > 0;
        }


        public async Task<bool> IsTeacher(string token)
        {
            var User = _ctx.TokenUsers
                 .Include(tu => tu.LMSUser)
                 .FirstOrDefault(tu => tu.Token == token)
                 ?.LMSUser;
           var roles= await _userManager.GetRolesAsync(User);

            return roles.Any(r => r == "Teacher");


        }

        #endregion  

    }
}