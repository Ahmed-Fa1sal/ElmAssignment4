namespace OrderService.DTOs;

public class UpdateOrderDto {
    public required string CustomerName { get; set; }
    public required List<OrderItemDto> Items { get; set; }
}
