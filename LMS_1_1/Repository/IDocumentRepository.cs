using LMS_1_1.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Repository
{
    public interface IDocumentRepository
    {
        Task<string> UploadFile (IFormFile file);
        Task<FileStream> DownloadFile (string fileName);
        Task<bool> RemoveFile (string fileName);

        Task<IEnumerable<Document>> GetAllDocumentsAsync ();
        Task<Document> GetDocumentByIdAsync (Guid documentId);
        Task<IEnumerable<Document>> GetDocumentsByIdOwnerAsync (Guid OwnerId);

        Task<DocumentType> GetDocumentTypeByIdAsync (int documentTypeId);
        Task AddDocumentAsync (Document model);
        void RemoveDocumentAsync (Document model);
        void SaveAllAsync ();
    }
}
