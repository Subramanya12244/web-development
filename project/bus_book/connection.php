<?php

$dbhost = "localhost:3306";
$dbuser = "root";
$dbpass = "";
$dbname = "busx";

if(!$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
else{
	//echo "connected";//
}
?>