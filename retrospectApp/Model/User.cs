using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace retrospectApp.Model
{
  public class User
  {
    [Key]
    public int Id { get; set; }
    public string Role { get; set; }
    public string Token { get; set; }
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public string Email { get; set; }
    [Required]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
  }
}
