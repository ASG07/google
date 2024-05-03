using Microsoft.EntityFrameworkCore;

namespace FinalProject.Data
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<UserPost> UserPosts { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPost>()
            .HasKey(sc => new { sc.UserId, sc.PostId });

            modelBuilder.Entity<UserPost>()
                .HasOne(sc => sc.User)
                .WithMany(s => s.UserPosts)
                .HasForeignKey(sc => sc.UserId);

            modelBuilder.Entity<UserPost>()
                .HasOne(sc => sc.Post)
                .WithMany(c => c.UserPosts)
                .HasForeignKey(sc => sc.PostId);

        }
    }
}
