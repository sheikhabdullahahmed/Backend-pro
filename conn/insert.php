<?php
$username = $_POST['username']
$lastname = $_POST['lastname']
$email = $_POST['email']
$password = $_POST['password']
$confrimpassword = $_POST['confrimpassword']


if(!empty($username) || empty($lastname) || empty($email) || empty($password) || empty($confrimpassword)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "youtube"

    $conn = new mysqli ($host, $dbusername, $dbname, $password)
    if(myspqi()) {
        die('Connect ('.mysqli_connect_error().')'.mysqli_connect_error())
    }
    else {
        $SELECT = "SELECT email From register Where email = ? Limit 1"
        $INSERT = "INSERT Into register (username,lastname,email, password, confrimpassword  ) values(? , ? , ? , ?) "

        $stmt = $conn->prpare($SELECT),
        $stmt-> bind_Param("s" ,$username, $lastname, $email, $password,$confrimpassword )
        $stmt-> execute()
        echo"New  record    "
    }
    else {
        echo "Someone else"
    }
    $stmt->close
}else {

    echo"All feild required"
    die()
}