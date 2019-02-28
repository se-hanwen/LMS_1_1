using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Models;

namespace LMS_1_1.Repository
{
    public interface IProgramRepository
    {
       
        IEnumerable<Course> GetAllCourses (bool includeModule);
        Course GetCourseById (string courseId, bool includeModule);
        bool CourseExists (string id);
       /* Course FindCourseById (string courseId);*/


        IEnumerable<Module> GetAllModules (bool includeActivities);
        Module GetModuleById (string moduleId, bool includeActivity);
        bool ModuleExists (string id);



        IEnumerable<LMSActivity> GetAllActivities ();
        LMSActivity GetActivityById (string activityId);
        bool LMSActivityExists (string id);

        IEnumerable<ActivityType> GetAllActivitiyTypes ();
        ActivityType GetAllActivitiyTypesById (int activityTypeId);
        bool ActivityTypeExists (int id);


        bool SaveAll ();
        void AddEntity (object model);
        void UpdateEntity (object model);
        void RemoveEntity (object model);
    }
}
