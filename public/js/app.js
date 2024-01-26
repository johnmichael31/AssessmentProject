let totalCost = 0;

function updateTotalCostDisplay() {
  const totalCostdisplay = document.querySelector("#totalCost");
  totalCostdisplay.innerText = totalCost.toFixed(2);
}
function addItemToCart(price) {
  totalCost += parseFloat(price);
  updateTotalCostDisplay();
}
// modal image
function showImageinModal(imgUrl) {
  document.querySelector("#modalImage").src = imgUrl;
}
// modal for order
function setupModal(button) {
  const orderModal = document.getElementById("orderModal");
  const productNameInput = orderModal.querySelector("#productName");
  const productIdInput = orderModal.querySelector("#productId");
  const quantityInput = orderModal.querySelector("#quantity");
  const totalPriceInput = orderModal.querySelector("#totalPrice");
  const productImage = orderModal.querySelector("#productImage");

  productNameInput.value = button.dataset.name;
  productImage.src = button.dataset.image;
  productIdInput.value = button.dataset.id;
  const price = parseFloat(button.dataset.price);
  const unit = button.dataset.unit;
  quantityInput.value = "1"; // Default value for both kg and pc
  quantityInput.min = unit === "kg" ? "0.01" : "1"; // Minimum value based on unit
  quantityInput.step = unit === "kg" ? "0.01" : "1"; // Step value based on unit
  totalPriceInput.value = price.toFixed(2);

  quantityInput.oninput = () => {
    totalPriceInput.value = (parseFloat(quantityInput.value) * price).toFixed(
      2
    );
  };
}

// document.addEventListener('DOMContentLoaded', () => {
//   const orderForm = document.getElementById("orderForm")

//   if (orderForm) { // Ensure orderForm is not null
//     orderForm.addEventListener('submit', function(e) {
//       const formData = new FormData(this);

//       fetch("/Kiosk_PHPVersion-main/public/submit_order.php", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.success) {
//             alert("Order submitted successfully.");
//             window.location.href = data.redirect;
//           } else {
//             alert("There was an error submitting your order: " + data.error);
//           }
//         })
//         .catch((error) => {
//           alert("There was an error submitting your order: " + error.message);
//         });

//       e.preventDefault(); // Prevent the normal form submission
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', () =>{
    const orderForm = document.getElementById('orderForm')

    if(orderForm){
      orderForm.addEventListener('submit', async function(e) {

        try{
          const formData = new FormData(this)
  
          const response = await fetch("/Kiosk_PHPVersion-main/public/submit_order.php", {
            method: 'POST',
            body: formData,
          })
  
          if(!response.ok){
           throw new Error("Network was not ok")
          }


          const responseData = await response.json()

          if(responseData.success){
            alert('Order Successfully saved')
            window.location.href = responseData.redirect;
          }else{
            alert('There was an error on submitting order :' + responseData.error);
          }
        }catch(error){
            alert('There was an problem on submitting order:' + error.message);
        }
        


        e.preventDefault();
    })
    

    
      
    }
})




