
function calculateChickenPrice(weight) {
    // Convert weight from grams to kilograms
    let weightKg = weight / 1000;
    // Price per kg of chicken
    let pricePerKg = 500;
    // Calculate total price
    let totalPrice = weightKg * pricePerKg;
    return totalPrice;
}

// Get user input for weight in grams
let weightInput = parseFloat(prompt("Enter the weight of chicken that you want(in grams):"));

// Calculate the price
let price = calculateChickenPrice(weightInput);

// Display the result
document.write("<h2> You have to pay", price, "rupees for", weightInput, "grams of chicken. </h2>");

