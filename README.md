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
- [PHP array functions ](#php_array_functions )
- [JavaScript array methods](#js_array_methods )
- [Ajax Basic](#ajax_basic)
    - [Autocomplete using AJAX](#autocomplete_using_ajax)
- [Append using raw js or jquery](#append_using)
- [Vue js](#vue_js)
    - [Vue Router ](#vue_router)
    - [Vue Lifecycle hooks ](#vue_lifecycle)
    - [Vue API calling ](#vue_api)
- [Nuxt js basic](#nuxt_js)
- [Datatable JS](#datatable_js)
- [Server Side Rendering using Datatable JS](#server_side_rendering)

        
# Introduction <a name="introduction"></a>

<p>The tasks you've outlined cover a comprehensive range of web development topics, from foundational PHP and database management to JavaScript, AJAX, Vue.js, Nuxt.js, and various data storage techniques like local storage and cookies. These tasks span server-side scripting, front-end development, and data handling, providing a holistic view of essential web development skills and technologies. Each task delves into specific areas such as sessions, database design, array manipulation, AJAX, front-end frameworks like Vue.js and Nuxt.js, and client-side storage mechanisms like local storage and cookies. These tasks collectively offer a broad understanding of web development fundamentals, client-server interaction, and modern JavaScript frameworks.</p> 

<br/>

# List of topic

 | SI No         | Topics                 |
 | ------------ | ---------------------- |
 | 01 | session & session flashData store , remove etc all things about session (raw PHP + Laravel)  |
 | 02 | MySql Database table column's Data Types. Depth knowledge about Double, float, int, enum , char, varchar, set, boolean. Create & modify database table using PHPMyAdmin.Avoid Laravel Migration Command |
 | 03 | PHP array explode , implode , json encode , json decode|
 | 04 | JS array split, join , json parse, json stringify |
 | 05 | Ajax basic , autocomplete using AJAX(Jquery) |
 | 06 | append using raw js or jquery |
 | 07 | Vue js basic , Vue Router , Vue Lifecycle hooks ,API calling in Vue js  |
 | 08 | Nuxt js basic , Nuxt Server API , API calling in Nuxt Js |
 | 09 | Datatable JS basic knowledge |
 | 10 | Server Side Rendering using Datatable JS |
 | 11 | javascript localStorage and cookies (store data , remove data) |
 | 12 | browser localstorage & browser session storage, store and remove data. create an example of localstorage using Vue js or Nuxt js |


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


# Data Types<a name="data_types"></a>

## Numeric Data Types

### 1. INTEGER Types:
<h4>TINYINT</h4>
    - A very small integer that can store values from -128 to 127 (signed) or 0 to 255 (unsigned).
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        id TINYINT UNSIGNED
    );
```

<h4>SMALLINT</h4>
    - Stores small integers ranging from -32768 to 32767 (signed) or 0 to 65535 (unsigned).
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        value SMALLINT
    );
```

<h4>MEDIUMINT</h4>
- Allows medium-sized integers ranging from -8388608 to 8388607 (signed) or 0 to 16777215 (unsigned)
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        quantity MEDIUMINT UNSIGNED
    );
```

<h4>INT/INTEGER</h4>
- Commonly used for regular-sized integers, allowing values from -2147483648 to 2147483647 (signed) or 0 to 4294967295 (unsigned).
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        amount INT
    );
```

<h4>BIGINT</h4>
- Stores large integers ranging from -9223372036854775808 to 9223372036854775807 (signed) or 0 to 18446744073709551615 (unsigned).
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        population BIGINT UNSIGNED
    );
```


### 2. Fixed-Point Types

<h4>DECIMAL</h4>
- Used for fixed-point numbers with exact precision and    scale. It allows for precise calculations involving decimal values.
            <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        population BIGINT UNSIGNED
    );
```
- In this example, price is a decimal number with a total of 10 digits, where 2 digits are reserved for decimal places.

    

### 3. Floating-Point Types:

<h4>FLOAT</h4>
    -  Represents single-precision floating-point numbers, allowing approximate values with a range of -3.402823466E+38 to -1.175494351E-38, 0, and 1.175494351E-38 to 3.402823466E+38.
   <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
        value FLOAT
    );
```

<h4>DOUBLE</h4>
    -  Stores double-precision floating-point numbers with a larger range compared to FLOAT, from -1.7976931348623157E+308 to -2.2250738585072014E-308, 0, and 2.2250738585072014E-308 to 1.7976931348623157E+308.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
            amount DOUBLE
    );
``` 



## String Data Types
### 1. CHAR Types

<h4>CHAR</h4>
    - Fixed-length character string that stores a specific number of characters. The maximum length ranges from 0 to 255 characters.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
    code CHAR(5)
);

```
In this example, code is a fixed-length string that can store up to 5 characters.


### 2. VARCHAR Types

<h4>VARCHAR</h4>
    - Variable-length character string that stores characters up to a defined maximum length. It's more efficient for shorter strings and allows for more flexible storage compared to CHAR.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
    name VARCHAR(50)
);

```
Here, name is a variable-length string that can store up to 50 characters.


### 3. TEXT  Types

<h4>TEXT, MEDIUMTEXT, LONGTEXT</h4>
    - These types are used for storing large amounts of text data, with varying maximum lengths.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
    description TEXT
);

```
The description column is suitable for holding a large volume of textual information.


### 4. Binary Strings  Types

<h4>BINARY</h4>
    - Fixed-length binary string, similar to CHAR but stores binary byte strings.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     binary_data BINARY(20)
);

```

<h4>VARBINARY</h4>
    - Variable-length binary string, similar to VARCHAR but stores binary byte strings.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     binary_file VARBINARY(1000)
);

```


### 5. Enumeration and Set  Types

<h4>ENUM</h4>
    - A column that can have one of a set of predefined values.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     status ENUM('Active', 'Inactive', 'Pending')
);

```

<h4>SET</h4>
    - Similar to ENUM but allows multiple values to be selected from a predefined set of values.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     preferences SET('Email', 'SMS', 'Push Notification')
);

```



## Date and Time Data Types
### 1. DATE Types

<h4>DATE</h4>
    - Stores date values in the format YYYY-MM-DD.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     date_col DATE
);

```
The date_col column will store dates like '2023-07-19'.


### 2. TIME Types

<h4>TIME</h4>
    - Stores time values in the format HH:MM:SS.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     time_col TIME
);

```
The time_col column will store time values like '14:30:00'.


### 3. DATETIME  Types

<h4>DATETIME</h4>
    - Stores both date and time values in the format YYYY-MM-DD HH:MM:SS.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
    datetime_col DATETIME
);

```
The datetime_col column will store values like '2023-07-19 14:30:00'.


### 4. TIMESTAMP Types

<h4>TIMESTAMP</h4>
    - Stores a datetime value and represents the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). It also automatically updates itself to the current timestamp whenever the row is inserted or updated if not explicitly set.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     timestamp_col TIMESTAMP
);

```
The timestamp_col column will store timestamps.


### 5. YEAR  Types

<h4>YEAR</h4>
    - Stores year values in a four-digit format (e.g., 2023).
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     year_col YEAR
);

```
The year_col column will store year values like '2023'.


## Binary Data Types
### 1. BINARY and VARBINARY

<h4>BINARY</h4>
    - A fixed-length binary string type that stores binary byte strings. It has a defined length and pads with trailing spaces.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     binary_data BINARY(10)
);

