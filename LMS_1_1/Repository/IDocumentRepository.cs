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
        string UploadFile (IFormFile file,string path);
        FileStream DownloadFile (string path, string fileName);
        Task<bool> IsExistDocumentByPathAsync (string path);
        bool RemoveFile (string path,string fileName);
        string GetDocumentUploadPath ();
        Task<IEnumerable<Document>> GetAllDocumentsAsync ();
        Task<Document> GetDocumentByIdAsync (Guid documentId);
        Task<List<Document>> GetDocumentsByIdOwnerAsync (Guid OwnerId);

        Task<DocumentType> GetDocumentTypeByIdAsync (int documentTypeId);
        Task AddDocumentAsync (Document model);
        Task RemoveDocumentAsync (Document model);
        Task<bool> SaveAllAsync ();
        Task<bool> RemoveDocumentRangeAsync(List<Document> docCourse);
    }
}
