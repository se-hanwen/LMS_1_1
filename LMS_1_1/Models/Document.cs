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
        public DateTime UploadDate { get; set; }
        public string  Description { get; set; }
        public string Path { get; set; }

        public string LMSUserId { get; set; }
        [ForeignKey("LMSUserId")]
        public LMSUser LMSUser { get; set; }

        public Guid? CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Course Courses { get; set; }

        public Guid? ModuleId { get; set; }
        [ForeignKey("ModuleId")]
        public Module Module { get; set; }

        public Guid? ActivityId { get; set; }
        [ForeignKey("ActivityId")]
        public LMSActivity Activity { get; set; }

        public int DocumentTypeId { get; set; }
        [ForeignKey("DocumentTypeId")]
        public DocumentType DocumentType { get; set; }

     
    }
}