```


<h4>VARBINARY</h4>
    - A variable-length binary string type that stores binary byte strings up to a defined maximum length.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     varbinary_data VARBINARY(100)
);

```



### 2. BLOB Types

<h4>BLOB, MEDIUMBLOB, LONGBLOB</h4>
    - These are used for storing larger amounts of binary data, with varying maximum lengths.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     blob_data BLOB
);

```
The BLOB type can store binary data like images, documents, or other large files.




## Other Data Types
### 1. BOOLEAN Types

<h4>BOOLEAN</h4>
    - An alias for TINYINT(1), used to represent true/false values.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     is_active BOOLEAN
);

```
In MySQL, BOOLEAN is an alias for TINYINT(1), where values 0 and 1 represent false and true, respectively.


### 2. ENUM Types

<h4>ENUM</h4>
    - A column that can have one of a set of predefined values. Each value must be chosen from the list of specified values at the time of insertion.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     status ENUM('Active', 'Inactive', 'Pending')
);

```
The status column allows only the values 'Active', 'Inactive', or 'Pending'.


### 3. SET  Types

<h4>SET</h4>
    - Similar to ENUM, but it allows multiple values to be selected from a predefined set of values.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
    preferences SET('Email', 'SMS', 'Push Notification')
);

```
The preferences column can store multiple values from the set 'Email', 'SMS', and 'Push Notification'.


