﻿using System;

namespace LMS_1_1.Models
{
    interface IProgram
    {

        Guid Id { get; set; }
        string Name { get; set; }
        DateTime StartDate { get; set; }

        string Description { get; set; }

    }
}
