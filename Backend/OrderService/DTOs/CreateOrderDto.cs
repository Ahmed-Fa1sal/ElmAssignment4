namespace OrderService.DTOs;
public class CreateOrderDto {
  public required string CustomerName { get; set; }
  public required List<OrderItemDto> Items { get; set; }
}

public class OrderItemDto {
  public int ProductId { get; set; }
  public int Quantity { get; set; }
  public decimal Price { get; set; }
}