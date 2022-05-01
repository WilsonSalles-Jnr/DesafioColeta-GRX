using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DesafioColeta_GRX.Models
{
    public class Conexao : DbContext
    {
        public Conexao() : base("ColetaDB")
        {

        }
        public DbSet<Coleta> Coleta { get; set; }
    }
}