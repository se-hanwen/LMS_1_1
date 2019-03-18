using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class Document
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        [DataType(DataType.Date)]
        public DateTime UploadDate { get; set; }
        public string  Description { get; set; }
        public string Path { get; set; }

        public string LMSUserId { get; set; }
        public LMSUser LMSUser { get; set; }

        public Guid? CourseId { get; set; }
        public Course Courses { get; set; }

        public Guid? ModuleId { get; set; }
        public Module Module { get; set; }

        public Guid? LMSActivityId { get; set; }
        public LMSActivity LMSActivity { get; set; }

        public int DocumentTypeId { get; set; }
        public DocumentType DocumentType { get; set; }

     
    }
}
