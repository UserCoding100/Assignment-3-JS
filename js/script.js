document.addEventListener("DOMContentLoaded", function() {
    // Gets the element for student info
    const studentInfoElement = document.getElementById("studentInfo");
    
    // Student info string 
    const studentInfo = "Student ID: 200550446 | Name: Rohan Badera";
    if (studentInfoElement) {
        
        studentInfoElement.textContent = studentInfo;
    } else {
        console.error("Element with ID 'studentInfo' not found.");
    }
});

// Event listener for the form submission
document.getElementById("pizzaForm").addEventListener("submit", function(event) {
    // Prevents any default data form submission
    event.preventDefault(); 

    // Gets the form data
    const form_Data = new FormData(this);

    // Creates a Pizza object with form data
    const pizza = new Pizza(
        form_Data.get("deliveryType"),
        form_Data.get("size"),
        form_Data.get("crust"),
        form_Data.get("cheese"),
        form_Data.getAll("toppings"),
        form_Data.getAll("dippingSauce"),
        form_Data.getAll("drinks"),
        form_Data.get("drinkQuantity"),
        form_Data.get("bottleCan")
    );

    // Generates a pizza description
    const Thepizza_Description = pizza.getDescription();
    const Thepizza_DescriptionElement = document.getElementById("pizzaDescription");
    
    // Checks if the pizza description element exists
    if (Thepizza_DescriptionElement) {
        Thepizza_DescriptionElement.textContent = Thepizza_Description;
    } else {
        console.error("Element with ID 'pizzaDescription' not found.");
    }
});

// Class which represents a Pizza object
class Pizza {
    constructor(deliveryType, size, crust, cheese, toppings, dippingSauces, drinks, drinkQuantity, bottleCan) {
        this.deliveryType = deliveryType;
        this.size = size;
        this.crust = crust;
        this.cheese = cheese;
        this.toppings = toppings;
        this.dippingSauces = dippingSauces;
        this.drinks = drinks;
        this.drinkQuantity = drinkQuantity;
        this.bottleCan = bottleCan;
    }

    // Method that generates description of the pizza
    getDescription() {
        // Starts with basic pizza description
        let description_1 = `Your pizza: ${this.size} pizza with ${this.crust} crust, ${this.cheese}. Toppings: ${this.toppings.join(", ")}.`;

        // Adds delivery type to the description
        if (this.deliveryType === "delivery") {
            description_1 += " Delivery.";
        } else if (this.deliveryType === "pickUp") {
            description_1 += " Pick up.";
        } else { 
            description_1 += " Dine in.";
        }

        // Adds drinks to the description if selected
        if (this.drinks.length > 0) {
            description_1 += ` Drinks: ${this.drinks.join(", ")} (${this.drinkQuantity} ${this.bottleCan}).`;
        }

        // Returns the complete pizza description
        return description_1;
    }
}
