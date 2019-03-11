
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace LMS_1_1.Utility
{
    public static class Upload
    {
       
        

        public static void UploadFile (IFormFile file)
        {
            try
            {
                //var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    //return Ok(new { dbPath });
                   
                }
                else
                {
                    //return BadRequest();
                }
              
            }
            catch (Exception ex)
            {
                // return StatusCode(500, "Internal server error");
            }
        }
    }
}
