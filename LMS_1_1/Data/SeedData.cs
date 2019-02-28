using LMS_1_1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_1_1.Data
{
    public class UserData
    {
        public string UserName { get; set; }
        public string PassWord { get; set; }
    }

    public static class SeedData
    {

        public static async Task Initialize(IServiceProvider serviceProvider, UserData[] admins, UserData[] users)
        {

            using (var context = new ApplicationDbContext(
             serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            { // init testusers
                var userManager = serviceProvider.GetService<UserManager<LMSUser>>();
                var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

                if (roleManager == null || userManager == null)
                {
                    throw new Exception("roleManager or userManager is null");
                }

                var roleNames = new[] { "Teacher", "Student" };
                foreach (var name in roleNames)
                { // init roles
                    if (await roleManager.RoleExistsAsync(name)) continue;
                    var role = new IdentityRole { Name = name };
                    var result = await roleManager.CreateAsync(role);
                    if (!result.Succeeded)
                    {
                        throw new Exception(string.Join("\n", result.Errors));
                    }
                }
                // teachers
                var Temails = admins.Select(u => u.UserName);
                foreach (var email in Temails)
                {
                    if ((await userManager.FindByEmailAsync(email)) != null) continue;
                    var user = new LMSUser { UserName = email, Email = email };
                    var result = await userManager.CreateAsync(user, admins.Where(u => u.UserName == email).Select(u => u.PassWord).FirstOrDefault());
                    if (!result.Succeeded)
                    {
                        throw new Exception(string.Join("\n", result.Errors));
                    }
                    var adminUser = await userManager.FindByNameAsync(email);
                    if ((await userManager.GetRolesAsync(adminUser)).Count() == 0)
                    {
                        var ok = await userManager.AddToRoleAsync(adminUser, "Teacher");
                        if (!ok.Succeeded)
                        {
                            throw new Exception(string.Join("\n", ok.Errors));
                        }
                    }

                }

                var Semails = users.Select(u => u.UserName);
                foreach (var email in Semails)
                {
                    if ((await userManager.FindByEmailAsync(email)) != null) continue;
                    var user = new LMSUser { UserName = email, Email = email };
                    var result = await userManager.CreateAsync(user, users.Where(u => u.UserName == email).Select(u => u.PassWord).FirstOrDefault());
                    if (!result.Succeeded)
                    {
                        throw new Exception(string.Join("\n", result.Errors));
                    }
                    var adminUser = await userManager.FindByNameAsync(email);
                    if ((await userManager.GetRolesAsync(adminUser)).Count() == 0)
                    {
                        var ok = await userManager.AddToRoleAsync(adminUser, "Student");
                        if (!ok.Succeeded)
                        {
                            throw new Exception(string.Join("\n", ok.Errors));
                        }
                    }

                }

                if (context.Courses.FirstOrDefault(c => c.Name == "NA18") == null)
                {
                    // add a course
                    await context.Courses.AddAsync(new Course { Name = "NA18", Description = "Kurs i .net core och C#", StartDate = DateTime.Parse("2018-11-26 09:00:00") });
                    await context.SaveChangesAsync();
                }
                var courseid = context.Courses.FirstOrDefault(c => c.Name == "NA18")?.Id;

                if (context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "Programmering i C#") == null)
                {
                    await context.Modules.AddAsync(new Module { Name = "C#", Description = "Programmering i C#", StartDate = DateTime.Parse("2018-11-26 09:00:00"), EndDate = DateTime.Parse("2018-12-07 17:00:00"), CourseId = courseid.Value });

                    await context.SaveChangesAsync();
                }
                var moduleid = context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "Programmering i C#")?.Id;


                if (context.LMSActivity.FirstOrDefault(a => a.ModuleId == moduleid) == null)
                {

                    await context.LMSActivity.AddRangeAsync(new List<LMSActivity>
                    {
                        new LMSActivity{Name="", Description="Intro + E-L 1.1, 1.2", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-11-26 09:00:00"),EndDate=DateTime.Parse("2018-11-26 17:00:00") },
                        new LMSActivity{Name="", Description="E-L 1.3", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-11-27 09:00:00"),EndDate=DateTime.Parse("2018-11-27 12:00:00") },
                        new LMSActivity{Name="", Description="E-L 1.4 + 1.5", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-11-27 13:00:00"),EndDate=DateTime.Parse("2018-11-27 17:00:00") },
                        new LMSActivity{Name="", Description="Frl C# Intro", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-11-28 09:00:00"),EndDate=DateTime.Parse("2018-11-28 17:00:00") },
                        new LMSActivity{Name="", Description="Övning 2", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-11-29 09:00:00"),EndDate=DateTime.Parse("2018-11-29 17:00:00") },
                        new LMSActivity{Name="", Description="Frl C# Grund", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-11-30 09:00:00"),EndDate=DateTime.Parse("2018-11-30 17:00:00") },

                        new LMSActivity{Name="", Description="E-L 1.6 + 1.7", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-03 09:00:00"),EndDate=DateTime.Parse("2018-12-03 12:00:00") },
                        new LMSActivity{Name="", Description="E-L 1.8", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-03 13:00:00"),EndDate=DateTime.Parse("2018-12-03 17:00:00") },
                        new LMSActivity{Name="", Description="FRL OOP", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-04 09:00:00"),EndDate=DateTime.Parse("2018-12-04 17:00:00") },
                        new LMSActivity{Name="", Description="Övning 3", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-05 09:00:00"),EndDate=DateTime.Parse("2018-12-05 17:00:00") },
                        new LMSActivity{Name="", Description="FRL OOP 2", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-06 09:00:00"),EndDate=DateTime.Parse("2018-12-06 17:00:00") },
                        new LMSActivity{Name="", Description="Övning 3", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-07 09:00:00"),EndDate=DateTime.Parse("2018-12-07 17:00:00") },
                    });
                }

                if (context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "C#") == null)
                {
                    await context.Modules.AddAsync(new Module { Name = "C#", Description = "C#", StartDate = DateTime.Parse("2018-12-10 09:00:00"), EndDate = DateTime.Parse("2018-12-14 17:00:00"), CourseId = courseid.Value });

                    await context.SaveChangesAsync();
                }

                moduleid = context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "C#")?.Id;

                if (context.LMSActivity.FirstOrDefault(a => a.ModuleId == moduleid) == null)
                {
                    await context.LMSActivity.AddRangeAsync(new List<LMSActivity>
                    {
                        new LMSActivity{Name="", Description="E-L 2.1 - 2.4", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-10 09:00:00"),EndDate=DateTime.Parse("2018-12-10 12:00:00") },
                        new LMSActivity{Name="", Description="Övning 4", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-10 13:00:00"),EndDate=DateTime.Parse("2018-12-10 17:00:00") },
                        new LMSActivity{Name="", Description="FRl Generics", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-11 09:00:00"),EndDate=DateTime.Parse("2018-12-11 17:00:00") },
                        new LMSActivity{Name="", Description="E-L 2.5 – 2.6 ", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-12 09:00:00"),EndDate=DateTime.Parse("2018-12-12 12:00:00") },
                        new LMSActivity{Name="", Description="Övning 4", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-12 13:00:00"),EndDate=DateTime.Parse("2018-12-12 17:00:00") },
                        new LMSActivity{Name="", Description="FRL Generics", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-13 09:00:00"),EndDate=DateTime.Parse("2018-12-13 12:00:00") },
                        new LMSActivity{Name="", Description="FRL LINQ", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-13 13:00:00"),EndDate=DateTime.Parse("2018-12-13 17:00:00") },
                        new LMSActivity{Name="", Description="E-L 2.7 – 2.9", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-14 09:00:00"),EndDate=DateTime.Parse("2018-12-14 12:00:00") },
                        new LMSActivity{Name="", Description="Övning 4", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-14 13:00:00"),EndDate=DateTime.Parse("2018-12-14 17:00:00") },

                    });
                }

                if (context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "Testning") == null)
                {
                    await context.Modules.AddAsync(new Module { Name = "C#", Description = "Testning", StartDate = DateTime.Parse("2018-12-17 09:00:00"), EndDate = DateTime.Parse("2018-12-18 17:00:00"), CourseId = courseid.Value });
                    await context.SaveChangesAsync();
                }

                moduleid = context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "Testning")?.Id;

                if (context.LMSActivity.FirstOrDefault(a => a.ModuleId == moduleid) == null)
                {
                    await context.LMSActivity.AddRangeAsync(new List<LMSActivity>
                    {
                        new LMSActivity{Name="", Description="Unit Test E-L Test ", ActivityTypeId=1, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-17 09:00:00"),EndDate=DateTime.Parse("2018-12-17 17:00:00") },
                        new LMSActivity{Name="", Description="FRL/Ariktektur", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-18 09:00:00"),EndDate=DateTime.Parse("2018-12-18 12:00:00") },
                        new LMSActivity{Name="", Description="FRL/Test", ActivityTypeId=2, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-18 13:00:00"),EndDate=DateTime.Parse("2018-12-18 17:00:00") },

                    });
                }

                if (context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "Garage 1.0") == null)
                {
                    await context.Modules.AddAsync(new Module { Name = "C#", Description = "Garage 1.0", StartDate = DateTime.Parse("2018-12-19 09:00:00"), EndDate = DateTime.Parse("2019-01-02 17:00:00"), CourseId = courseid.Value });
                    await context.SaveChangesAsync();
                }
                moduleid = context.Modules.FirstOrDefault(u => u.CourseId == courseid && u.Name == "C#" && u.Description == "Garage 1.0")?.Id;

                if (context.LMSActivity.FirstOrDefault(a => a.ModuleId == moduleid) == null)
                {
                    await context.LMSActivity.AddRangeAsync(new List<LMSActivity>
                    {
                        new LMSActivity{Name="", Description="Övning Garage 1.0", ActivityTypeId=3, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-19 09:00:00"),EndDate=DateTime.Parse("2018-12-28 12:00:00") },
                        new LMSActivity{Name="", Description="Redovisning", ActivityTypeId=5, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2018-12-28 13:00:00"),EndDate=DateTime.Parse("2018-12-28 17:00:00") },
                        new LMSActivity{Name="", Description="Redovisning", ActivityTypeId=5, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2019-01-02 09:00:00"),EndDate=DateTime.Parse("2019-01-02 12:00:00") },
                        new LMSActivity{Name="", Description="Kodgenomgång", ActivityTypeId=5, ModuleId=moduleid.Value,StartDate = DateTime.Parse("2019-01-02 13:00:00"),EndDate=DateTime.Parse("2019-01-02 17:00:00") },

                    });
                }



                // Add student to course
                var students = await userManager.GetUsersInRoleAsync("Student");

                foreach (var student in students)
                {
                    if (context.CourseUsers.FirstOrDefault(cu => cu.UserId == student.Id) == null)
                    {
                        await context.CourseUsers.AddAsync(
                            new CourseUser { CourseId = courseid.Value, UserId = student.Id });
                    }

                }



                await context.SaveChangesAsync();
            }
        }
    }

}
