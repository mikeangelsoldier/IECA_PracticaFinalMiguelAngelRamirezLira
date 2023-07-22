using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace PracticaFinalMiguelAngelRamirezLira.Models
{
    public class PersonaItem
    {
        
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public bool? IsCompleted { get; set; }
    }
}