### 4. JSON Types

<h4>JSON</h4>
    - Stores JSON data.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
     json_data JSON
);

```
The json_data column stores JSON-formatted data.


### 5. GEOMETRY  Types

<h4>GEOMETRY</h4>
    - MySQL supports spatial data types to store geometric data like points, lines, polygons, etc., used in GIS (Geographic Information System) applications.
    <br/>
    Example:
    <br/>

```sql
    CREATE TABLE example (
      location GEOMETRY
);

```
The location column stores geometric data representing locations or shapes.


### Create database table for all data types.

```sql
-- Create a new database if it doesn't exist
CREATE DATABASE IF NOT EXISTS SampleDB;

-- Use the newly created database
USE SampleDB;

-- Create a table with columns of different data types
CREATE TABLE SampleTable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tinyint_col TINYINT UNSIGNED,
    smallint_col SMALLINT,
    mediumint_col MEDIUMINT UNSIGNED,
    int_col INT,
    bigint_col BIGINT UNSIGNED,
    decimal_col DECIMAL(10, 2),
    float_col FLOAT,
    double_col DOUBLE,
    char_col CHAR(10),
    varchar_col VARCHAR(255),
    text_col TEXT,
    binary_col BINARY(20),
    varbinary_col VARBINARY(100),
    blob_col BLOB,
    date_col DATE,
    time_col TIME,
    datetime_col DATETIME,
    timestamp_col TIMESTAMP,
    year_col YEAR,
    bool_col BOOLEAN,
    enum_col ENUM('Option 1', 'Option 2', 'Option 3'),
    set_col SET('Red', 'Green', 'Blue'),
    json_col JSON,
    geometry_col GEOMETRY
);

-- Alter table to add a new column
ALTER TABLE SampleTable
ADD COLUMN new_column INT;

```

<br/>

# PHP array functions <a name="php_array_functions"></a>

- explode()
- implode()
- json_encode()
- json_decode()


<h4>explode()</h4>

Usage: The explode() function splits a string into an array based on a specified delimiter.
<br/>
Syntax: explode(separator, string, limit).
<br/>

#### Example:

```php
$str = "Apple,Orange,Banana";
$arr = explode(",", $str);
print_r($arr);

```
#### Output:

```csharp
Array
(
    [0] => Apple
    [1] => Orange
    [2] => Banana
)

```

<h4>implode() (or join())</h4>

Usage: The implode() function joins elements of an array into a single string using a specified delimiter.
<br/>
Syntax: implode(separator, array).
<br/>

#### Example:

```php
$arr = array("Apple", "Orange", "Banana");
$str = implode(", ", $arr);
echo $str;

```
#### Output:

```mathematica
Apple, Orange, Banana

```


<h4>json_encode()</h4>

Usage: The json_encode() function converts a PHP value (array, object) into a JSON string.
<br/>
Syntax: json_encode(value, options, depth).
<br/>

#### Example:

```php
$data = array("name" => "John", "age" => 30, "city" => "New York");
$json = json_encode($data);
echo $json;

```
#### Output:

```json
{"name":"John","age":30,"city":"New York"}

