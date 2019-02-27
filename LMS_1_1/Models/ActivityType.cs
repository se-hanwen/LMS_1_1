using System.Collections.Generic;

namespace LMS_1_1.Models
{
    public class ActivityType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        ICollection<LMSActivity> LMSActivities { get; set; }
    }
}
