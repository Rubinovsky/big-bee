$(document).ready(function(){


	// Звроротній звязок (за допомогою Ajax-запросів)

	    $("#feedback_form").submit(function() { //устанавливаем событие отправки для формы с id=form
	            var form_data = $("#feedback_form").serialize(); //собераем все данные из формы
	            $.ajax({
		            type: "POST", //Метод отправки
		            url: "send_feedback.php", //путь до php фаила отправителя
		            data: form_data
	            });
	            $("#feedback_form input:text").val('');
	        	$("#myModal").modal('hide');
	        	$("#small_modal").modal('show');
	        	return false
	    });

	    $("#honey_form").submit(function() { //устанавливаем событие отправки для формы с id=form
	            var form_data = $("#honey_form").serialize(); //собераем все данные из формы
	            $.ajax({
		            type: "POST", //Метод отправки
		            url: "send_honey.php", //путь до php фаила отправителя
		            data: form_data
	            });
	            $("#honey_form input:text").val('');
	        	$("#modal_honey").modal('hide');
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
			$(".modal-body select").prop("checked",false);
 			function calc_h(price){
 				var type_honey = price;
	    			$(".sum_honey").val(price*0.5+"  грн");
		    		$(".modal-body select").change(function(){
		    			if($(".modal-body select").val() >= 0.5 && $(".modal-body select").val() <= 3){
		    				$(".sum_honey").val($(".modal-body select").val()*price+"  грн");
		    			}
		    			else if( $(".modal-body select").val() == 15){
		    				$(".sum_honey").val($(".modal-body select").val()*(price-2)+"  грн" + ", економія 30 грн");
		    			}
		    			else if( $(".modal-body select").val() == 30){
		    				$(".sum_honey").val($(".modal-body select").val()*(price-4.5)+"  грн" + ", економія 135 грн");
		    			}
		    			else{
		    				$(".sum_honey").val("Знижка 5 грн на кожен кілограм меду");	
		    			}
		    		})
 			}

	    	switch(h_type){
	    		case "Мед Акацієвий":
		    		calc_h(75);
		    		break;
		    	case "Мед Липовий":
		    		calc_h(67);
					break;
		    	case "Мед Квітковий":
		    		calc_h(45);
		    		break;
		    	case "Мед Соняшниковий":
		    		calc_h(40);
		    		break;
		    	case "Мед Гречаний":
		    		calc_h(65);
		    		break;
	    	}
	    })
	});    