using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class SaveUsercourseListViewmodel
    {
        public string Courseid { get; set; }

        public ICollection<string> Userids { get; set; }
    }
}
