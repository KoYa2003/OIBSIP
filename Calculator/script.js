
const buttons = document.querySelectorAll("button");

// Select the display element
const display = document.querySelector("#display");

// Set the initial content to "0"
display.innerText = "0";

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove the default "0" if present
        if (display.innerText === "0") {
            display.innerText = "";
        }

        // Handle different button clicks
        if (button.id === "clear") {
            display.innerText = "0"; // Reset the display to "0"
        } else if (button.id === "equal") {
            // Evaluate the expression
            try {
                display.innerText = eval(display.innerText);
            } catch (error) {
                display.innerText = "Error"; // Display error message
            }
        } else {
            display.innerText += button.id; // Concatenate button ID to display text
        }
    });
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};