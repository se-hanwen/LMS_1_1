using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.ViewModels
{
    public class SaveUsercourseListViewmode
    {
        public string UserId { get; set; }
        public ICollection<string> CourseIds { get; set; }
    }
}
