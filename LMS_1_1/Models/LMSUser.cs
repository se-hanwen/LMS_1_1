using Microsoft.AspNetCore.Identity;

namespace LMS_1_1.Models
{
    public class LMSUser : IdentityUser
    {
        [PersonalData]
        public string FirstName { get; set; }
        [PersonalData]
        public string LastName { get; set; }
    }
}
