using Microsoft.EntityFrameworkCore.Migrations;

namespace LMS_1_1.Data.Migrations
{
    public partial class changecourseuser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseUsers_AspNetUsers_LMSUserId",
                table: "CourseUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CourseUsers",
                table: "CourseUsers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "CourseUsers");

            migrationBuilder.AlterColumn<string>(
                name: "LMSUserId",
                table: "CourseUsers",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CourseUsers",
                table: "CourseUsers",
                columns: new[] { "CourseId", "LMSUserId" });

            migrationBuilder.AddForeignKey(
                name: "FK_CourseUsers_AspNetUsers_LMSUserId",
                table: "CourseUsers",
                column: "LMSUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CourseUsers_AspNetUsers_LMSUserId",
                table: "CourseUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CourseUsers",
                table: "CourseUsers");

            migrationBuilder.AlterColumn<string>(
                name: "LMSUserId",
                table: "CourseUsers",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "CourseUsers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CourseUsers",
                table: "CourseUsers",
                columns: new[] { "CourseId", "UserId" });

            migrationBuilder.AddForeignKey(
                name: "FK_CourseUsers_AspNetUsers_LMSUserId",
                table: "CourseUsers",
                column: "LMSUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
