using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    [NotMapped]
    public class ShowStudent
    {
        public string StudentID { get; set; }

        public Guid CourseID { get; set; }

        public string CourseName { get; set; }
    }
}
