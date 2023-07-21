namespace server2weather.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Salt { get; set; }
        public string Role { get; set; }
    }


        public class ReturnUser
        {
            public int UserId { get; set; }
            public string Username { get; set; }
            public string Role { get; set; }
        }

       
        public class LoginResponse
        {
            public ReturnUser User { get; set; }
            public string Token { get; set; }
        }

        public class LoginUser
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }

        public class RegisterUser
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public string ConfirmPassword { get; set; }
            public string Role { get; set; }
        }
    
}
