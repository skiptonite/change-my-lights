using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChangeMyLights.Data;
using ChangeMyLights.Models;

namespace ChangeMyLights.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LightPresetController : ControllerBase
    {
        private readonly LedDatabaseContext _context;

        public LightPresetController(LedDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LightPreset
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LightPreset>>> GetLightPresets()
        {
            return await _context.LightPresets.ToListAsync();
        }

        // GET: api/LightPreset/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LightPreset>> GetLightPreset(int id)
        {
            var lightPreset = await _context.LightPresets.FindAsync(id);

            if (lightPreset == null)
            {
                return NotFound();
            }

            return lightPreset;
        }

        // PUT: api/LightPreset/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLightPreset(int id, LightPreset lightPreset)
        {
            if (id != lightPreset.Id)
            {
                return BadRequest();
            }

            _context.Entry(lightPreset).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LightPresetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LightPreset
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LightPreset>> PostLightPreset(LightPreset lightPreset)
        {
            _context.LightPresets.Add(lightPreset);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLightPreset", new { id = lightPreset.Id }, lightPreset);
        }

        // DELETE: api/LightPreset/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LightPreset>> DeleteLightPreset(int id)
        {
            var lightPreset = await _context.LightPresets.FindAsync(id);
            if (lightPreset == null)
            {
                return NotFound();
            }

            _context.LightPresets.Remove(lightPreset);
            await _context.SaveChangesAsync();

            return lightPreset;
        }

        private bool LightPresetExists(int id)
        {
            return _context.LightPresets.Any(e => e.Id == id);
        }
    }
}
