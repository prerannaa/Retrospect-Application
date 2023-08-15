using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using retrospectApp.Helper;
using retrospectApp.Model;
using retrospectApp.ViewModel;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Text;
using System.Security.Claims;

namespace retrospectApp.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
  private readonly RetrospectAppDbContext _Context;
  private readonly IConfiguration _configuration;
  public UserController(RetrospectAppDbContext retrospectAppDbContext)
  {
    _Context = retrospectAppDbContext;
  }

  [HttpPost("authenticate")]

  public async Task<IActionResult> Authenticate(UserViewModel loginObj)
  {
    if(loginObj == null) {
      return BadRequest();
    }

    var users = await _Context.Users.FirstOrDefaultAsync(x => x.Username == loginObj.Username);
    if(users == null)
      return NotFound(new { Message = "User Not Found" });

    if (!PasswordHash.VerifyPassword(loginObj.Password, users.Password))
    {
      return BadRequest(new { Message = "Password is incorrect" });
    }

    return Ok(new
      {
        Message = "Login Success!"
      });
  }
  /*
    private string GenerateJSONWebToken(UserViewModel userInfo)
    {
      var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
      var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(_config["Jwt:Issuer"],
        _config["Jwt:Issuer"],
        null,
        expires: DateTime.Now.AddMinutes(120),
        signingCredentials: credentials);

      return new JwtSecurityTokenHandler().WriteToken(token);
    }*/


  [HttpPost("register")]
  public async Task<IActionResult> RegisterUser(User userObj)
  {
    if (userObj == null)
    {
      return BadRequest();

    }
    //Check Email
    if (await CheckEmailExistAsync(userObj.Email))
      return BadRequest(new { Message = "Email Already Exist" });

    //Check Username
    if (await CheckUsernameExistAsync(userObj.Username))
      return BadRequest(new {Message = "Username Already Exist"});

    //Check Password Strength
/*    var pass = CheckPasswordStrength(userObj.Password);*/

    userObj.Password = PasswordHash.HashPassword(userObj.Password);
    /*    userObj.Role = "User";
        userObj.Token = "";*/
    await _Context.Users.AddAsync(userObj);
    await _Context.SaveChangesAsync();
    return Ok(new
    {
      Message = "User Registered!"
    });
  }
  private Task <bool> CheckUsernameExistAsync(string username)
    => _Context.Users.AnyAsync(x => x.Username == username);
  private Task<bool> CheckEmailExistAsync(string email)
  => _Context.Users.AnyAsync(x => x.Email == email);

  private string CreateJwt(User user)
  {
    var jwtTokenHandler = new JwtSecurityTokenHandler();
    var key = Encoding.ASCII.GetBytes("verysceret........");
    var identity = new ClaimsIdentity(new Claim[]
    {
      new Claim(ClaimTypes.Role, user.Role),
      new Claim(ClaimTypes.Name,$"{user.Firstname} {user.Lastname}")
    });
  }

}

