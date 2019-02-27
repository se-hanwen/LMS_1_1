using LMS_1_1.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LMS_1_1.Data
{
    public class ApplicationDbContext : IdentityDbContext<LMSUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<CourseUser>()
                .HasKey(cu => new { cu.CourseId, cu.UserId });


        }


        public DbSet<Course> Courses { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<LMSActivity> LMSActivity { get; set; }

        public DbSet<ActivityType> ActivityTypes { get; set; }
        public DbSet<LMSUser> LMSUsers { get; set; }

        public DbSet<CourseUser> CourseUsers { get; set; }

    }
}
