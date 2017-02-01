<?php 
	$to = 'oles.rubinovscky@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = "Зворотній зв'язок"; //Загаловок сообщения
	$message = "Ім'я: ".$_POST['name']. '                                '.
	            'Телефон: '.$_POST['phone'];

	mail($to, $subject, $message); //Отправка письма с помощью функции mail 
?>