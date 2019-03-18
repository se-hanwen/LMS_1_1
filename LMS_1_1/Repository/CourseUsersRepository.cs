using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Repository
{
    public class CourseUsersRepository : ICourseUsersRepository
    {
        private readonly ApplicationDbContext _context;

        private readonly ILogger<ProgramRepository> _logger;
        private readonly UserManager<LMSUser> _userManager;

        public CourseUsersRepository(ApplicationDbContext context, ILogger<ProgramRepository> logger
            , UserManager<LMSUser> userManager
            )
        {
            _context = context;
            _logger = logger;
            _userManager = userManager;
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

        public async Task<string> GetCourseName(string CourseId)
        {
           var res= await  _context
                   .Courses.FirstOrDefaultAsync(c => c.Id.ToString() == CourseId);

            return res.Name;

        }

        public async Task AddCourseUser(string CourseID, string LMSUserid)
        {
            var temp = new CourseUser{ LMSUserId = LMSUserid };
            temp.Course = await _context.Courses.FirstOrDefaultAsync(c => c.Id.ToString() == CourseID);
            temp.CourseId = temp.Course.Id;

            _context.Add(temp);
           // await _context.SaveChangesAsync();
        }

        public async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync() > 0;  
        }
        public async Task RemoveCourseUser(Guid CouresID, string LMSUserid)
        {
            _context.Remove(new CourseUser { CourseId = CouresID, LMSUserId = LMSUserid });
            await _context.SaveChangesAsync();
        }

        public async Task RemoveAllCourseUsersForCourse(string CouresID)
        {
              var temp = _context.CourseUsers.Where(cu => cu.CourseId.ToString() == CouresID);

            foreach (var cuser in temp)
            {
                _context.CourseUsers.Remove(cuser);
            }


           // _context.CourseUsers
            await _context.SaveChangesAsync();
        }


        public async Task RemoveAllCourseUsersForUser(string UserID)
        {
            var temp = _context.CourseUsers.Where(cu => cu.LMSUserId.ToString() == UserID);

            foreach (var cuser in temp)
            {
                _context.CourseUsers.Remove(cuser);
            }


            // _context.CourseUsers
            await _context.SaveChangesAsync();
        }

        public async Task<ICollection<LMSUser>> GetUsers(string courseId, bool choosed)
        {
  
                var res = await _context.CourseUsers
                    .Include(cu => cu.LMSUser)
                    .Where(cu => cu.CourseId.ToString() == courseId)
                    .Select(cu => cu.LMSUser).OrderBy(cu=>cu.FirstName).ThenBy(cu=>cu.LastName).ToListAsync();
            
            if(!choosed)
            {


                var res2 = (await _userManager.GetUsersInRoleAsync("Student")).ToList();
              // var res3= res2.Except(res);
                 foreach (var user in res)
                 {
                    res2.RemoveAll(u => u.Id == user.Id);
                 }



                return res2;
            }

            return res;
        }

        public async Task<ICollection<Course>> GetCoursesOffAsync(string UserId)
        {
            var nulllist = new List<string>
            {
                "null"
            };
            var courseids = (UserId == null) ? nulllist : await _context.CourseUsers.Where(cu => cu.LMSUserId == UserId).Select(cu => cu.CourseId.ToString()).ToListAsync();
            var res = _context.Courses
                    .Where(c => !courseids.Contains(c.Id.ToString()));

            return await res.ToListAsync();

        }

        public async Task<ICollection<Course>> GetCoursesOnAsync(string UserId)
        {
            var nulllist = new List<string>
            {
                "null"
            };
            var courseids = (UserId == null) ? nulllist : await _context.CourseUsers.Where(cu => cu.LMSUserId == UserId).Select(cu => cu.CourseId.ToString()).ToListAsync();
            var res = _context.Courses
                    .Where(c => courseids.Contains(c.Id.ToString()));

            return await res.ToListAsync();

        }
    }
}
