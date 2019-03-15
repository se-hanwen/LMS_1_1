using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using LMS_1_1.Data;
using LMS_1_1.Models;

namespace LMS_1_1.Controllers
{
    public class DocumentsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DocumentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Documents
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Documents.Include(d => d.LMSActivity).Include(d => d.Courses).Include(d => d.DocumentType).Include(d => d.LMSUser).Include(d => d.Module);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Documents/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var document = await _context.Documents
                .Include(d => d.LMSActivityId)
                .Include(d => d.Courses)
                .Include(d => d.DocumentType)
                .Include(d => d.LMSUser)
                .Include(d => d.Module)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (document == null)
            {
                return NotFound();
            }

            return View(document);
        }

        // GET: Documents/Create
        public IActionResult Create()
        {
            ViewData["ActivityId"] = new SelectList(_context.LMSActivity, "Id", "Description");
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Description");
            ViewData["DocumentTypeId"] = new SelectList(_context.Set<DocumentType>(), "Id", "Name");
            ViewData["LMSUserId"] = new SelectList(_context.LMSUsers, "Id", "FirstName");
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Description");
            return View();
        }

        // POST: Documents/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Description,Path,LMSUserId,CourseId,ModuleId,ActivityId,DocumentTypeId")] Document document)
        {
            if (ModelState.IsValid)
            {
                document.Id = Guid.NewGuid();
                _context.Add(document);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ActivityId"] = new SelectList(_context.LMSActivity, "Id", "Description", document.LMSActivityId);
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Description", document.CourseId);
            ViewData["DocumentTypeId"] = new SelectList(_context.Set<DocumentType>(), "Id", "Id", document.DocumentTypeId);
            ViewData["LMSUserId"] = new SelectList(_context.LMSUsers, "Id", "Id", document.LMSUserId);
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Description", document.ModuleId);
            return View(document);
        }

        // GET: Documents/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var document = await _context.Documents.FindAsync(id);
            if (document == null)
            {
                return NotFound();
            }
            ViewData["ActivityId"] = new SelectList(_context.LMSActivity, "Id", "Description", document.LMSActivityId);
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Description", document.CourseId);
            ViewData["DocumentTypeId"] = new SelectList(_context.Set<DocumentType>(), "Id", "Id", document.DocumentTypeId);
            ViewData["LMSUserId"] = new SelectList(_context.LMSUsers, "Id", "Id", document.LMSUserId);
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Description", document.ModuleId);
            return View(document);
        }

        // POST: Documents/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name,Description,Path,LMSUserId,CourseId,ModuleId,ActivityId,DocumentTypeId")] Document document)
        {
            if (id != document.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(document);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DocumentExists(document.Id))
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
            ViewData["ActivityId"] = new SelectList(_context.LMSActivity, "Id", "Description", document.LMSActivityId);
            ViewData["CourseId"] = new SelectList(_context.Courses, "Id", "Description", document.CourseId);
            ViewData["DocumentTypeId"] = new SelectList(_context.Set<DocumentType>(), "Id", "Id", document.DocumentTypeId);
            ViewData["LMSUserId"] = new SelectList(_context.LMSUsers, "Id", "Id", document.LMSUserId);
            ViewData["ModuleId"] = new SelectList(_context.Modules, "Id", "Description", document.ModuleId);
            return View(document);
        }

        // GET: Documents/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var document = await _context.Documents
                .Include(d => d.LMSActivityId)
                .Include(d => d.Courses)
                .Include(d => d.DocumentType)
                .Include(d => d.LMSUser)
                .Include(d => d.Module)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (document == null)
            {
                return NotFound();
            }

            return View(document);
        }

        // POST: Documents/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var document = await _context.Documents.FindAsync(id);
            _context.Documents.Remove(document);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DocumentExists(Guid id)
        {
            return _context.Documents.Any(e => e.Id == id);
        }
    }
}
