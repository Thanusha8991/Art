// functions.php

// Establish a database connection
function connectDatabase() {
    $host = "your_host";
    $username = "your_username";
    $password = "your_password";
    $database = "your_database";

    $conn = new mysqli($host, $username, $password, $database);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    return $conn;
}

// Insert project details into the database
function insertProject($title, $description, $image) {
    $conn = connectDatabase();
    
    $sql = "INSERT INTO projects (Title, Description, Image) VALUES ('$title', '$description', '$image')";
    
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

// Retrieve project data from the database
function getProjects() {
    $conn = connectDatabase();
    
    $sql = "SELECT * FROM projects";
    $result = $conn->query($sql);
    
    $projects = array();
    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $projects[] = $row;
        }
    }
    
    return $projects;
}

// Implement updateProject() and deleteProject() functions similarly

// functions.php

// Register a new user
function registerUser($username, $password) {
    $conn = connectDatabase();
    
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    $sql = "INSERT INTO users (Username, Password) VALUES ('$username', '$hashedPassword')";
    
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

// Verify user login
function loginUser($username, $password) {
    $conn = connectDatabase();
    
    $sql = "SELECT Password FROM users WHERE Username='$username'";
    $result = $conn->query($sql);
    
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['Password'];
        
        if (password_verify($password, $hashedPassword)) {
            return true;
        }
    }
    
    return false;
}

// Implement logoutUser() and session management functions
