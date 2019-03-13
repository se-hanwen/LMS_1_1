using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Models
{
    public class DocumentType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        ICollection<Document> Documents { get; set; }
    }
}
