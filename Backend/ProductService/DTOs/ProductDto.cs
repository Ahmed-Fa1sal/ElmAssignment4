namespace ProductService.DTOs;

public class ProductDto{
    public int id {get; set;}
    public string Title {get; set;} = string.Empty;
    public decimal Price {get; set;}
    public string Description {get; set;} = string.Empty;
}
