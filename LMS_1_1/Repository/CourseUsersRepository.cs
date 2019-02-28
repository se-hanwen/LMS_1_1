using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Repository
{
    public class CourseUsersRepository : ICourseUsersRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<ProgramRepository> _logger;

        public CourseUsersRepository(ApplicationDbContext context, ILogger<ProgramRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IQueryable<CourseUser> GetCourseUsers(Guid CourseId)
        {
            return _context
                 .CourseUsers
                 .Include(cu => cu.LMSUser)
                 .Where(cu => cu.CourseId == CourseId);
        }


        public IQueryable<CourseUser> GetCoursesForUsers(string LMSUserId)
        {
            return _context
                 .CourseUsers
                 .Include(cu => cu.Course)
                 .Where(cu => cu.LMSUserId == LMSUserId);
        }

        public async Task AddCourseUser(Guid CouresID, string LMSUserid)
        {
            _context.Add(new CourseUser { CourseId = CouresID, LMSUserId = LMSUserid });
            await _context.SaveChangesAsync();
        }

        public async Task RemoveCourseUser(Guid CouresID, string LMSUserid)
        {
            _context.Remove(new CourseUser { CourseId = CouresID, LMSUserId = LMSUserid });
            await _context.SaveChangesAsync();
        }
    }
}
