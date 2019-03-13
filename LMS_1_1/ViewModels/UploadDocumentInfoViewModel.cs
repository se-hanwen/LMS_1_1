using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.ViewModels
{
    public class UploadDocumentInfoViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        [DataType(DataType.Date)]
        public DateTime UploadDate { get; set; }
        public string UploaderId { get; set; }
        public int DocumentTypeId { get; set; }
        public int DocOwnerTypeId { get; set; }
        public Guid DocOwnerId { get; set; }
        public IFormFile FileData { get; set; }
    }

  public  enum DocOwnerType
    {
        Course=1,
        Module=2,
        Activity


    }
}
