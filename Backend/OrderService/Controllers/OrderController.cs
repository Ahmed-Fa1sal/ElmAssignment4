using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderService.Data;
using OrderService.DTOs;
using OrderService.Models;
using AutoMapper; 

namespace OrderService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdersController : ControllerBase
{
    private readonly OrderDbContext _context;
    private readonly IMapper _mapper;

    public OrdersController(OrderDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // GET: api/orders
    [HttpGet]
    public async Task<ActionResult<IEnumerable<OrderDto>>> GetOrders()
    {
        var orders = await _context.Orders.Include(o => o.Items).ToListAsync();
        return Ok(_mapper.Map<List<OrderDto>>(orders));
    }

    // GET: api/orders/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<OrderDto>> GetOrder(int id)
    {
        var order = await _context.Orders.Include(o => o.Items).FirstOrDefaultAsync(o => o.Id == id);
        if (order == null)
            return NotFound();

        return Ok(_mapper.Map<OrderDto>(order));
    }

    // POST: api/orders
    [HttpPost]
    public async Task<ActionResult<OrderDto>> CreateOrder([FromBody] CreateOrderDto dto)
    {
        var order = _mapper.Map<Order>(dto);
        order.OrderDate = DateTime.UtcNow;
        order.TotalPrice = dto.Items.Sum(item => item.Price * item.Quantity);

        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        return Ok(_mapper.Map<OrderDto>(order));
    }

    // PUT: api/orders/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateOrder(int id, [FromBody] UpdateOrderDto dto)
    {
        var order = await _context.Orders.Include(o => o.Items).FirstOrDefaultAsync(o => o.Id == id);
        if (order == null)
            return NotFound();

        _mapper.Map(dto, order); // Update entity with DTO values
        order.TotalPrice = dto.Items.Sum(item => item.Price * item.Quantity);

        _context.Orders.Update(order);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/orders/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteOrder(int id)
    {
        var order = await _context.Orders.FindAsync(id);
        if (order == null)
            return NotFound();

        _context.Orders.Remove(order);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
