﻿using System;
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
    public class LMSActivitiesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IProgramRepository _repository;
        private readonly ILogger<ModulesController> _logger;

      
        public LMSActivitiesController (IProgramRepository repository, ILogger<ModulesController> logger,ApplicationDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _context = context;

        }

        // GET: LMSActivities
        public async Task<IActionResult> Index()
        {
            
            return View(_repository.GetAllActivities());
        }

        // GET: LMSActivities/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lMSActivity = _repository.GetActivityById(id);
            if (lMSActivity == null)
            {
                return NotFound();
            }

            return View(lMSActivity);
        }

        // GET: LMSActivities/Create
        public IActionResult Create()
        {
            ViewData["ActivityTypeId"] = new SelectList(_context.ActivityTypes, "Id", "Name");
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Name");
            return View();
        }

        // POST: LMSActivities/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,StartDate,EndDate,Description,ModuleId,ActivityTypeId")] LMSActivity lMSActivity)
        {
            if (ModelState.IsValid)
            {
                _repository.AddEntity(lMSActivity);
                _repository.SaveAll();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ActivityTypeId"] = new SelectList(_context.ActivityTypes, "Id", "Name", lMSActivity.ActivityTypeId);
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Name", lMSActivity.ModuleId);
            return View(lMSActivity);
        }

        // GET: LMSActivities/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lMSActivity = _repository.GetActivityById(id);
            if (lMSActivity == null)
            {
                return NotFound();
            }
            ViewData["ActivityTypeId"] = new SelectList(_context.ActivityTypes, "Id", "Name", lMSActivity.ActivityTypeId);
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Name", lMSActivity.ModuleId);
            return View(lMSActivity);
        }

        // POST: LMSActivities/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id,Name,StartDate,EndDate,Description,ModuleId,ActivityTypeId")] LMSActivity lMSActivity)
        {
            if (id != lMSActivity.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _repository.UpdateEntity(lMSActivity);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_repository.LMSActivityExists(lMSActivity.Id))
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
            ViewData["ActivityTypeId"] = new SelectList(_context.ActivityTypes, "Id", "Name", lMSActivity.ActivityTypeId);
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Name", lMSActivity.ModuleId);
            return View(lMSActivity);
        }

        // GET: LMSActivities/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var lMSActivity = _repository.GetActivityById(id);
            if (lMSActivity == null)
            {
                return NotFound();
            }

            return View(lMSActivity);
        }

        // POST: LMSActivities/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var lMSActivity = _repository.GetActivityById(id);
            _repository.RemoveEntity(lMSActivity);
            _repository.SaveAll();
            return RedirectToAction(nameof(Index));
        }

        
    }
}
