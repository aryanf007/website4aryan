/**
 * 1. Simple Color Glow Toggle (Noob Level Animation)
 * Toggles a class on the <body> tag to change the entire page's highlight colors.
 */
function toggleGlow() {
    // Finds the <body> and toggles the "glow-active" class on or off
    document.body.classList.toggle("glow-active");
}

/**
 * 2. Contact Form Submission Handler
 * Displays a simple alert and resets the input boxes.
 */
function handleContact(event) {
    // Prevents the page from doing a hard refresh
    event.preventDefault(); 
    
    // Shows a simple browser alert popup
    alert("✅ Message sent successfully!");
    
    // Clears out the name, email, and message inputs
    event.target.reset();   
}