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
    public class ClassUserListViewComponent : ViewComponent
    {
        private readonly ApplicationDbContext db;
        private readonly UserManager<LMSUser> userManager;

        public ClassUserListViewComponent(ApplicationDbContext context, UserManager<LMSUser> userManager)
        {
            this.db = context;
            this.userManager = userManager;
        }


        public async Task<IViewComponentResult> InvokeAsync(Guid? CourseID)
        {
            if (CourseID == null)
            {
                string userid = userManager.GetUserId(this.UserClaimsPrincipal);
                var temp = db.CourseUsers.Where(cu => cu.LMSUserId == userid);
                if (temp.Count() > 0)
                {
                    CourseID = temp.FirstOrDefault().CourseId;
                    var res = await db.CourseUsers
                            .Include(cu => cu.LMSUser)
                            .Where(cu => cu.CourseId == CourseID.Value).ToListAsync();
                    return View(res);
                }
            }
            List<CourseUser> res2 = new List<CourseUser>();
            return View(res2);



        }

    }
}
