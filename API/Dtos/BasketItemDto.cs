using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string productName { get; set; }

        [Required]
        [Range(0.1, double.MaxValue, ErrorMessage = "Price must be greater than zero")]
        public decimal Price { get; set; }

        [Required]
        [Range(1, double.MaxValue, ErrorMessage = "Quantity must be at least one")]
        public int Quantity { get; set; }

        [Required]
        public string pictureUrl { get; set; }

        [Required]
        public string productBrand { get; set; }

        [Required]
        public string productType { get; set; }
    }
}