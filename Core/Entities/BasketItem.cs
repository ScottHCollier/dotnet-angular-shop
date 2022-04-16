namespace Core.Entities
{
    public class BasketItem
    {
        public int Id { get; set; }
        public string productName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string pictureUrl { get; set; }
        public string productBrand { get; set; }
        public string productType { get; set; }
    }
}