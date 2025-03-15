namespace OrderService.DTOs;

public class OrderDto {
  public int Id { get; set; }
  public DateTime OrderDate { get; set; }
  public required string CustomerName { get; set; }
  public required List<OrderItemDto> Items { get; set; }
  public decimal TotalPrice { get; set; }
}