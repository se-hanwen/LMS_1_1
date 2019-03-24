using Microsoft.EntityFrameworkCore.Migrations;

namespace LMS_1_1.Migrations
{
    public partial class ehhh : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "DocumentTypes",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Course" });

            migrationBuilder.InsertData(
                table: "DocumentTypes",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Activity" });

            migrationBuilder.InsertData(
                table: "DocumentTypes",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Module" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DocumentTypes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "DocumentTypes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "DocumentTypes",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
