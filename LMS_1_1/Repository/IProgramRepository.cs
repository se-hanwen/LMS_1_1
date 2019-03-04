using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Models;

namespace LMS_1_1.Repository
{
    public interface IProgramRepository
    {

        IQueryable<Course> GetAllCourses (bool includeModule);
        Course GetCourseById(Guid courseId, bool includeModule);
        bool CourseExists(Guid id);
        /* Course FindCourseById (string courseId);*/


        IQueryable<Module> GetAllModules (bool includeActivities);
        Module GetModuleById (Guid moduleId, bool includeActivity);
        bool ModuleExists (Guid id);



        IQueryable<LMSActivity> GetAllActivities ();
        LMSActivity GetActivityById (Guid activityId);
        bool LMSActivityExists (Guid id);

        IQueryable<ActivityType> GetAllActivityTypes ();
        ActivityType GetAllActivityTypesById (int activityTypeId);
        bool ActivityTypeExists (int id);


        bool SaveAll ();
        void AddEntity (object model);
        void UpdateEntity (object model);
        void RemoveEntity (object model);
    }
}
