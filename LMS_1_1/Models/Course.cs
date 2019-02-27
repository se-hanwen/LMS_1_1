using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class Course : IProgram
    {
        public Course()
        {
            Id = (new Guid()).ToString();
        }
        public string Id { get ; set ; }
        public string Name { get ; set ; }
        public DateTime StartDate { get; set; }
        public string Description { get ; set ; }

        ICollection<Module> Modules { get; set; }
    }
}
