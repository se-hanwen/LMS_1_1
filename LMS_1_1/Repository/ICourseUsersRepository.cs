using LMS_1_1.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Repository
{
    public interface ICourseUsersRepository
    {
        IQueryable<CourseUser> GetCourseUsers(Guid CourseId);

        IQueryable<CourseUser> GetCoursesForUsers(string LMSUserId);

        Task AddCourseUser(Guid CouresID, string LMSUserid);

        Task RemoveCourseUser(Guid CouresID, string LMSUserid);

    }
}
