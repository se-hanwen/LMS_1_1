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
using Microsoft.AspNetCore.Authorization;

namespace LMS_1_1.Controllers
{
    [Authorize]
    public class ModulesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IProgramRepository _repository;
        private readonly ILogger<ModulesController> _logger;

        public ModulesController (IProgramRepository repository, ILogger<ModulesController> logger, ApplicationDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _context = context;
        }
        // GET: Modules
        [Authorize]
        public async Task<IActionResult> Index()
        {
           
            return View( _repository.GetAllModules(false));
        }

        // GET: Modules/Details/5
        [Authorize]
        public async Task<IActionResult> Details(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var module =  _repository.GetModuleById(id, true);
            if (module == null)
            {
                return NotFound();
            }

            return View(module);
        }

        // GET: Modules/Create
        [Authorize(Roles = "Teacher")]
        public IActionResult Create()
        {
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Name");
            return View();
        }

        // POST: Modules/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize(Roles = "Teacher")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,StartDate,EndDate,Description,CourseId")] Module module)
        {
            if (ModelState.IsValid)
            {
                 _repository.AddEntity(module);
                 _repository.SaveAll();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Name", module.CourseId);
            return View(module);
        }

        // GET: Modules/Edit/5
        [Authorize(Roles = "Teacher")]
        public async Task<IActionResult> Edit(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var module =  _repository.GetModuleById(id, false);
            if (module == null)
            {
                return NotFound();
            }
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Name", module.CourseId);
            return View(@module);
        }

        // POST: Modules/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize(Roles = "Teacher")]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name,StartDate,EndDate,Description,CourseId")] Module module)
        {
            if (id != module.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                     _repository.UpdateEntity(module);
                     _repository.SaveAll();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if ( ! _repository.ModuleExists(module.Id))
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
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Name", @module.CourseId);
            return View(@module);
        }

        // GET: Modules/Delete/5
        [Authorize(Roles = "Teacher")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var module =  _repository.GetModuleById(id, false);
            if (@module == null)
            {
                return NotFound();
            }

            return View(@module);
        }

        // POST: Modules/Delete/5
        [Authorize(Roles = "Teacher")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var module =  _repository.GetModuleById(id, false);
             _repository.RemoveEntity(module);
             _repository.SaveAll();
            return RedirectToAction(nameof(Index));
        }

        
    }
}
