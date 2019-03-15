using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace LMS_1_1.Repository
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly ApplicationDbContext _ctx;
        private readonly ILogger<ProgramRepository> _logger;
        private readonly IHostingEnvironment _environment;

        public DocumentRepository (ApplicationDbContext ctx, ILogger<ProgramRepository> logger, IHostingEnvironment environment)
        {
            _ctx = ctx;
            _logger = logger;
            _environment = environment;
        }
        public async Task AddDocumentAsync (Document model)
        {
            await _ctx.AddAsync(model);
        }

        public async Task<IEnumerable<Document>> GetAllDocumentsAsync ()
        {
            return await _ctx.Documents.ToListAsync();

        }


        public async Task<Document> GetDocumentByIdAsync (Guid documentId)
        {
            return await _ctx.Documents
                       .FirstOrDefaultAsync(d => d.Id == documentId);

        }

        public async Task<IEnumerable<Document>> GetDocumentsByIdOwnerAsync (Guid OwnerId)
        {
            return await _ctx.Documents
                     .Where(d => d.CourseId == OwnerId|| d.ModuleId == OwnerId || d.LMSActivityId == OwnerId).ToListAsync();
        }

        public async Task<DocumentType> GetDocumentTypeByIdAsync (int documentTypeId)
        {
            return await _ctx.DocumentTypes
                        .FirstOrDefaultAsync(dt => dt.Id== documentTypeId);
        }

        public void RemoveDocumentAsync (Document model)
        {
            _ctx.Remove(model);
        }

        public void SaveAllAsync ()
        {
            try
            {
                  _ctx.SaveChanges() ;
            }
            catch(Exception ex)
            {
              Console.Write( ex.Message);
            }
        }


        public async Task<bool> UploadFile (IFormFile file)
        {
            try
            {
                string rootPath = _environment.ContentRootPath;
                var folderName = Path.Combine("Attachements", "Documents");
                var path = Path.Combine(rootPath, folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(path, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return true;

                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<FileStream> DownloadFile (string fileName)
        {
            string rootPath = _environment.ContentRootPath;
            var folderName = Path.Combine("Attachements", "Documents");
            var path = Path.Combine(rootPath, folderName);
            var file = Path.Combine(path, fileName);
            if(File.Exists(file))
            return new FileStream(file, FileMode.Open, FileAccess.Read);
            return null;
        }

        public async Task<bool> RemoveFile (string fileName)
        {
            string rootPath = _environment.ContentRootPath;
            var folderName = Path.Combine("Attachements", "Documents");
            var path = Path.Combine(rootPath, folderName);
            var file = Path.Combine(path, fileName);
            if (File.Exists(file))
            {
                File.Delete(file);
                return true;
            }
            return false;
        }
    }
}
