<?php
session_start();
$pdo = new PDO('mysql:host=localhost;dbname=kurswahl_projekt', '', '');
?>
<?php
if (!isset($_SESSION['user']) && isset($_GET['login'])) {
    $username = $_POST['name'];
    $pswd = $_POST['pswd'];

    $error = false;

    if (empty($email) || empty($pswd)) {
        $error = true;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !$error) {
        $error = true;
    }

    if (!$error) {
        $sql = "SELECT * FROM 'user' WHERE username = :username";

        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute(array('username' => $username));
        $user = $stmt->fetch();
    }

    if ($user !== false && password_verify($pswd, $user['password']) && !$error) {
        $_SESSION['user']['id'] = $user['id'];
    }
} elseif (isset($_SESSION['user']) isset($_GET['logout'])) {
    // remove all session variables
    session_unset();

    // destroy the session
    session_destroy();
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <link rel="shortcut icon" href="favicon.png" type="image/png">
  <title>Kurswahl | Anmeldung</title>
</head>
<body>
  <header>
    <img src="./logo-big.png" alt="logo" id="logo">
  </header>
  <main>
    <h1>Wähle deinen Weg!</h1>
    <div class="form-container">
      <h2>Anmeldung <br> zur Kurwahl</h2>
      <form action="?login" method="POST">
        <label for="user">Benutzername</label>
        <input type="text" id="user" name="name" required>
        <label for="pass">Passwort</label>
        <input type="password" id="pass" name="pswd" required>
        <input type="submit" value="Weiter">
      </form>
    </div>
  </main>
</body>
</html>
