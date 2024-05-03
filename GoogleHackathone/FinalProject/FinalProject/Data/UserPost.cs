namespace FinalProject.Data
{
    public class UserPost
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int PostId { get; set; }
        public Post Post { get; set; }

        public DateTime ApplicationDate { get; set; }
        public string Status { get; set; }

    }
}
