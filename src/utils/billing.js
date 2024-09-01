
export const billing = (cartItems, deliveryFee, gst) => {
  
    const bill = {
        subTotal: 0,
        total: 0,
        discount: 0,
        deliveryFee: deliveryFee,
        gst: 0
    }
    // calculate subtotal
    cartItems.forEach((cartItem) => {
       
        bill.subTotal += cartItem.product.price * cartItem.quantity;


        // Assuming discount is a percentage applied to each product's price
        if (cartItem.product.discount_percent !== 0 || null) {
        
            bill.discount += (cartItem.product.price * cartItem.product.discount_percent / 100) * cartItem.quantity;
        }
    });

    // Calculate total
    bill.gst = (bill.subTotal * gst / 100);
    bill.total = bill.subTotal + bill.deliveryFee + bill.gst - bill.discount;
   
    return bill;

}
