using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace LMS_1_1.Controllers
{
    public class HomeController : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            var bRole = User.IsInRole(ConstDefine.R_TEACHER);

            if (bRole)
            {
                return RedirectToAction("Index", "Courses");
            }

            bRole = User.IsInRole(ConstDefine.R_STUDENT);
            if (bRole)
            {
                return RedirectToAction( "ShowStudent" ,"Courses");
            }

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
