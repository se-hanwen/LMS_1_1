using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class TokenUser
    {
        public int Id { get; set; }

        public string Token { get; set; }

        public string LMSUserId { get; set; }

        public LMSUser LMSUser { get; set; }
    }
}
