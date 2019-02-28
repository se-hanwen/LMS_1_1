using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace LMS_1_1.Data.Migrations
{
    public partial class betterKeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LMSActivity_Modules_ModuleId",
                table: "LMSActivity");

            migrationBuilder.DropForeignKey(
                name: "FK_Modules_Courses_CourseId",
                table: "Modules");

            migrationBuilder.DropForeignKey(
                   name: "FK_CourseUsers_Courses_CourseId",
                    table: "CourseUsers");



            migrationBuilder.AlterColumn<Guid>(
    name: "ModuleId",
    table: "LMSActivity",
    nullable: false,
    oldClrType: typeof(string),
    oldNullable: true);

            migrationBuilder.DropPrimaryKey(name: "PK_LMSActivity", table: "LMSActivity");

            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "LMSActivity",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
      name: "PK_LMSActivity",
      table: "LMSActivity",
      column: "Id");


            migrationBuilder.AlterColumn<Guid>(
                name: "CourseId",
                table: "Modules",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);


            migrationBuilder.DropPrimaryKey(name: "PK_Modules", table: "Modules");

            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "Modules",
                nullable: false,
                oldClrType: typeof(string));


            migrationBuilder.AddPrimaryKey(
          name: "PK_Modules",
          table: "Modules",
          column: "Id");


            migrationBuilder.DropPrimaryKey(name: "PK_Courses", table: "Courses");

            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "Courses",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
          name: "PK_Courses",
          table: "Courses",
          column: "Id");


            migrationBuilder.DropPrimaryKey(name: "PK_CourseUsers", table: "CourseUsers");


            migrationBuilder.AlterColumn<Guid>(
     name: "CourseId",
     table: "CourseUsers",
     nullable: false,
     oldClrType: typeof(string));


            migrationBuilder.AddPrimaryKey(
      name: "PK_CourseUsers",
      table: "CourseUsers",
      columns: new[] { "CourseId", "UserId" }
      );

            migrationBuilder.InsertData(
                table: "ActivityTypes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "E-Learningpass" },
                    { 2, "Föreläsning" },
                    { 3, "Övningstillfälle" },
                    { 4, "Inlämingsuppgift" },
                    { 5, "Annat" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_LMSActivity_Modules_ModuleId",
                table: "LMSActivity",
                column: "ModuleId",
                principalTable: "Modules",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Modules_Courses_CourseId",
                table: "Modules",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
            name: "FK_CourseUsers_Courses_CourseId",
            table: "CourseUsers",
            column: "CourseId",
            principalTable: "Courses",
            principalColumn: "Id",
            onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LMSActivity_Modules_ModuleId",
                table: "LMSActivity");

            migrationBuilder.DropForeignKey(
                name: "FK_Modules_Courses_CourseId",
                table: "Modules");

            migrationBuilder.DeleteData(
                table: "ActivityTypes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ActivityTypes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ActivityTypes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ActivityTypes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "ActivityTypes",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.AlterColumn<string>(
                name: "CourseId",
                table: "Modules",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Modules",
                nullable: false,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<string>(
                name: "ModuleId",
                table: "LMSActivity",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "LMSActivity",
                nullable: false,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<string>(
                name: "CourseId",
                table: "CourseUsers",
                nullable: false,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Courses",
                nullable: false,
                oldClrType: typeof(Guid));

            migrationBuilder.AddForeignKey(
                name: "FK_LMSActivity_Modules_ModuleId",
                table: "LMSActivity",
                column: "ModuleId",
                principalTable: "Modules",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Modules_Courses_CourseId",
                table: "Modules",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
