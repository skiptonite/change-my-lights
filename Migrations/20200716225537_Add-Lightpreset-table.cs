using Microsoft.EntityFrameworkCore.Migrations;

namespace ChangeMyLights.Migrations
{
    public partial class AddLightpresettable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leds");

            migrationBuilder.CreateTable(
                name: "LightPresets",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rgb = table.Column<string>(type: "VARCHAR(9)", nullable: false),
                    colorName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LightPresets", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LightPresets");

            migrationBuilder.CreateTable(
                name: "Leds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rgb = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    colorName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leds", x => x.Id);
                });
        }
    }
}
