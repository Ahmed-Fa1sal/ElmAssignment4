using System.ComponentModel.DataAnnotations;

namespace ProductService.DTOs;

public class CreateProductDto{
    [Required(ErrorMessage = "Title is required")]
    public string Title {get; set;} = string.Empty;

    [Range(0.01, 10000, ErrorMessage = "Price Must be between $0.01 and $10,0000")]
    public decimal Price{get; set;}
    public string Description {get; set;} = string.Empty;
}