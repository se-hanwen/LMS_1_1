using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }

        public Guid CourseId { get; set; }
        public Course Courses { get; set; }

        public ICollection<LMSActivity> LMSActivities { get; set; }

    }
}
