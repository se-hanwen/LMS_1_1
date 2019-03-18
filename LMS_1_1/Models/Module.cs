using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class Module : IProgram
    {
        /* public Module()
         {
             Id = Guid.NewGuid();
         }
         */

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public string Description { get; set; }

        [Required]
        public Guid CourseId { get; set; }
        public Course Courses { get; set; }

        public ICollection<Document> Documents { get; set; }
        public ICollection<LMSActivity> LMSActivities { get; set; }

    }
}
