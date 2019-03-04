using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LMS_1_1.ViewCompontens
{
    public class ChooseStudentsViewComponent : ViewComponent
    {

        private readonly ApplicationDbContext db;
        private readonly UserManager<LMSUser> userManager;

        public ChooseStudentsViewComponent(ApplicationDbContext context, UserManager<LMSUser> userManager)
        {
            this.db = context;
            this.userManager = userManager;
        }


        public async Task<IViewComponentResult> InvokeAsync(Guid CourseId)
        {
            var Users= await this.userManager.GetUsersInRoleAsync("Student");
            UserViewModel res = new UserViewModel()
            {
                CourseID = CourseId,
                Course = await db.Courses.FirstOrDefaultAsync(c => c.Id == CourseId),
                Users = new List<SubUserViewModel>()

            };


            foreach (var User in Users)
            {
                res.Users.Add(new SubUserViewModel()
                {
                    User = User,
                    Coureids = await db.CourseUsers.Where(cu => cu.LMSUserId == User.Id).Select(cu => cu.CourseId).ToListAsync()
                });

            }

            return View(res);
        }
    }
}

