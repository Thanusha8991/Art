<?php
// Initialize variables
$name = $email = $phone = $message = "";
$errors = [];

// Function to sanitize input data
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Validate and sanitize form inputs
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);
    $phone = sanitizeInput($_POST["phone"]);
    $message = sanitizeInput($_POST["message"]);

    // Validate name
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $errors["name"] = "Name should contain only letters and spaces";
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Invalid email format";
    }

    // You can add more validation rules for the phone number if needed

    // Display errors if any
    if (count($errors) > 0) {
        include "index.html"; // Display the form again with error messages
    } else {
        // If all fields are valid, you can process the form (e.g., send email)
        // and display a success message
        echo "Form submitted successfully!";
    }
}
?>
