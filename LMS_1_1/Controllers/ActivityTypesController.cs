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
    [Authorize(Roles ="Teacher")]
    public class ActivityTypesController : Controller
    {

        private readonly ApplicationDbContext _context;

        private readonly IProgramRepository _repository;
        private readonly ILogger<ModulesController> _logger;


        public ActivityTypesController (IProgramRepository repository, ILogger<ModulesController> logger,ApplicationDbContext context)
        {
            _repository = repository;
            _logger = logger;
            _context = context;
        }
        

        // GET: ActivityTypes
        public async Task<IActionResult> Index()
        {
            return View( _repository.GetAllActivityTypes());
        }

        // GET: ActivityTypes/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var activityType =  _repository.GetAllActivityTypesById(Convert.ToInt32(id));
            if (activityType == null)
            {
                return NotFound();
            }

            return View(activityType);
        }

        // GET: ActivityTypes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: ActivityTypes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] ActivityType activityType)
        {
            if (ModelState.IsValid)
            {
                 _repository.AddEntity(activityType);
                 _repository.SaveAll();
                return RedirectToAction(nameof(Index));
            }
            return View(activityType);
        }

        // GET: ActivityTypes/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var activityType =  _repository.GetAllActivityTypesById(Convert.ToInt32(id));
            if (activityType == null)
            {
                return NotFound();
            }
            return View(activityType);
        }

        // POST: ActivityTypes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name")] ActivityType activityType)
        {
            if (id != activityType.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                     _repository.UpdateEntity(activityType);
                     _repository.SaveAll();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (! _repository.ActivityTypeExists(activityType.Id))
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
            return View(activityType);
        }

        // GET: ActivityTypes/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var activityType =  _repository.GetAllActivityTypesById(Convert.ToInt32(id));
            if (activityType == null)
            {
                return NotFound();
            }

            return View(activityType);
        }

        // POST: ActivityTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var activityType =  _repository.GetAllActivityTypesById(Convert.ToInt32(id));
             _repository.RemoveEntity(activityType);
             _repository.SaveAll();
            return RedirectToAction(nameof(Index));
        }

      
    }
}
