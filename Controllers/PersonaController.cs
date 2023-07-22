using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticaFinalMiguelAngelRamirezLira.Data;
using PracticaFinalMiguelAngelRamirezLira.Models;

namespace PracticaFinalMiguelAngelRamirezLira.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly PersonaContext _context;

        public PersonaController(PersonaContext context)
        {
            _context = context;
        }

        // GET: api/Persona
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PersonaItem>>> GetPersonaItem()
        {
          if (_context.PersonaItem == null)
          {
              return NotFound();
          }
            return await _context.PersonaItem.ToListAsync();
        }

        // GET: api/Persona/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonaItem>> GetPersonaItem(int id)
        {
          if (_context.PersonaItem == null)
          {
              return NotFound();
          }
            var personaItem = await _context.PersonaItem.FindAsync(id);

            if (personaItem == null)
            {
                return NotFound();
            }

            return personaItem;
        }

        // PUT: api/Persona/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonaItem(int id, PersonaItem personaItem)
        {
            if (id != personaItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(personaItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonaItemExists(id))
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

        // POST: api/Persona
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PersonaItem>> PostPersonaItem(PersonaItem personaItem)
        {
          if (_context.PersonaItem == null)
          {
              return Problem("Entity set 'PersonaContext.PersonaItem'  is null.");
          }
            _context.PersonaItem.Add(personaItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonaItem", new { id = personaItem.Id }, personaItem);
        }

        // DELETE: api/Persona/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonaItem(int id)
        {
            if (_context.PersonaItem == null)
            {
                return NotFound();
            }
            var personaItem = await _context.PersonaItem.FindAsync(id);
            if (personaItem == null)
            {
                return NotFound();
            }

            _context.PersonaItem.Remove(personaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonaItemExists(int id)
        {
            return (_context.PersonaItem?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
