using Microsoft.EntityFrameworkCore;
using retrospectApp.Model;

namespace retrospectApp
{
  public class RetrospectAppDbContext : DbContext
  {
    public RetrospectAppDbContext(DbContextOptions<RetrospectAppDbContext> options) : base(options)
    {
    }
    public DbSet<RetrosppectEntrys> RetrospectEntries { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<LoginUser> LoginUsers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>().ToTable("users");
      modelBuilder.Entity<RetrosppectEntrys>().ToTable("retrospectentries");
    }

  }
 }
