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
  - [Using the with() method](#with-method)
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

<br/>

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


<p>
In web development, a "session" refers to a way of maintaining stateful information about a user across multiple pages or interactions with a website. Sessions allow websites to recognize a user, even if they navigate between different pages or perform various actions during their visit.</p> 

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