<?php

require_once 'vendor/autoload.php';


// init configuration
$clientID = '24523890842-46736k2gh2vq42fglont5itao58h5dft.apps.googleusercontent.com';
$clientSecret = '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';
$redirectUri = 'http://localhost/aniplay/index.php';


// create Client Request to access Google API
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");


// connect to database
$hostname = "localhost";
$username = "root";
$password = "";
$database = "aniplay";

$conn = mysqli_connect($hostname, $username, $password, $database);


?>