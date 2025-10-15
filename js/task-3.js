function getElementWidth(content, padding, border){
   //px
   const contentWidth = parseFloat(content);
   const paddingWidth = parseFloat(padding);
   const borderWidth = parseFloat(border);
   //toplam genişlik
   const totalWidth = contentWidth + (paddingWidth * 2) + (borderWidth * 2);
   //mesaj
   return totalWidth;
 }
   //kontrol
   console.log(getElementWidth("50px", "8px", "4px")); // 74
   console.log(getElementWidth("60px", "12px", "8.5px")); // 101
   console.log(getElementWidth("200px", "0px", "0px")); // 200
 