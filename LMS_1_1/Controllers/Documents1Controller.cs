using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LMS_1_1.Data;
using LMS_1_1.Models;
using LMS_1_1.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using LMS_1_1.ViewModels;
using System.IO;

namespace LMS_1_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Documents1Controller : ControllerBase
    {
        private readonly ApplicationDbContext _context;
       
        private readonly IDocumentRepository _repository;
        private readonly ILogger<Documents1Controller> _logger;

        public Documents1Controller(IDocumentRepository repository, ILogger<Documents1Controller> logger, ApplicationDbContext context)
        {
            _repository = repository;
            _logger = logger;
          
        }

        // GET: api/Documents1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Document>>> GetDocuments()
        {
            return Ok(await _repository.GetAllDocumentsAsync());
        }

        // GET: api/Documents1/5
      [HttpGet]
        public async Task<ActionResult<Document>> GetDocument(string id)
        {
            Guid idG = Guid.Parse(id);
            var document = await _repository.GetDocumentByIdAsync(idG);

            if (document == null)
            {
                return NotFound();
            }

            return Ok(document);
        }

        // GET: api/Documents1/5
        [HttpGet("ByOwner")]
        public async Task<ActionResult<IEnumerable<Document>>> GetDocumentByOwner(string id)
        {
            Guid idG = Guid.Parse(id);
           var document = await _repository.GetDocumentsByIdOwnerAsync(idG);

            if (document == null)
            {
                return NotFound();
            }

             return Ok(document);
        }

        

        // PUT: api/Documents1/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocument(Guid id, Document document)
        {
            if (id != document.Id)
            {
                return BadRequest();
            }

            _context.Entry(document).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Documents1
        [HttpPost, DisableRequestSizeLimit]
        public async Task<ActionResult<Document>> PostDocument([FromForm] UploadDocumentInfoViewModel documentVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
           string fileName= await _repository.UploadFile(documentVm.FileData);
            if(fileName!=null)
                {
                Document document = new Document
                {
                    Name = documentVm.Name,
                    Description = documentVm.Description,
                    UploadDate = DateTime.Now,
                    Path = fileName,
                    LMSUserId = documentVm.UploaderId,
                    DocumentTypeId = documentVm.DocumentTypeId,

                    CourseId = documentVm.DocOwnerTypeId == (int)DocOwnerType.Course ? documentVm.DocOwnerId : null,
                    ModuleId = documentVm.DocOwnerTypeId == (int)DocOwnerType.Module ? documentVm.DocOwnerId : null,
                    LMSActivityId = documentVm.DocOwnerTypeId == (int)DocOwnerType.Activity ? documentVm.DocOwnerId : null
                };
                await _repository.AddDocumentAsync(document);

                _repository.SaveAllAsync();

                return CreatedAtAction("GetDocument", new { id = document.Id }, document);
            }
            return BadRequest();
        }

        [HttpPost("DownloadFile"), DisableRequestSizeLimit]
        public async Task<FileStream> DownloadFile (string fileName)
        {      
           
            return  await _repository.DownloadFile(fileName);
        }

        // DELETE: api/Documents1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Document>> DeleteDocument(string id)
        {
            Guid idG = Guid.Parse(id);
            var document = await _repository.GetDocumentByIdAsync(idG);
            if (document == null)
            {
                return NotFound();
            }
            _repository.RemoveDocumentAsync(document);
            await _repository.RemoveFile(document.Path);
            _repository.SaveAllAsync();

            return Ok(document);
        }

        private bool DocumentExists(Guid id)
        {
            return _context.Documents.Any(e => e.Id == id);
        }
    }
}
