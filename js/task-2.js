function getShippingMessage(country, price, deliveryFee){
  //toplam maaliyet hesaplama
  const totalPrice = price + deliveryFee ;
  //mesaj
  return `Shipping to ${country} will cost ${totalPrice} credits`;
} 
  //kontrol
  console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
