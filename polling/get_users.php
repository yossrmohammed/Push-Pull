<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once "../connect.php";

function get_all_data()
{
    try {
        $pdo = connect_to_db_pdo();
        if ($pdo) {
            $query = "select * from users";
            $statement = $pdo->prepare($query);
            $res = $statement->execute();
            $rows = $statement->fetchAll(PDO::FETCH_ASSOC);
            return $rows;
        }
    } catch (Exception $e) {
        echo "<h3>{$e->getMessage()}</h3>";
    }
}

$rows = get_all_data();
echo json_encode($rows);
?>
