using OrderService.DTOs;
using OrderService.Models;
using AutoMapper;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Map item collections
        CreateMap<OrderItemDto, OrderItem>();
        CreateMap<OrderItem, OrderItemDto>();
        
        // Handle nested collections in these mappings
        CreateMap<CreateOrderDto, Order>()
            .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src.Items));
            
        CreateMap<UpdateOrderDto, Order>()
            .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src.Items));
            
        CreateMap<Order, OrderDto>()
            .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src.Items));
    }
}