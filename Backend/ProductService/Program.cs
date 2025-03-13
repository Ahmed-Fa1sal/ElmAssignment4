using Microsoft.EntityFrameworkCore;
using ProductService.Data;
using ProductService.Mappings;

var builder = WebApplication.CreateBuilder(args);

//add DbContext
builder.Services.AddDbContext<ProductDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

//add mapper
builder.Services.AddAutoMapper(typeof(MappingProfile));

//add swager

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//add controller
builder.Services.AddControllers();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.MapControllers();
app.Run();