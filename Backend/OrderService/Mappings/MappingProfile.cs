using OrderService.DTOs;
using OrderService.Models;
using AutoMapper;

public class MappingProfile : Profile {
    public MappingProfile() {
        CreateMap<CreateOrderDto, Order>();
        CreateMap<UpdateOrderDto, Order>();
        CreateMap<Order, OrderDto>();
        CreateMap<OrderItemDto, OrderItem>();
    }
}