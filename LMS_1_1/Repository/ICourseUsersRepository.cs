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

        Task RemoveAllCourseUsersForCourse(string CouresID);
        Task RemoveAllCourseUsersForUser(string UserID);

        Task<ICollection<LMSUser>> GetUsers(string courseId, bool choosed);
        Task<string> GetCourseName(string CourseId);
        Task<bool> SaveChanges();
        Task<ICollection<Course>> GetCoursesOffAsync(string UserId);
        Task<ICollection<Course>> GetCoursesOnAsync(string UserId);
    }
}
