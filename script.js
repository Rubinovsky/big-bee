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

	});    