using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class UserViewModel
    {
        public List<SubUserViewModel> Users { get; set; }
        public Guid CourseID { get; set; }
        public Course Course { get; set; }
    }

    public class SubUserViewModel
    {
        public LMSUser User { get; set; }
        public List<Guid> Coureids { get; set; }

    }


}
