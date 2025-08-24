using Microsoft.AspNetCore.Mvc;

namespace elective_2_gradesheet.Controllers
{
    // This controller is for the developer's reflection page.
    public class DevController : Controller
    {
        // Returns the Index view which contains the blog/reflection.
        public IActionResult Index()
        {
            return View();
        }
    }
}
