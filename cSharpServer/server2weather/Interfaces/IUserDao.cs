using server2weather.Models;

namespace server2weather.Interfaces
{
    public interface IUserDao
    {
        User GetUser(string username);
        User AddUser(string username, string password, string role);
        User GetUserByID(int userID);
        User GetTestUser();
    }
}
