// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



function SaveStudent(val)
{

   let xmlhttp = new XMLHttpRequest()
    xmlhttp.open("POST", "/CourseUsers/ToggleCourseUser", true);
    let CourseID = document.querySelector("#CourseIdStudent").value;

    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var post = "CourseID=" + CourseID + "&UserId=" + val.id ;
    xmlhttp.send(post);
}