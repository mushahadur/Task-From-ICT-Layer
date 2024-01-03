<p align="center">
 <img width="100px" src="images/ict.jpeg" align="center" alt="ICT-Layer" />
 <h2 align="center">Here's the task, along with its corresponding solution.</h2>
 <p align="center"></p>
</p>

 <br/>
 
---
  <br/>

# Table of Contents

- [Introduction](#introduction)
- [Session & Session flashData](#session_flashData)
  - [Raw PHP](#raw_php)
    - [Raw PHP For Example](#raw_php_example)
  - [Laravel](#laravel)
    - [Laravel For Example](#laravel_example)
- [MySql Database](#mySql_database )
    - [Data Types](#data_types )
- [Using the compact()](#compact)
- [Data pass to array function](#array_function)
- [Fetch the data in the controller](#fetch-the-data)
- [Abstraction Vs Interfaces](#abstraction-interfaces)

        
# Introduction <a name="introduction"></a>

<p>The tasks you've outlined cover a comprehensive range of web development topics, from foundational PHP and database management to JavaScript, AJAX, Vue.js, Nuxt.js, and various data storage techniques like local storage and cookies. These tasks span server-side scripting, front-end development, and data handling, providing a holistic view of essential web development skills and technologies. Each task delves into specific areas such as sessions, database design, array manipulation, AJAX, front-end frameworks like Vue.js and Nuxt.js, and client-side storage mechanisms like local storage and cookies. These tasks collectively offer a broad understanding of web development fundamentals, client-server interaction, and modern JavaScript frameworks.</p> 

<br/>
<br/>

# Session & Session flashData <a name="session_flashData"></a>

<p>
In web development, a "session" refers to a way of maintaining stateful information about a user across multiple pages or interactions with a website. Sessions allow websites to recognize a user, even if they navigate between different pages or perform various actions during their visit.</p> 



## Raw PHP <a name="raw_php"></a>

<h3>Starting a Session:</h3>

```php
session_start(); // Start a new session or resume the existing one

```

<h3>Storing Data in Session:</h3>

```php
$_SESSION['key'] = 'value'; // Store data in the session

```

<h3>Retrieving Data from Session:</h3>

```php
$value = $_SESSION['key']; // Retrieve data from the session

```

<h3>Removing Data from Session:</h3>

```php
unset($_SESSION['key']); // Remove a specific key from the session
// or
$_SESSION = []; // Clear all session data

```

<p> In raw PHP, you can use sessions and flash messages to handle user interactions and provide feedback. Here's an example of how you might implement session flashData in a simple PHP script:</p>

```php
<?php
// Starting the session
session_start();

// Function to set flash messages
function setFlashMessage($key, $message) {
    $_SESSION[$key] = $message;
}

// Function to get and clear flash messages
function getFlashMessage($key) {
    $message = isset($_SESSION[$key]) ? $_SESSION[$key] : null;
    unset($_SESSION[$key]); // Clear the message from session
    return $message;
}

// Example usage:
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form submission (e.g., form submission in an e-commerce scenario)
    
    // Simulating a successful order placement
    // Set a success flash message
    setFlashMessage('success_message', 'Order placed successfully!');
    
    // Redirect to a confirmation page
    header("Location: confirmation.php");
    exit;
}
?>

<!-- Confirmation.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Order Confirmation</title>
</head>
<body>
    <?php
    // Display flash messages
    $successMessage = getFlashMessage('success_message');
    if ($successMessage) {
        echo '<div style="background-color: #dff0d8; padding: 10px; margin-bottom: 10px;">' . $successMessage . '</div>';
    }
    ?>
    <h1>Order Confirmation Page</h1>
    <!-- Other content of the confirmation page -->
</body>
</html>

```

<br/>

## For Example <a name="raw_php_example"></a>

<h3>User Authentication:</h3>

```php
session_start();

// Upon successful login
$_SESSION['user_id'] = $user_id; // Storing user ID in the session

// Checking if the user is logged in
if (isset($_SESSION['user_id'])) {
    // User is authenticated
}

```


<h3>Cart Management:</h3>

```php
session_start();

// Adding items to the cart
$_SESSION['cart'][$product_id] = $quantity; // Storing product ID and quantity in the cart session

// Retrieving cart items
$cartItems = $_SESSION['cart']; // Accessing the cart items

```

<h3>Order Tracking:</h3>

```php
session_start();

// Storing order details for tracking
$_SESSION['order'][$order_id] = $order_details; // Storing order details in the session

// Retrieving order details
$orderDetails = $_SESSION['order'][$order_id]; // Accessing order details

```

<br/>

## Laravel <a name="laravel"></a>

<h3>Storing Data in Session:</h3>

```php
// Using session() helper function
session(['key' => 'value']); // Store data in the session

// Flashing data (available for the next request)
$request->session()->flash('key', 'value');

```

<h3>Retrieving Data from Session:</h3>

```php
$value = session('key'); // Retrieve data from the session

// Retrieving flashed data
$value = $request->session()->get('key');

```

<h3>Removing Data from Session:</h3>

```php
// Remove a specific key from the session
$request->session()->forget('key');

// Remove all data associated with the session
$request->session()->flush();

```

<h3>Flashing Session Data (Temporary Data):</h3>

```php
$request->session()->flash('key', 'value'); // Flash data for the next request
$request->session()->reflash(); // Keep all flash data for another request
$request->session()->keep(['key1', 'key2']); // Keep specific flash data for another request

```


<br/>

## Laravel For Example<a name="laravel_example"></a>

<h3>User Authentication:</h3>

```php
// Logging in a user
session(['user_id' => $user->id]); // Storing user ID in the session

// Checking if the user is logged in
if (session()->has('user_id')) {
    // User is authenticated
}

```


<h3>Cart Management:</h3>

```php
// Adding items to the cart
$request->session()->put("cart.$product_id", $quantity); // Storing product ID and quantity in the cart session

// Retrieving cart items
$cartItems = $request->session()->get('cart', []); // Accessing the cart items

```

<h3>Order Tracking:</h3>

```php
// Storing order details for tracking
$request->session()->put("order.$order_id", $order_details); // Storing order details in the session

// Retrieving order details
$orderDetails = $request->session()->get("order.$order_id"); // Accessing order details

```

<br/>

# MySql Database<a name="mySql_database"></a>

<p>MySQL is a popular open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for managing and manipulating data. Developed by Oracle Corporation, MySQL is widely used for various applications and websites due to its reliability, performance, scalability, and ease of use.</p>


## Data Types<a name="data_types"></a>

### Numeric Data Types

<h4>TINYINT</h4>
- A very small integer that can store values from -128 to 127 (signed) or 0 to 255 (unsigned).
            Example

            ```sql
                CREATE TABLE example (
                    id TINYINT UNSIGNED
                );
            ```

<h4>SMALLINT</h4>
- Stores small integers ranging from -32768 to 32767 (signed) or 0 to 65535 (unsigned).
            Example

            ```sql
                CREATE TABLE example (
                   value SMALLINT
                );
            ```

<h4>MEDIUMINT</h4>
- Allows medium-sized integers ranging from -8388608 to 8388607 (signed) or 0 to 16777215 (unsigned)
            Example

            ```sql
                CREATE TABLE example (
                    quantity MEDIUMINT UNSIGNED
                );
            ```

<h4>INT/INTEGER</h4>
- Commonly used for regular-sized integers, allowing values from -2147483648 to 2147483647 (signed) or 0 to 4294967295 (unsigned).
            Example

            ```sql
                CREATE TABLE example (
                    amount INT
                );
            ```

<h4>BIGINT</h4>
- Stores large integers ranging from -9223372036854775808 to 9223372036854775807 (signed) or 0 to 18446744073709551615 (unsigned).
            Example

            ```sql
                CREATE TABLE example (
                    population BIGINT UNSIGNED
                );
            ```


### Fixed-Point Types

<h4>DECIMAL</h4>
- Used for fixed-point numbers with exact precision and    scale. It allows for precise calculations involving decimal values.
            Example

            ```sql
                CREATE TABLE example (
                    population BIGINT UNSIGNED
                );
            ```
- In this example, price is a decimal number with a total of 10 digits, where 2 digits are reserved for decimal places.

    

###  Floating-Point Types:

<h4>FLOAT</h4>
    -  Represents single-precision floating-point numbers, allowing approximate values with a range of -3.402823466E+38 to -1.175494351E-38, 0, and 1.175494351E-38 to 3.402823466E+38.
    Example:

    ```sql
        CREATE TABLE example (
            value FLOAT
        );
    ```

    <h4>DOUBLE</h4>

    -  Stores double-precision floating-point numbers with a larger range compared to FLOAT, from -1.7976931348623157E+308 to -2.2250738585072014E-308, 0, and 2.2250738585072014E-308 to 1.7976931348623157E+308.
    Example:

    ```sql
        CREATE TABLE example (
             amount DOUBLE
        );
    ```


-Numeric Data Types  

<br/>
<br/>



<br/>
<br/>





1.session & session flashData store , remove etc all things about session (raw PHP + Laravel)
2.MySql Database table column's Data Types. Depth knowledge about Double, float, int, enum , char, varchar, set, boolean. Create & modify database table using PHPMyAdmin.Avoid Laravel Migration Command 
3.PHP array explode , implode , json encode , json decode
4.JS array split, join , json parse, json stringify 
5.Ajax basic , autocomplete using AJAX(Jquery)
6.append using raw js or jquery
7.Vue js basic , Vue Router , Vue Lifecycle hooks ,API calling in Vue js
8.Nuxt js basic , Nuxt Server API , API calling in Nuxt Js
9.Datatable JS basic knowledge
10.Server Side Rendering using Datatable JS
11.javascript localStorage and cookies (store data , remove data)
12.browser localstorage & browser session storage, store and remove data. create an example of localstorage using Vue js or Nuxt js
