<?php
//This is a basic configuration setup to a database. Works for phpmyadmin database servers.
$server = "csmysql.cs.cf.ac.uk";
$user = "c1412529"; 
$password = "naheg2"; 
$database = "c1412529";
$db = mysqli_connect($server,$user,$password,$database); 
if( $db === FALSE ){
	header( "Location: error.html" ); die();
}
?>