using ChangeMyLights.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ChangeMyLights.Models;

namespace ChangeMyLights.Services
{
    public class LightPresetService
    {
        public static string getPreset()
        {
            using (LedDatabaseContext context = new LedDatabaseContext())
            {
                var preset = context.LightPresets.FromSqlRaw("Select Id, Rgb, colorName from LightPreset").ToList();
                return preset;
            }
            

        }
        

    }
}
