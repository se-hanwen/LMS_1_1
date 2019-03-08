using LMS_1_1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Repository
{
    public interface ICourseUsersRepository
    {
        IQueryable<CourseUser> GetCourseUsers(string CourseId);

        IQueryable<CourseUser> GetCoursesForUsers(string LMSUserId);

        Task AddCourseUser(string CouresID, string LMSUserid);

        Task RemoveCourseUser(Guid CouresID, string LMSUserid);

        Task RemoveAllCourseUsers(string CouresID);

        Task<ICollection<LMSUser>> GetUsers(string courseId, bool choosed);
        Task<bool> SaveChanges();
    }
}