```

<h4>json_decode()</h4>

Usage: The json_decode() function decodes a JSON string into a PHP value (object or associative array).
<br/>
Syntax: json_decode(json_string, assoc, depth, options).
<br/>

#### Example:

```php
$json = '{"name":"John","age":30,"city":"New York"}';
$data = json_decode($json, true); // Passing true returns an associative array
print_r($data);

```
#### Output:

```csharp
Array
(
    [name] => John
    [age] => 30
    [city] => New York
)

```

<p>
These functions are commonly used in PHP to manipulate strings, arrays, and JSON data. explode() and implode() are useful for string manipulations, while json_encode() and json_decode() are used to convert PHP data to and from the JSON format, facilitating data exchange between PHP and other systems that use JSON.</p> 



<br/>


<br/>

# JavaScript array methods <a name="js_array_methods"></a>

- split()
- join()
- JSON.parse()
- JSON.stringify()


<h3>split()</h3>
Usage: The split() method splits a string into an array of substrings based on a specified separator and returns the new array.
<br/>
Syntax: string.split(separator, limit).
<br/>

#### Example:

```php
var str = "Apple,Orange,Banana";
var arr = str.split(",");
console.log(arr);

```
#### Output:

```css
["Apple", "Orange", "Banana"]

```


<h3>join()</h3>
Usage: The join() method joins all elements of an array into a string using a specified separator.
<br/>
Syntax: array.join(separator).
<br/>

#### Example:

```php
var arr = ["Apple", "Orange", "Banana"];
var str = arr.join(", ");
console.log(str);

```
#### Output:

```arduino
"Apple, Orange, Banana"

```


<h3>JSON.parse()</h3>
Usage: The JSON.parse() method parses a JSON string and converts it into a JavaScript object.
<br/>
Syntax: JSON.parse(jsonString).
<br/>

#### Example:

```javascript
var jsonStr = '{"name": "John", "age": 30, "city": "New York"}';
var obj = JSON.parse(jsonStr);
console.log(obj);

```
#### Output:

```css
{ name: 'John', age: 30, city: 'New York' }

```

<h3>JSON.stringify()</h3>
Usage: The JSON.stringify() method converts a JavaScript object into a JSON string
<br/>
Syntax: JSON.stringify(value, replacer, space).
<br/>

#### Example:

```javascript
var obj = { name: "John", age: 30, city: "New York" };
var jsonStr = JSON.stringify(obj);
console.log(jsonStr);

```
#### Output:

```css
'{"name":"John","age":30,"city":"New York"}'

```

<p>These methods are essential in JavaScript for manipulating strings, arrays, and JSON data. split() and join() are used to work with string data and arrays. JSON.parse() is used to convert JSON strings to JavaScript objects, while JSON.stringify() converts JavaScript objects into JSON strings, facilitating data exchange between JavaScript and external systems that use JSON.</p>



<br/>




# Ajax Basic <a name="ajax_basic"></a>

<p>AJAX (Asynchronous JavaScript and XML) is a powerful technique used in web development to create asynchronous requests to a server from a web page without requiring a page refresh.</p>

### Environmet setup

#### Step 01:
For head tag

```css
    <meta name="csrf-token" content="{{ csrf_token() }}">
     <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
```

#### Step 02:
For body tag (put it just inside the closing body tags)

```javascript
<script src="http://cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script>

<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>
```
### Insert data

#### Step 01:

HTML body tag

```html
    <div class="modal fade" id="studentModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="text-center text-primary" id="addModalLabel">Student Form</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>
                <div class="text-center errorMessage"></div>
                <form id="my-form">
                    @csrf
                    <div class="modal-body">
                        <div class="errMessContainer"></div>
                        <div class="form-group row mb-3">
                            <label class="col-form-label col-md-3">Name</label>
                            <div class="col-md-9">
                                <input type="text" id="name" name="name" class="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <label class="col-form-label col-md-3">Email</label>
                            <div class="col-md-9">
                                <input type="email" id="email"  name="email" class="form-control" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <label class="col-form-label col-md-3">Course</label>
                            <div class="col-md-9">
                                <input type="text" id="course"  name="course" class="form-control" placeholder="Enter Course" />
                            </div>
                        </div>
                    </div>
                </form>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" id="btnSubmit" class="btn btn-success">Save Student Info</button>
                </div>
            </div>
        </div>
    </div>
