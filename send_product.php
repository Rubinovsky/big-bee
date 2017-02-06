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
	if($_POST['mass_main']==0){
		$mass_main = "";
	}
	else if($_POST['mass_main']==31){
		$mass_main = "\n Більше ніж 30 кг";
	}
	else{
		$mass_main = "\n Маса: ".$_POST['mass_main']." кг";

	}
	if($_POST['mass_other']==0){
		$mass_other = "";
	}
	else if($_POST['mass_other']==5001){
		$mass_main = "\n Більше ніж 5 кг";
	}
	else{
		$mass_other = "\n Маса: ".$_POST['mass_other']." г";

	}
	$to = 'man.bee.shop@gmail.com';
	$sell_honey_s = "Купівля меду";


	$message =  " Товар:".$_POST['product_type'].
				"\n Ім'я: ".$_POST['name'].
				"\n Прізвище ".$_POST['last-name'].
				$mass_main.$mass_other.
	            "\n Телефон: ".$_POST['phone-number'].
	            "\n Загальна сума: ".	$_POST['sum_product'].
	            "\n Спосіб оплати: ". $pay.
	            "\n Спосіб доставки: ". $delivery;

	mail($to, $sell_honey_s, $message)
?>