using AutoMapper;
using ProductService.DTOs;
using ProductService.Models;

namespace ProductService.Mappings;

public class MappingProfile : Profile{
    public MappingProfile(){
        //Entity -> DTO
        CreateMap<Product, ProductDto>();

        //DTO -> Entity
        CreateMap<CreateProductDto, Product>();
    }
}