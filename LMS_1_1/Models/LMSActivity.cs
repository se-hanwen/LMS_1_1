using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

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

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime StartDate { get; set; }
        [Required]

        public DateTime EndDate { get; set; }
        [Required]
        public string Description { get; set; }

        [Required]
        public Guid ModuleId { get; set; }
        public Module Modules { get; set; }
        [Required]
        public int ActivityTypeId { get; set; }
        public ActivityType ActivityType { get; set; }

    }
}
