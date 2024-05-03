using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinalProject.Data
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string? Status { get; set; }

        public DateTime DateTime { get; set; }

        // Foreign key
        [ForeignKey("Author")]
        public int AuthorId { get; set; }

        // Navigation property
        public User Author { get; set; }
        public ICollection<UserPost> UserPosts { get; set; }
    }
}
