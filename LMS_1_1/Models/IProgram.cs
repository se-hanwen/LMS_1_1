using System;

namespace LMS_1_1.Models
{
    interface IProgram
    {

        string Id { get; set; }
        string Name { get; set; }
        DateTime StartDate { get; set; }

        string Description { get; set; }

    }
}
