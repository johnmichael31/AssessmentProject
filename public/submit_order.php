<?php
include '../config/database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product_id = intval($_POST['productId']);
    $quantity = floatval($_POST['quantity']);
    $total_price = floatval($_POST['totalPrice']);
    $mobile_number = $_POST['mobileNumber'];

    // Begin transaction
    $conn->begin_transaction();

    try {
        // Insert into orders table
        $order_query = "INSERT INTO orders (total_price, customer_contact) VALUES (?, ?)";
        $stmt = $conn->prepare($order_query);
        $stmt->bind_param("ds", $total_price, $mobile_number);
        $stmt->execute();
        $order_id = $conn->insert_id;

        // Assuming price_per_unit is the price for each item and not the total price
        $price_per_unit = $total_price / $quantity;

        // Insert into order_items table
        $order_items_query = "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($order_items_query);
        $stmt->bind_param("iidd", $order_id, $product_id, $quantity, $price_per_unit);
        $stmt->execute();

        // Commit the transaction
        $conn->commit();

         // Instead of redirecting, send a JSON response
        header('Content-Type: application/json');
        echo json_encode(array('success' => true, 'redirect' => '/Kiosk_PHPVersion-main/public/orders.php?status=success'));
        exit();
    } catch (Exception $e) {
        // Rollback in case of error
        $conn->rollback();

        // Return an error message without redirecting
        header('Content-Type: application/json');
        echo json_encode(array('success' => false, 'error' => $e->getMessage()));
        exit();
    } finally {
        // Always close the connection
        $conn->close();
    }
}
?>
