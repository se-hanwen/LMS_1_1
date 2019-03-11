
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class Course : IProgram
    {
        /* public Course()
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
        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }
        [Required]
        public string Description { get; set; }

        public string courseImgPath { get; set; }
        public ICollection<Module> Modules { get; set; }

    }
}
