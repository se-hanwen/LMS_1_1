using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace LMS_1_1.Models
{
    public class LMSUser : IdentityUser
    {
        [PersonalData]
        public string FirstName { get; set; }
        [PersonalData]
        public string LastName { get; set; }

        public ICollection<CourseUser> CourseUser { get; set; }
    }
}
