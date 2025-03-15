namespace OrderService.Models;

public class OrderItem
{
    public int Id { get; set; } // Primary Key
    public int OrderId { get; set; } // Foreign Key (references Order)
    public int ProductId { get; set; } // References Product Microservice
    public int Quantity { get; set; }
    public decimal Price { get; set; }

    // Navigation Property
    public Order? Order { get; set; }
}