```

when hit the Save Student button then id=`btnSubmit` pass to data from all input field, then cach the JavaScript function

#### Step 02:

JavaScript function

```javascript
<script>
    $(document).ready(function (){
        $(document).on('click', '#btnSubmit', function (e){
            e.preventDefault();
            let name = $('#name').val();
            let email = $('#email').val();
            let course = $('#course').val();
            $.ajax({
                url:"{{route('addStudent')}}",
                method:"POST",
                data: {name:name, email:email, course:course},
                success:function(res){
                    if(res.status == 'success'){
                        $('#studentModal').modal('hide');
                        $('#my-form')[0].reset();
                        $('.table').load(location.href+' .table');
                        Command: toastr["success"]("New Student Added.", "success")

                        toastr.options = {
                            "closeButton": false,
                            "debug": false,
                            "newestOnTop": false,
                            "progressBar": false,
                            "positionClass": "toast-top-center",
                            "preventDuplicates": false,
                            "onclick": null,
                            "showDuration": "300",
                            "hideDuration": "1000",
                            "timeOut": "5000",
                            "extendedTimeOut": "1000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                    }
                }, error:function(err){
                    let error = err.responseJSON;
                    $.each(error.errors, function (index, value){
                        $('.errorMessage').append('<span class="text-danger">'+value+'</span>'+'</br>');
                    });
                }
            });
        });
    });
</script>
```
when call the ajax function then pass data by route url

#### Step 03:

```php
Route::post('/add-student', [StudentController::class, 'addStudent'])->name('addStudent');
```
Now call the Student Controller method addStudent

#### Step 04:

```php
   public function addStudent(Request $request){
       $request->validate(
           [
               'name'=>'required | unique:students',
               'email'=>'required | unique:students',
               'course'=>'required ',
           ],
           [
               'name.required'=>'Name is Required',
               'name.unique'=>'You are Already Existed',
               'email.required'=>'Email is Required',
               'email.unique'=>'Email is Already Existed',
               'course.required'=>'Course is Required ',
           ]
       );

       $student = new Student();
       $student->name = $request->name;
       $student->email = $request->email;
       $student->course = $request->course;
       $student->save();
       return response()->json([
            'status' => 'success',
       ]);
   }
```










# Autocomplete using AJAX <a name="autocomplete_using_ajax"></a>

<br/>
  


<br/>
<br/>

# Append using raw js or jquery <a name="append_using"></a>

The `append()` method in both raw JavaScript and jQuery is used to add content or elements inside another element. It's commonly used to dynamically add HTML content or elements to a specified DOM element.
<h3>Raw JavaScript Example:</h3>
Suppose you have an HTML structure like this:

```html
<div id="container">
  <p>Initial content</p>
</div>
<button onclick="appendToContainer()">Append Content</button>

```
We can use raw JavaScript to append content inside the #container element:

```javascript
function appendToContainer() {
  var container = document.getElementById("container");
  var newContent = document.createElement("p");
  newContent.textContent = "Appended content";
  container.appendChild(newContent);
}

```

This JavaScript function `appendToContainer()` finds the element with the ID `container`, creates a new paragraph element (`<p>`) with the text "Appended content", and appends it inside the `#container` element when the button is clicked.


<h3>jQuery Example:</h3>
If you're using jQuery, here's how you would achieve the same functionality:
HTML structure:

```html
<div id="container">
  <p>Initial content</p>
</div>
<button id="appendButton">Append Content</button>

```

jQuery code:

```javascript
$(document).ready(function() {
  $("#appendButton").click(function() {
    $("#container").append("<p>Appended content</p>");
  });
});

```

This jQuery code waits for the document to be ready and then attaches a click event listener to the button with the ID `appendButton`. When the button is clicked, it uses the `append()` method to add a new paragraph element containing "Appended content" inside the `#container.`

Both raw JavaScript and jQuery `append()` methods accomplish similar tasks: adding new content dynamically to an HTML element. The choice between raw JavaScript and jQuery often depends on project requirements, familiarity with the library, or specific browser compatibility concerns. However, native JavaScript tends to be lighter, while jQuery simplifies complex DOM manipulations and offers cross-browser compatibility.



<br/>
  
  # Vue js Basic<a name="vue_js"></a>

Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It's designed to be incrementally adoptable, making it easy to integrate into existing projects.

### Key Features:
Reactive Data Binding: Vue.js provides a reactive and two-way data binding between the DOM and the data model, ensuring automatic UI updates when the data changes.

- Component-Based Architecture: Vue.js emphasizes building applications using reusable and composable components, allowing developers to create complex interfaces efficiently.

- Directives: Vue.js offers directives like v-if, v-for, v-bind, etc., allowing developers to add dynamic behavior to the DOM based on data changes.

- Virtual DOM: Vue.js uses a virtual DOM to efficiently update the actual DOM. It minimizes DOM manipulations by identifying and applying only the necessary changes.

- Lifecycle Hooks: Vue.js provides lifecycle hooks (created, mounted, updated, destroyed) enabling developers to execute code at specific stages of a component's lifecycle.

- Vue Router: Vue.js comes with Vue Router, a library for managing application routing. It allows defining routes and navigation between different views in a Vue application.

- Vuex (State Management): Vuex is the official state management library for Vue.js, facilitating centralized state management in applications with predictable state mutations.

- Vue CLI: Vue CLI is a command-line interface tool for scaffolding Vue.js projects quickly. It simplifies project setup, configuration, and development workflows.

### Advantages:
- Approachable: Vue.js is easy to learn and allows gradual integration into existing projects.
- Versatile: It's suitable for building small to large-scale applications and offers flexibility in architecture.
- Performance: Its efficient virtual DOM and reactivity contribute to good performance in applications.
- Ecosystem: Vue.js has a rich ecosystem with a variety of libraries, tools, and plugins.

<br/>
<br/>

  ## Vue js Router<a name="vue_router"></a>

 Vue Router is the official routing library for Vue.js. It allows you to build single-page applications by managing navigation between different views or pages within a Vue application.

 ### Installation:
If I am starting a new Vue project using Vue CLI, If I can not usually included then I install it separately:

```bash
npm install vue-router

```

#### Create a Router Instance

`src/router/index.js`

```javascript
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name: "home",
        component: () => import("../components/Home.vue"),
    },
    {
        path:"/about",
        name: "about",
        component: () => import("../components/About.vue"),
    },
    {
        path:"/blog/:id",
        name: "blog-id",
        component: () => import("../components/Blog.vue"),
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes,
});
```


#### Create Vue Components:
`src/components/Home.vue`

This page all html components

```html
<template>
    <h2>Home Page</h2>
    <p>THis is Home page</p>
</template>>
```

`src/App.vue` this path call component vue

This page call components `  <router-view>`

```html
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  

  <main>
    <router-view></router-view>
  </main>
</template>
```
This is a basic example of how to set up Vue Router and define routes within a Vue.js application

<br/>

  ## Vue js Lifecycle hooks <a name="vue_lifecycle"></a>

<br/>

  ## Vue js API calling<a name="vue_api"></a>

<br/>

  # Nuxt js Basic<a name="nuxt_js"></a>


  <br/>
<br/>

  # Datatable JS<a name="datatable_js"></a>

DataTables is a powerful jQuery plugin used for creating interactive and feature-rich HTML tables with advanced functionalities like sorting, filtering, pagination, and more. It simplifies the process of presenting and managing large volumes of data in a tabular format on web pages.

### Basic Usage:

#### 1. Setting Up:
Include the necessary dependencies in your HTML file:
```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- DataTables CSS -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">

<!-- DataTables JavaScript -->
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>

```
#### 2. Creating a DataTable:
Assuming you have an HTML table with an ID (`#example`), here's how you'd initialize a basic DataTable:

```javascript
$(document).ready(function() {
  $('#example').DataTable(); // Initialize DataTable
});

```

#### 3. Example Table Structure:

```html
<table id="example">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>25</td>
      <td>Canada</td>
    </tr>
    <!-- Additional rows -->
  </tbody>
</table>

```

#### 4.1. Pagination:
Control the pagination settings of the table.

`paging`: Enable or disable pagination.
`pageLength`: Set the default number of rows per page.<br/>
```javascript
$(document).ready(function() {
  $('#example').DataTable({
    paging: true, // Enable pagination
    pageLength: 10 // Set default page length to 10 rows
  });
});

```

#### 4.2 Sorting
Customize sorting options.

`order`: Define initial sorting columns and order.

```javascript
$(document).ready(function() {
  $('#example').DataTable({
    order: [[1, 'asc']] // Sort by the second column (index 1) in ascending order
  });
});

```

#### 4.3. Filtering/Search:

Control search and filter settings.

`searching`: Enable or disable search functionality.
`searchDelay`: Set a delay (in milliseconds) before search is triggered after entering a keyword.

```javascript
$(document).ready(function() {
  $('#example').DataTable({
    searching: true, // Enable search
    searchDelay: 500 // Trigger search after a delay of 500ms
  });
});

```

#### 4.4. Language Settings:

Customize text and language used in the table.

`language`: Customize the text for various table elements like pagination, search, and more.

```javascript
$(document).ready(function() {
  $('#example').DataTable({
    language: {
      search: 'Search records:', // Custom search placeholder text
      paginate: {
        next: 'Next page', // Custom text for 'Next' button
        previous: 'Previous page' // Custom text for 'Previous' button
      },
      // Additional language customization options
    }
  });
});

```

<br/>

        
# Server Side Rendering using Datatable JS <a name="server_side_rendering"></a>

Server-Side Rendering (SSR) with DataTables involves loading and processing large datasets directly from the server. It's particularly useful when dealing with extensive data to avoid overwhelming the client-side resources or when you want to enable features like sorting, searching, and pagination with large datasets.

## Example Steps for Server-Side Rendering:

### 01. Server-Side Implementation:

Implement a server-side script that handles data retrieval based on specific parameters like sorting, filtering, and pagination. This can be done using PHP, Node.js, Python, or any server-side language.<br/>

Here's an example using PHP and MySQL:

```php
// server_side.php (PHP)
<?php
// Fetch data from the database based on DataTables parameters
// Implement logic to get data according to sorting, filtering, and pagination
// Return data as JSON to the DataTables request

// Example:
$data = array(
    array('Name' => 'John', 'Age' => 30, 'Country' => 'USA'),
    array('Name' => 'Alice', 'Age' => 25, 'Country' => 'Canada'),
    // More data
);

echo json_encode(array(
    'draw' => intval($_POST['draw']),
    'recordsTotal' => count($data),
    'recordsFiltered' => count($data), // For simplicity, consider unfiltered data count the same as total records
    'data' => $data // Send data as an array
));
?>

```

### 2. Client-Side Configuration:
Initialize DataTables on the client-side with server-side processing enabled:

```javascript
$(document).ready(function() {
  $('#example').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      "url": "server_side.php", // URL to your server-side script
      "type": "POST"
    },
    // Other configurations like column definitions, sorting, etc.
    "columns": [
      { "data": "Name" },
      { "data": "Age" },
      { "data": "Country" }
    ]
  });
});

```
Server-Side Rendering with DataTables involves fetching and processing data on the server based on DataTables' parameters and responding with the necessary dataset to render the table. This approach is beneficial for handling large datasets and providing advanced functionalities like sorting, pagination, and searching while maintaining better performance on the client-side. The server-side script should respond to DataTables' parameters and process data efficiently for optimal user experience.


<br/>






<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

