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



        public IQueryable<CourseUser> GetCourseUsers(string CourseId)
        {
            return _context
                 .CourseUsers
                 .Include(cu => cu.LMSUser)
                 .Where(cu => cu.CourseId.ToString() == CourseId);
        }


        public IQueryable<CourseUser> GetCoursesForUsers(string LMSUserId)
        {
            return _context
                 .CourseUsers
                 .Include(cu => cu.Course)
                 .Where(cu => cu.LMSUserId == LMSUserId);
        }

        public async Task AddCourseUser(string CouresID, string LMSUserid)
        {
            var temp = new CourseUser{ LMSUserId = LMSUserid };
            temp.Course = await _context.Courses.FirstOrDefaultAsync(c => c.Id.ToString() == CouresID);
            temp.CourseId = temp.Course.Id;

            _context.Add(temp);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveCourseUser(Guid CouresID, string LMSUserid)
        {
            _context.Remove(new CourseUser { CourseId = CouresID, LMSUserId = LMSUserid });
            await _context.SaveChangesAsync();
        }

        public async Task RemoveAllCourseUsers(string CouresID)
        {
            var temp = _context.CourseUsers.Where(cu => cu.CourseId.ToString() == CouresID);

            _context.Remove(temp);
            await _context.SaveChangesAsync();
        }
    }
}
