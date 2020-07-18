using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChangeMyLights.Models
{
    public class LightPreset
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "VARCHAR(9)")]
        public string Rgb { get; set; }
        public string colorName { get; set; }


    }
}
