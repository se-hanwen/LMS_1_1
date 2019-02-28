using LMS_1_1.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace LMS_1_1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<ApplicationDbContext>();
                context.Database.Migrate();

                var config = host.Services.GetRequiredService<IConfiguration>();

                // dotnet user-secrets set  "GYM:AdminPW" "FooBar77!"
                /*  {
  "Teachers": [
    {
      "UserName": "Penny@lysator.liu.se",
      "PassWord": "LmS2019Penny#"
    }
  ],
  "Students": [
    {
      "UserName": "elev@lexicon.se",
      "PassWord": "Qwe12rTy#"
    }
  ]
                 * 
                 * 
                 */
                var Teachers = new UserData[]
                {
                    new UserData{ UserName = config["Teachers:0:UserName"],
                    PassWord = config["Teachers:0:PassWord"] }
                };
                var Students = new UserData[]
                {
                   new UserData{ UserName = config["Students:0:UserName"],
                    PassWord = config["Students:0:PassWord"] }
                };



                try
                {
                    SeedData.Initialize(services, Teachers, Students).Wait();
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex.Message, "An error occurred seeding the DB.");
                }
            }



            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }



}
