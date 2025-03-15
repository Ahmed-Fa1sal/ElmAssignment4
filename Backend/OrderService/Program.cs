using Microsoft.EntityFrameworkCore;
using OrderService.Data;
using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

// Add DbContext
builder.Services.AddDbContext<OrderDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("OrderDb"))
);

// Add AutoMapper
builder.Services.AddAutoMapper(typeof(Program));

// Add CORS
builder.Services.AddCors(options => {
  options.AddPolicy("AllowAngular", policy => {
    policy.WithOrigins("http://localhost:4200")
          .AllowAnyHeader()
          .AllowAnyMethod();
  });
});


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseCors("AllowAngular");
app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();
app.Run();