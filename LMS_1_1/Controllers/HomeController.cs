using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Authorization;
using LMS_1_1.Data;

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
                return RedirectToAction("ShowStudent", "Courses");
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
