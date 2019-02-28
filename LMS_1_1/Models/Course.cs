using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public string Description { get; set; }

       public ICollection<Module> Modules { get; set; }
       
    }
}
