using System;

namespace LMS_1_1.Models
{
    public class CourseUser
    {
        public Guid CourseId { get; set; }
        public Course Course { get; set; }

        public string UserId { get; set; }
        public LMSUser LMSUser { get; set; }
    }
}
