using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.ViewModels
{
    public class CloneFormModel
    {
        public string OldCourseid { get; set; }
        public string Name { get; set; }
        public DateTime NewDate { get; set; }
        public string Description { get; set; }
        public IFormFile FileData { get; set; }
    
        public string NewCourseId { get; set; }
    }

    public class CloneModuleModel
    {
        public string OldModuleid { get; set; }
  
        public string Name { get; set; }
    
        public DateTime StartDate { get; set; }
     
        public DateTime EndDate { get; set; }
    
        public string Description { get; set; }

        public string NewModuleid { get; set; }

        public Guid CourseId { get; set; }
    }
 public class CloneActivityModel
    {
        public string OldActivityId { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public int ActivityTypeId { get; set; }
        public string moduleid { get; set; }

        public string NewActivityId { get; set; }
    }

     public class CloneDocumentModel
    {

        public string oldId { get; set; }
        public string Name { get; set; }

        public DateTime UploadDate { get; set; }
        public string  Description { get; set; }
        public string Path { get; set; }

        public string LMSUserId { get; set; }
  
        public string OldCourseId { get; set; }
        public string NewCourseId { get; set; }
    
        public string OldModuleId { get; set; }
        public string NewModuleId { get; set; }
        
        public string OldLMSActivityId { get; set; }
        public string NewLMSActivityId { get; set; }
      

        public int DocumentTypeId { get; set; }
    
     
    }
}