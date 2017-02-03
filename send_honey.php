<?php 
	switch ($_POST["pay"]) {
		case "cash":
			$pay = "Готівка";
			break;
		case "legend";
			$pay = "Грошовий переказ";
			break;
	}
	
	switch ($_POST["delivery"]) {
		case "courier":
			$delivery = "Кур'єр";
			break;
		case "post";
			$delivery = "Пошта";
			break;
		}
	$to = 'oles.rubinovscky@gmail.com';
	$sell_honey_s = "Купівля меду";


	$message = "\n Тип меду:".$_POST['honey_type'].
				"\n Ім'я: ".$_POST['name'].
				"\n Прізвище ".$_POST['last-name'].
	            "\n Телефон: ".$_POST['phone-number'].
	            "\n Загальна сума: ".	$_POST['sum_honey'].
	            "\n Спосіб оплати: ". $pay.
	            "\n Спосіб доставки: ". $delivery;

	mail($to, $sell_honey_s, $message)
?>