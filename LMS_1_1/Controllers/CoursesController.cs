using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using Microsoft.Extensions.Logging;

namespace LMS_1_1.Controllers
{
    public class CoursesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IProgramRepository _repository;
        private readonly ILogger<CoursesController> _logger;

        public CoursesController (IProgramRepository repository, ILogger<CoursesController> logger, ApplicationDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _context = context;
           
        }
        // GET: Courses
        public async Task<IActionResult> Index()
        {
            return View( _repository.GetAllCourses(false));
          //  return View(await _context.Courses.ToListAsync());
        }

        // GET: Courses/Details/5
        public async Task<IActionResult> Details(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var course = _repository.GetCourseById(id, true);
         /*   var course = await _context.Courses
                .FirstOrDefaultAsync(m => m.Id == id);*/
            if (course == null)
            {
                return NotFound();
            }

            return View(course);
        }

        // GET: Courses/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Courses/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public  IActionResult Create([Bind("Id,Name,StartDate,Description")] Course course)
        {
            if (ModelState.IsValid)
            {
                _repository.AddEntity(course);
                _repository.SaveAll();
               // _context.Add(course);
                //await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(course);
        }

        // GET: Courses/Edit/5
        public async Task<IActionResult> Edit(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var course = _repository.GetCourseById(id, false);
           /* var course = await _context.Courses.FindAsync(id);*/
            if (course == null)
            {
                return NotFound();
            }
            return View(course);
        }

        // POST: Courses/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name,StartDate,Description")] Course course)
        {
            if (id != course.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _repository.UpdateEntity(course);
                    _repository.SaveAll();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_repository.CourseExists(course.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(course);
        }

        // GET: Courses/Delete/5
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var course = _repository.GetCourseById(id, false);

            /* var course = await _context.Courses
                 .FirstOrDefaultAsync(m => m.Id == id);*/
            if (course == null)
            {
                return NotFound();
            }

            return View(course);
        }

        // POST: Courses/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var course = _repository.GetCourseById(id, false);
            _repository.RemoveEntity(course);
            _repository.SaveAll();
            return RedirectToAction(nameof(Index));
        }

        
    }
}
