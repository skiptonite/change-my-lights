using ChangeMyLights.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChangeMyLights.Data
{
    public class LedDatabaseContext : DbContext
    {
        public DbSet<LightPreset> LightPresets { get; set; }

        public LedDatabaseContext(DbContextOptions<LedDatabaseContext> options) : base(options) { }

        public LedDatabaseContext()
        {
        }
    }
}
