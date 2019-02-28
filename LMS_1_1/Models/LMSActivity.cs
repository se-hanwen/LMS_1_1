using System;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LMS_1_1.Models
{
    public class LMSActivity : IProgram
    {
        /*public LMSActivity()
        {
            Id = Guid.NewGuid();
        }
        */

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }

        public Guid ModuleId { get; set; }
        public Module Modules { get; set; }

        public int ActivityTypeId { get; set; }
        public ActivityType ActivityType { get; set; }

    }
}
