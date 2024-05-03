﻿using FinalProject.Data;
using FinalProject.Data.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Security.Claims;
using System.Text.Json;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly ApplicationContext _context;
        private readonly HttpClient _client;
        const string regulation = " WHAT IS THE MAINTENANCE PROVIDER'S OBLIGATION FOR ENSURING THE COMMODITY'S SAFETY? 1 If the consumer cannot safely transport it using usual modes of transportation. 2 If the nearest maintenance center is more than (100) kilometers away from the consumer, the agent must transport it and return it after repair. IS THE CONSUMER ABLE TO OBTAIN / REPLACE (OLD) SPARE PARTS? Chapter Three 20 If the consumer paid for the new part, the old part must be delivered to him or her; however, if it was replaced under warranty and the consumer did not pay for it, he or she may only view the old part. If the part is hazardous to the environment, the maintenance provider must dispose of it safely. WHAT ABOUT THE COMMERCIAL AGENT'S FAILURE TO CORRECT THE REPEATED DEFECT THAT WAS COVERED BY THE WARRANTY? 1 That the flaw prevents the user from benefiting from the commodity's purposes or affects its value or safety of use. 2 If the agent fails to repair a problem of the electrical and electronic product twice, or if the duration takes more than (15) days, not including the period for delivering spare parts. 3 If the agent fails to repair a car defect four times in a row, or if it takes more than (25) days, not considering the time it takes to provide spare parts. If the agent fails to repair a recurring flaw, the consumer has the right to get a new commodity or vehicle of the same category and specifications, or to receive its purchase price, under the following conditions: SHOULD THE PRICES OF MAINTENANCE AND SPARE PARTS BE DETERMINED AND ANNOUNCED? Chapter Three 21 Spare part prices, periodic and non-periodic maintenance costs, and inspection services must all be properly displayed to the consumer. CAN ANOTHER SERVICE PROVIDER OTHER THAN THE AGENT PERFORM MAINTENANCE? The consumer has the option of performing maintenance work at the commercial agent or another center that provides periodic maintenance services, and he or she must keep the maintenance invoices or technical reports, which does not affect the continuation of the warranty if the procedures are carried out in accordance with the producer's recommendations. WHAT ARE THE RULES IN PLACE FOR CENTERS THAT PROVIDE MAINTENANCE SERVICES? It is mandatory for centers that provide periodic maintenance services to follow the manufacturer's regulations and to document the work submitted with an electronic invoice that shows all repairs and the consumer's vehicle data (type, plate number, mileage, chassis number.) The consumer may not be required to pay for maintenance work he or she did not agree to. WHEN IS THE CONSUMER ELIGIBLE TO RECEIVE A REPLACEMENT ELECTRICAL DEVICE OR VEHICLE? WHAT ARE THE MAIN RECOMMENDATIONS OUTLINED IN THE OWNER'S MANUAL THAT NEED TO BE FOLLOWED DURING MAINTENANCE? Chapter Three If the consumer is unable to benefit from the product or vehicle, the authorized agent, when conducting maintenance work, has the option to provide a replacement item of the same category or offer a financial amount equivalent to (1/400) of the purchase value for each day the consumer has been unable to benefit from it. This applies in the following cases: The timing of compensation payment will be determined by the period specified in the agent’s policy for compensation settlements. \"Same category of the vehicle\" refers to a replacement vehicle that serves the same purpose and has the same seating capacity (sedan/pickup/family). 22 1 It is important for the consumer to ensure the completion of scheduled inspections and maintenance tasks as outlined in the owner's manual for each designated periodic maintenance. 2 The consumer should be aware of and adhere to the correct procedures for dealing with warning signals and cautionary signs displayed on the device or vehicle, as specified in the owner's manual. 1 Inability to benefit from the product or vehicle due to a defect covered by the warranty. 2 Delay in providing spare parts beyond the specified deadline, with compensation calculated for each day of delay. 3 Delay in completing maintenance work beyond the specified deadline, with compensation calculated for each day of delay. Examples of spare parts with low demand for vehicles: (Sensors, arms, joints, alternators, compressors, transmissions, coils, fuel pumps, etc.) ARE THERE ANY ADDITIONAL TIMEFRAMES FOR PROVIDING SPARE PARTS? If the spare parts have low demand, the authorized agent must provide them within a maximum period of 14 days from the consumer's request. The authorized agent is required to consistently and promptly supply the requested parts to consumers on an ongoing basis and at reasonable prices. Examples of consumable vehicle parts: WHAT ARE THE OBLIGATIONS OF THE AUTHORIZED AGENT IN PROVIDING SPARE PARTS? Chapter Three 1 If the spare parts are specially manufactured for the consumer (based on the chassis number) or have specific technical specifications, the authorized agent and the consumer can agree upon a reasonable timeframe for providing the spare parts in writing. 2 Examples of spare parts with specific technical specifications: (Airbags, cambers, interior components) 23 1 Brakes and wheel hops 2 Batteries 3 Filters: air conditioning, engine, fuel 4 Plugs/belts CHAPTER 4: ELECTRONICS STORES REQUIREMENTS FOR SELLING IN ELECTRONIC RETAILERS PURCHASING FROM ONLINE RETAILERS PERSONAL CONSUMER DATA SECURITY 24 Chapter Four It can be submitted through a merchant registered in the business register or an electronic sales service practitioner documented in the documentation platforms. The place where the activity is performed must be appropriate to the type and volume of work, and the online store must meet the following requirements: IS IT FEASIBLE TO SELL SERVICES IN ELECTRONIC STORES NOT THE MERCHANT? ARE THERE ANY PREREQUISITES FOR SELLING IN INTERNET STORES? The store includes its name, address, and contact information. The store enters the tax number and, if applicable, its commercial register, as well as a link to document it in one of the official platforms. Clarify the procedures for receiving consumer complaints and responding to them, and allow them to be submitted electronically. 1 3 2 In the store's display platform: 25 1 3 2 When purchasing from online businesses: The consumer must ensure that the product is returnable and that the order may be cancelled, and that the electronic contract cannot be terminated before purchase. The consumer understands that the agreement is concluded electronically between electronic commerce parties, and he or she must ensure that the contract is titled correctly and that the product or service is described in accordance with what was agreed upon. When submitting an electronic invoice, remember to: It must be savable, contain confirmation of the contract's conclusion and date, and the consumer must keep a copy of it. It includes the entire product price, delivery charges, tax, payment and delivery arrangements, and so on. It indicates the product's delivery date and location. 5 4 It includes the warranty information, if any, and after-sales services. It must make certain that the consumer is aware of the store's exchange and return policies. Unless the consumer has agreed to a delivery date with the merchant, the consumer has the right to cancel the order if the store delays delivery or execution for more than (15) days from the date of purchase. If an error happens in displaying the items, services, pricing, or specs, the online business has the right to alter it, and the consumer has the option to continue after the update and complete the order or cancel it and refund what was paid. Chapter Four 26 Chapter Four 27 WHAT ROLE DOES THE ONLINE STORE PLAY IN THE PROTECTION OF THE CONSUMER'S PERSONAL DATA? It must safeguard any statement that could lead to knowledge of or access to the consumer's identity. It must not utilize consumer data for advertising or marketing without first gaining his or her permission. Except for the period required by the nature of the transaction in the selling process and the provision of service, the store has no right to hold consumer data. 1 3 4 2 It is illegal to use a consumer's personal data for inappropriate purposes or to reveal it to a third party without the consumer's permission. In a clear and straightforward manner, the online store must allow the consumer to close his or her account and stop receiving promotional advertisements. 27 CHAPTER 5: HOW TO FILE A COMPLAINT AND SUBMIT A REPORT HOW TO FILE A COMPLAINT SETTLEMENT OF A COMPLAINT SUBMIT A REPORT TO THE MINISTRY OF COMMERCE DEMAND COMPENSATION ADDRESSING A CONSUMER’S REPORT 28 The consumer reports the incident to the Ministry of Commerce via its official channels. WHAT IF THE BUSINESS AGENT DID NOT ADDRESS OR ANSWER THE COMPLAINT? The consumer may first make a complaint with the commercial agent selling the commodity, the provider of maintenance and warranty services, or the online retailer at the consumer complaints unit. It must also describe the steps for submitting it to the consumer and allow him or her to acquire an application number or a reference number for the complaint. WHERE DO I GO IF I HAVE A PROBLEM ABOUT A PRODUCT OR SERVICE? The commercial agent must establish clear protocols for accepting and resolving complaints and must follow them before the consumer and the Ministry of Commerce, provided that they contain the following: WHAT IS THE COMMERCIAL AGENT'S METHOD FOR RESOLVING A CONSUMER COMPLAINT? The agent must explain to the consumer the information required submitting it. The agent must react to the complaint as soon as possible. The consumer must notify its acceptance and treatment, or rejection, in writing and within thirty (30) days of the date of submission, stating the reasons for doing so. 1 2 3 Chapter Five 29 Chapter Five 30 When a customer seeks compensation, whether money or moral, or when he or she disagrees to the compensation or settlement offered to him or her. The application must be filed with the appropriate judicial body, not the Ministry of Commerce. Through one of the following channels: What steps must be taken to report a commercial violation? When reporting, the consumer must include the following information: The Commercial Report App. Dialing the toll-free number 1900. 1 2 Attach a photograph of the infringing product, as well as its purchase invoice, if this was done through Commercial Report App. 1 2 If the purchase is made through a documented or commercially registered online store, the following must be attached: Invoice. Order number, if any . 1 3 2 4 Images and a description of the complaint . E-store link . The data entered by the reporter must match the data entered by the store. WHERE DOES THE CONSUMER GO IF HE OR SHE WISHES TO SEEK FURTHER COMPENSATION OR OBJECT TO THE SETTLEMENT OFFERED BY THE COMMERCIAL AGENT? WHAT METHODS DOES THE MONITORING DEPARTMENT USE TO HANDLE THE REPORT? Examine the report's description and confirm the Ministry's jurisdiction. Contact the consumer to confirm the specifics and legitimacy of the complaint. If required, visiting the business entity or engaging with it to monitor the progress of the report procedures. If the violation is proven, take legal action. If the consumer's right is confirmed, addressing it with the business entity, or advising the consumer to submit the claim to the competent judicial body. Notifying the consumer of the action taken regarding his or her report and closing the complaint. 1 2 4 5 6 3 Chapter Five 31";
        
        public PostsController(ApplicationContext context)
        {
            _context = context;
            _client = new HttpClient();
        }

        [HttpPost("gemini")]
        public async Task<IActionResult> GenerateContent([FromBody] ContentRequest request)
        {
            
            var apiKey = Environment.GetEnvironmentVariable("GEMINI_API_KEY");
            var endpoint = $"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={apiKey}";

            
            var response = await _client.PostAsJsonAsync(endpoint, request);

          
            response.EnsureSuccessStatusCode();

           
            var content = await response.Content.ReadAsStringAsync();
            return Ok(content);
        }



        public class TextPart
        {
            public string Text { get; set; }
        }

        public class ContentPart
        {
            public List<TextPart> Parts { get; set; }
            public ContentPart()
            {
                Parts = new List<TextPart>();
            }
        }

        public class ContentRequest
        {
            public List<ContentPart> Contents { get; set; }
            public ContentRequest()
            {
                Contents = new List<ContentPart>();
            }
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddPost(PostDTO post)
        {
            var authorIdString = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            if (authorIdString == null)
            {
                return Unauthorized("No Author ID found in token.");
            }



            int authorId;
            if (!int.TryParse(authorIdString, out authorId))
            {
                return BadRequest("Invalid Author ID.");
            }


            // Define the API key and endpoint
            var apiKey = Environment.GetEnvironmentVariable("GEMINI_API_KEY");
            var endpoint = $"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={apiKey}";

            ContentRequest contentRequest = new ContentRequest();
            ContentPart contentPart = new ContentPart();
            TextPart textPart = new TextPart { Text = "title: " + post.Title + "description: " + post.Description
                                                    + " these are regulations of the Ministry of commerce, i will give you complaints and i want you to think very carefully"
                                                    + " and tell me if it is a valid complaint or not step by step, and tell me why."
                                                    + " only respond with either \"valid\" or \"invalid\". there are these are the regulations: " + regulation};

            contentPart.Parts.Add(textPart);
            contentRequest.Contents.Add(contentPart);
            var response = await _client.PostAsJsonAsync(endpoint, contentRequest);

            response.EnsureSuccessStatusCode();


            // Parse and return the response body
            var content = await response.Content.ReadAsStringAsync();

            _context.Posts.Add(new Post
            {
                Title = post.Title,
                Description = post.Description,
                DateTime = DateTime.Now,
                AuthorId = authorId,
                Status = "valid"
            });
            await _context.SaveChangesAsync();

            return Ok(JsonSerializer.Serialize(content));
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _context.Posts
                .Include(p => p.Author)
                .Select(p => new ViewPostDTO
                {
                    PostId = p.Id,
                    Title = p.Title,
                    Description = p.Description,
                    AuthorName = p.Author.Username,
                    DateTime = p.DateTime
                })
                .ToListAsync();

            if (posts.Count == 0 || posts == null)
            {
                return NotFound("No posts found.");
            }

            return Ok(posts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPostById(int id)
        {
            var post = await _context.Posts
                .Include(p => p.Author)
                .Where(p => p.Id == id)
                .Select(p => new ViewPostDTO
                {
                    PostId = p.Id,
                    Title = p.Title,
                    Description = p.Description,
                    AuthorName = p.Author.Username,
                    DateTime = p.DateTime,
                    Status = p.Status
                })
                .FirstOrDefaultAsync();

            if (post == null)
            {
                return NotFound($"Post with ID {id} not found.");
            }

            return Ok(post);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound("Post not found.");
            }

            var authorId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            if (post.AuthorId.ToString() != authorId)
            {
                return BadRequest("You are not authorized to delete this post.");
            }

            _context.Posts.Remove(post);
            await _context.SaveChangesAsync();
            return Ok("Post deleted successfully.");
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> EditPost(int id, [FromBody] EditPostDTO editPostDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound("Post not found.");
            }

            var authorId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            if (post.AuthorId.ToString() != authorId)
            {
                return BadRequest("You are not authorized to edit this post.");
            }

            post.Title = editPostDTO.Title;
            post.Description = editPostDTO.Description;
            await _context.SaveChangesAsync();

            return Ok("Post updated successfully.");
        }

        [HttpPost("Apply")]
        [Authorize(Roles = "user")]
        public async Task<ActionResult<UserPost>> ApplyToPost([FromBody] int postId)
        {
            var userId = Int32.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value);
            if (_context.UserPosts.Any(up => up.UserId == userId && up.PostId == postId))
            {
                return BadRequest("You have already applied to this post.");
            }

            var userPost = new UserPost
            {
                UserId = userId,
                PostId = postId,
                ApplicationDate = DateTime.Now,
                Status = "Pending"
            };

            _context.UserPosts.Add(userPost);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpGet("userPosts/{userId}")]
        public async Task<ActionResult<IEnumerable<Post>>> GetUserPosts(int userId)
        {
            var userPosts = await _context.UserPosts
                .Where(up => up.UserId == userId)
                .Include(up => up.Post)
                .Select(up => up.Post)
                .ToListAsync();

            if (userPosts == null || userPosts.Count == 0)
            {
                return NotFound("No posts found for this user.");
            }

            return userPosts;
        }

        [HttpGet("applicants/{postId}")]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetApplicantsByPost(int postId)
        {
            var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            var post = await _context.Posts
                .Include(p => p.UserPosts)
                .ThenInclude(up => up.User)
                .FirstOrDefaultAsync(p => p.Id == postId && p.AuthorId == int.Parse(userId));

            if (post == null)
            {
                return NotFound("No post found or you do not have access to this post.");
            }

            var applicants = post.UserPosts.Select(up => new UserDTO
            {
                UserId = up.UserId,
                UserName = up.User.Username,
                Email = up.User.Email,
                ApplicationDate = up.ApplicationDate
            }).ToList();

            return Ok(applicants);
        }

    }
}