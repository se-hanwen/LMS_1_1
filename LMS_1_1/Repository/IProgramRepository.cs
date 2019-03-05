using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Models;

namespace LMS_1_1.Repository
{
    public interface IProgramRepository
    {

        Task<IEnumerable<Course>> GetAllCoursesAsync (bool includeModule);
        Task<Course> GetCourseByIdAsync (Guid courseId, bool includeModule);
        Task<bool> CourseExistsAsync (Guid id);
        /* Course FindCourseById (string courseId);*/


        Task<IEnumerable<Module>> GetAllModulesAsync (bool includeActivities);
        Task<Module> GetModuleByIdAsync (Guid moduleId, bool includeActivity);
        Task<bool> ModuleExistsAsync (Guid id);



        Task<IEnumerable<LMSActivity>> GetAllActivitiesAsync ();
        Task<LMSActivity> GetActivityByIdAsync (Guid activityId);
        Task<bool> LMSActivityExistsAsync (Guid id);

        Task<IEnumerable<ActivityType>> GetAllActivityTypesAsync ();
        Task<ActivityType> GetAllActivityTypesByIdAsync (int activityTypeId);
        Task<bool> ActivityTypeExistsAsync (int id);


        Task<bool> SaveAllAsync ();
        Task AddEntityAsync (object model);
        void UpdateEntity (object model);
        void RemoveEntity (object model);
    }
}
