using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PracticaFinalMiguelAngelRamirezLira.Models;

namespace PracticaFinalMiguelAngelRamirezLira.Data
{
    public class PersonaContext : DbContext
    {
        public PersonaContext (DbContextOptions<PersonaContext> options)
            : base(options)
        {
        }

        public DbSet<PracticaFinalMiguelAngelRamirezLira.Models.PersonaItem> PersonaItem { get; set; } = default!;
    }
}
