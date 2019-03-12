﻿using LMS_1_1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.ViewModels
{
    public class CourseAllViewModel
    {

        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public string Description { get; set; }
        public string courseImgPath { get; set; }
        public ICollection<ModelAllViewModel> Modules { get; set; }

    }

    public class ModelAllViewModel
    {

        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public string Name2 { get; set; }
        public string isExpanded { get; set; }
        public ICollection<ActivityAllViewModel> Activities { get; set; }
    }


    public class ActivityAllViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public ActivityType ActivityType { get; set; }

    }


   
}

