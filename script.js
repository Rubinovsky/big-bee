$(document).ready(function(){


	// Звроротній звязок (за допомогою Ajax-запросів)

	    $("#feedback_form").submit(function() { //устанавливаем событие отправки для формы с id=form
	            var form_data = $("#feedback_form").serialize(); //собераем все данные из формы
	            $.ajax({
		            type: "POST", //Метод отправки
		            url: "send.php", //путь до php фаила отправителя
		            data: form_data
	            });
	            $("#feedback_form input:text").val('');
	        	$("#myModal").modal('hide');
	        	$("#small_modal").modal('show');
	        	return false
	    });
	    $(".info_honey button").click(function(){
	    	var par = $(this).parent();
	    	var text = par.find(".hide_text");
	    	text.slideDown("normal");
	    	$(this).fadeOut(0);
	    })
	    $('.order').click(function(){
	    	var par = $(this).parent();
	    	var h_type = par.find("h3").text();
	    	$(".honey_type").val(h_type);
	    })

	    $("#honey_form").submit(function() { //устанавливаем событие отправки для формы с id=form
	            var form_data = $("#honey_form").serialize(); //собераем все данные из формы
	            $.ajax({
		            type: "POST", //Метод отправки
		            url: "send.php", //путь до php фаила отправителя
		            data: form_data
	            });
	            $("#honey_form input:text").val('');
	        	$("#honey_form").modal('hide');
	        	$("#small_modal").modal('show');
	        	return false
	    });

	});    