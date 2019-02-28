using System;
using System.Collections.Generic;

namespace LMS_1_1.Models
{
    public class Module : IProgram
    {

        public Module()
        {
            Id = (new Guid()).ToString();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }

        public string  CourseId { get; set; }
        public Course Courses { get; set; }

        public ICollection<LMSActivity> LMSActivities { get; set; }

    }
}
