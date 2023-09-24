using ASP_API.Data;
using ASP_API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        private readonly EmployeeDbContext _db;

        public EmployeeController(EmployeeDbContext db)
        {
            _db = db;
        }


        [HttpGet]
        public async Task<IActionResult> GEtAllEmployee()
        {
            var employeeList = await _db.Employees.ToListAsync();
            return Ok(employeeList);
        }


        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> AddEmployee([FromBody] Employee obj)
        {
            await _db.Employees.AddAsync(obj);
            _db.SaveChanges();
            return Ok();
        }


        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee == null)
                return NotFound();

            return Ok(employee);
        }


        [HttpPut]
        public IActionResult UpdateEmployee(Employee UpdateEmployee)
        {
            _db.Employees.Update(UpdateEmployee); // does't have updateAsync
            _db.SaveChanges();
            return Ok(UpdateEmployee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _db.Employees.FindAsync(id);
            if (employee == null)
                return NotFound();

            _db.Employees.Remove(employee); // does't have removeAsyc
            _db.SaveChanges();
            return Ok(employee);
        }
    }

}
