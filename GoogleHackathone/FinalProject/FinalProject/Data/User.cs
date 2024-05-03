using System.ComponentModel.DataAnnotations;
namespace FinalProject.Data;

public class User
{
    [Key]
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; } // In a real application passwords are hashed

    public string Role { get; set; }

    public ICollection<Post> Posts { get; set; }
    public ICollection<UserPost> UserPosts { get; set; }
}