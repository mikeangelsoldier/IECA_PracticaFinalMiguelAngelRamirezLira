using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PracticaFinalMiguelAngelRamirezLira.Data;
using PracticaFinalMiguelAngelRamirezLira.Models;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<PersonaContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("PersonaContext") ?? throw new InvalidOperationException("Connection string 'PersonaContext' not found.")));

// Add services to the container.

/*
builder.Services.AddControllersWithViews();
*/
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
