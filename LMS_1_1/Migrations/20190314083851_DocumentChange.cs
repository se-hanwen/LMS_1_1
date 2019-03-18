using Microsoft.EntityFrameworkCore.Migrations;

namespace LMS_1_1.Migrations
{
    public partial class DocumentChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documents_LMSActivity_ActivityId",
                table: "Documents");

            migrationBuilder.RenameColumn(
                name: "ActivityId",
                table: "Documents",
                newName: "LMSActivityId");

            migrationBuilder.RenameIndex(
                name: "IX_Documents_ActivityId",
                table: "Documents",
                newName: "IX_Documents_LMSActivityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_LMSActivity_LMSActivityId",
                table: "Documents",
                column: "LMSActivityId",
                principalTable: "LMSActivity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documents_LMSActivity_LMSActivityId",
                table: "Documents");

            migrationBuilder.RenameColumn(
                name: "LMSActivityId",
                table: "Documents",
                newName: "ActivityId");

            migrationBuilder.RenameIndex(
                name: "IX_Documents_LMSActivityId",
                table: "Documents",
                newName: "IX_Documents_ActivityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_LMSActivity_ActivityId",
                table: "Documents",
                column: "ActivityId",
                principalTable: "LMSActivity",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
