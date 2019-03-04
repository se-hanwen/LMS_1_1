using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

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
                CourseID = db.CourseUsers.Where(cu => cu.LMSUserId == userid).FirstOrDefault().CourseId;
            }

            var res = await db.CourseUsers
                 .Include(cu => cu.LMSUser)
                 .Where(cu => cu.CourseId == CourseID.Value).ToListAsync();
            return View(res);
        }

    }
}
