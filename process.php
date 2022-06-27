<?php
  if (isset($_GET['email']))  {
  
    //Email information
    $admin_email = "anandkadale1@gmail.com";
    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $message = $_GET['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    
    header('Location: https://anandk008.github.io/Simple.Finance.site/success.html' , TRUE, 301);
  }
  exit();
?>
