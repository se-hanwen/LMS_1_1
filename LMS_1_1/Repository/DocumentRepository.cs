using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_1_1.Data;
using LMS_1_1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace LMS_1_1.Repository
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly ApplicationDbContext _ctx;
        private readonly ILogger<ProgramRepository> _logger;

        public DocumentRepository (ApplicationDbContext ctx, ILogger<ProgramRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
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

        public async Task<DocumentType> GetDocumentTypeByIdAsync (int documentTypeId)
        {
            return await _ctx.DocumentTypes
                        .FirstOrDefaultAsync(dt => dt.Id== documentTypeId);
        }

        public void RemoveDocumentAsync (Document model)
        {
            _ctx.Remove(model);
        }

        public async Task<bool> SaveAllAsync ()
        {
            return await _ctx.SaveChangesAsync() > 0;
        }
    }
}
