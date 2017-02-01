$(document).ready(function(){

	// Звроротній звязок (за допомогою Ajax-запросів)

	    $("#feedback_form").submit(function() { //устанавливаем событие отправки для формы с id=form
	            var form_data = $("#feedback_form").serialize(); //собераем все данные из формы
	            $.ajax({
		            type: "POST", //Метод отправки
		            url: "send.php", //путь до php фаила отправителя
		            data: form_data,
		            success:alert("Your message has been sent!")
	            });
	            $("#feedback_form input").val('');
	        	return false
	    });

	    console.log($(".info_honey span").text())
	    
	});    