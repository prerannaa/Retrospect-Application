using System.ComponentModel.DataAnnotations;

namespace retrospectApp.Model
{
  public class RetrosppectEntrys
  {
    [Key]
    public int Id { get; set; }
    public DateTime DateCreated { get; set; }
    public string WhatWentWell { get; set; }
    public string WhatDidntGoWell { get; set; }
    public string ActionItems { get; set; }
    public string CreatedBy { get; set; }
  }
}
