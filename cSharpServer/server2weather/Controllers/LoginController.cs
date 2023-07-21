using Microsoft.AspNetCore.Mvc;
using server2weather.Interfaces;
using server2weather.Models;
using server2weather.Security;

namespace server2weather.Controllers
{
        [Route("[controller]")]
        [ApiController]
        public class LoginController : ControllerBase
        {
            private readonly ITokenGenerator tokenGenerator;
            private readonly IPasswordHasher passwordHasher;
            private readonly IUserDao userDao;

            public LoginController(ITokenGenerator _tokenGenerator, IPasswordHasher _passwordHasher, IUserDao _userDao)
            {
                tokenGenerator = _tokenGenerator;
                passwordHasher = _passwordHasher;
                userDao = _userDao;
            }

        

        [HttpGet]
        public IActionResult TestUser()
        {
            IActionResult result = Unauthorized(new { message = "Get test user failed!" });
            User user = userDao.GetTestUser();

            if(user != null)
            {
                return Ok();
            } else
            {
                return NotFound();
            }
        }

            [HttpPost]
            public IActionResult Authenticate(LoginUser userParam)
            {
                // Default to bad username/password message
                IActionResult result = Unauthorized(new { message = "Username or password is incorrect" });

                // Get the user by username
                User user = userDao.GetUser(userParam.Username);

                // If we found a user and the password hash matches
                if (user != null && passwordHasher.VerifyHashMatch(user.PasswordHash, userParam.Password, user.Salt))
                {
                    // Create an authentication token
                    string token = tokenGenerator.GenerateToken(user.UserId, user.Username, user.Role);

                    // Create a ReturnUser object to return to the client
                    LoginResponse retUser = new LoginResponse() { User = new ReturnUser() { UserId = user.UserId, Username = user.Username, Role = user.Role }, Token = token };

                    // Switch to 200 OK
                    result = Ok(retUser);
                }

                return result;
            }

            [HttpPost("/register")]
            public IActionResult Register(RegisterUser userParam)
            {
                IActionResult result;

                User existingUser = userDao.GetUser(userParam.Username);
                if (existingUser != null)
                {
                    return Conflict(new { message = "Username already taken. Please choose a different username." });
                }

                User user = userDao.AddUser(userParam.Username, userParam.Password, userParam.Role);
                if (user != null)
                {
                    result = Created(user.Username, null); //values aren't read on client
                }
                else
                {
                    result = BadRequest(new { message = "An error occurred and user was not created." });
                }

                return result;
            }
        }
    
}
