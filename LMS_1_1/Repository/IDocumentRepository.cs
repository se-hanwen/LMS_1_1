using LMS_1_1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Repository
{
    public interface IDocumentRepository
    {
        Task<IEnumerable<Document>> GetAllDocumentsAsync ();
        Task<Document> GetDocumentByIdAsync (Guid documentId);

        Task<DocumentType> GetDocumentTypeByIdAsync (int documentTypeId);
        Task AddDocumentAsync (Document model);
        void RemoveDocumentAsync (Document model);
        Task<bool> SaveAllAsync ();
    }
}
