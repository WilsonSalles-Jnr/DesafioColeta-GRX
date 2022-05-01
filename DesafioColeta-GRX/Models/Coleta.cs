using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace DesafioColeta_GRX.Models
{
    public class Coleta
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public bool Pergunta1 { get; set; }
        [Required]
        public bool Pergunta2 { get; set; }
        [StringLength(10)]
        [Required]
        public string Pergunta3 { get; set; }
        [StringLength(200)]
        [Required]
        public string Pergunta4 { get; set; }
        [Required]
        public int QuantidadePositiva { get; set; }
        [Required]
        public int QuantidadeNegativa { get; set; }
        [Required]
        public int QuantidadeNaoAvaliada { get; set; }

    }
}