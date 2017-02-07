$(document).ready(function(){


	// Звроротній звязок (за допомогою Ajax-запросів)

	    $("#feedback_form").submit(function() {
	            var form_data = $("#feedback_form").serialize(); 
	            $.ajax({
		            type: "POST", 
		            url: "send_feedback.php", 
		            data: form_data
	            });
	            $("#feedback_form input:text").val('');
	        	$("#myModal").modal('hide');
	        	$("#small_modal").modal('show');
	        	return false
	    });

	    $("#product_form").submit(function() { 
	    		if ($(".main_procut").is(":visible")){
	    			if ($(".main_procut").val() ==0) {
	    				alert("Вкажіть будь ласка масу");
	    				return false;
	    			}
	    		}
	    		else if($(".to_other").is(":visible")){
	    			if ($(".to_other").val() ==0) {
	    				alert("Вкажіть будь ласка масу");
	    				return false;
	    			}
	    		}
	    		if ($(".to_other :first").hasClass("option_pos")) {
		    		$(".to_other :first").remove();
		    		$(".to_other :first").remove();
		    		$(".to_other :first").remove();
		    		$(".to_other").prepend( $('<option value="0">Виберіть масу продукту</option>'));
		    	}
	            var form_data = $("#product_form").serialize(); 
	            $.ajax({
		            type: "POST", 
		            url: "send_product.php", 
		            data: form_data
	            });
	            $("#product_form input:text").val('');
	        	$("#modal_sale").modal('hide');
	        	$("#small_modal").modal('show');
	        	return false
	    });

	    
	    $(".info_honey button").click(function(){
	    	var par = $(this).parent();
	    	var text = par.find(".hide_text");
	    	text.slideDown("normal");
	    	$(this).fadeOut(0);
	    })
	    $(".poison").click(function(){
	    	$(".to_other :first").remove();
			$(".to_other").prepend( $('<option value="5">5 г</option>'));
	    	$(".to_other").prepend( $('<option value="1">1 г</option>'));
	    	$(".to_other").prepend( $('<option class="option_pos" value="0">Виберіть масу продукту</option>'));
			$(".to_other :first").attr("selected", "selected");
	    })
	    $('.order').click(function(){
	    	var par = $(this).parent();
	    	// виводимо тиа товару в модальне вікно
	    	var h_type = par.find("h3").text();
	    	$(".product_type").val(h_type);
			// вивід різних select при різних товарах
			if ( par.hasClass("other_product") ){
				$(".main_procut").hide();
				$(".to_other").show();
			}
			else{
				$(".to_other").hide();
				$(".main_procut").show();
			}
 			function calc_h(price){
 				var type_honey = price;
	    			$(".sum_product").val("");
	    			$(".modal-body select").val(0);
		    		$(".modal-body select").change(function(){
		    			if($(".modal-body select").val() == 0){
		    				$(".sum_product").val(" ");
		    			}
		    			else if($(".modal-body select").val() >= 0.5 && $(".modal-body select").val() <= 3){
		    				$(".sum_product").val($(".modal-body select").val()*price+"  грн");
		    			}
		    			else if( $(".modal-body select").val() == 15){
		    				$(".sum_product").val($(".modal-body select").val()*(price-2)+"  грн" + ", економія 30 грн");
		    			}
		    			else if( $(".modal-body select").val() == 30){
		    				$(".sum_product").val($(".modal-body select").val()*(price-4.5)+"  грн" + ", економія 135 грн");
		    			}
		    			else{
		    				$(".sum_product").val("Знижка 5 грн на кожен кілограм меду");	
		    			}
		    		})
 			}
 			function calc_w(price){
 					$(".modal-body select").val(0);
	    			$(".sum_product").val("");
		    		$(".modal-body select").change(function(){
		    			if($(".modal-body select").val() == 0){
		    				$(".sum_product").val(" ");
		    			}
		    			else if($(".modal-body select").val() >= 0.5 && $(".modal-body select").val() <= 3){
		    				$(".sum_product").val($(".modal-body select").val()*price+"  грн");
		    			}
		    			else if( $(".modal-body select").val() == 15){
		    				$(".sum_product").val($(".modal-body select").val()*(price-2)+"  грн" + ", економія 30 грн");
		    			}
		    			else if( $(".modal-body select").val() == 30){
		    				$(".sum_product").val($(".modal-body select").val()*(price-4.5)+"  грн" + ", економія 135 грн");
		    			}
		    			else{
		    				$(".sum_product").val("Знижка 5 грн на кожен кілограм воску");	
		    			}
		    		})
 			}
 			function calc_o(price){
	    			$(".sum_product").val("");
	    			$(".modal-body .to_other").val(0);
		    		$(".modal-body .to_other").change(function(){
		    			if($(".modal-body .to_other").val() == 0){
		    				$(".sum_product").val(" ");
		    			}
		    			else if($(".modal-body .to_other").val() >= 1 && $(".modal-body .to_other").val() <= 1000){
		    				$(".sum_product").val($(".modal-body .to_other").val()*(price/10)+"  грн");
		    			}
		    			else if( $(".modal-body .to_other").val() == 3000){
		    				$(".sum_product").val($(".modal-body .to_other").val()*((price-0.1)/10)+"  грн" + ", економія 30 грн");
		    			}
		    			else if( $(".modal-body .to_other").val() == 5000){
		    				$(".sum_product").val($(".modal-body .to_other").val()*((price-0.2)/10)+"  грн" + ", економія 100 грн");
		    			}
		    			else if( $(".modal-body .to_other").val() == 10000){
		    				$(".sum_product").val($(".modal-body .to_other").val()*((price-0.25)/10)+"  грн" + ", економія 250 грн");
		    			}
		    			else{
		    				$(".sum_product").val("Знижка 30 грн за кожен кілограм");	
		    			}
		    		})
 			}
 			function calc_dol(price){
 				$(".sum_product").val("");
	    			$(".modal-body .to_other").val(0);
		    		$(".modal-body .to_other").change(function(){

		    			if($(".modal-body .to_other").val() >= 1 && $(".modal-body .to_other").val() <= 1000){
		    				$(".sum_product").val($(".modal-body .to_other").val()*(price/10)+"  $");
		    			}
		    			else if( $(".modal-body .to_other").val() == 3000){
		    				$(".sum_product").val("239970  $ + , економія 30 $");
		    			}
		    			else if( $(".modal-body .to_other").val() == 5000){
		    				$(".sum_product").val("399900  $, економія 100 $");
		    			}
		    			else if( $(".modal-body .to_other").val() == 10000){
		    				$(".sum_product").val($(".modal-body .to_other").val()*((price-0.25)/10)+"  $" + ", економія 250 $");
		    			}
		    			else{
		    				$(".sum_product").val("Знижка 30 $ за кожен кілограм");	
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


		    	case "Віск-Капанець":
		    		calc_w(300);
		    		break;
		    	case "Збірний пасечний віск":
		    		calc_w(200);
		    		break;
		    	case "Збірний віск":
		    		calc_w(200);
		    		break;
		    	case "Пресовий віск":
		    		calc_w(130);
		    		break;
		    	case "Вощина":
		    		calc_w(145);
		    		break;


		    	case "Прополіс":
		    		calc_o(15);
		    		break;
		    	case "Пилок":
		    		calc_o(2.5);
		    		break;
		    	case "Перга":
		    		calc_o(15);
		    		break;
		    	case "Підмор":
		    		calc_o(20);
		    		break;
		    	case "Маточне молочко":
		    		calc_o(260);
		    		break;
		    		
		    	case "Бджолина отрута":
		    		calc_dol(800);
		    		break;
	    	}
	    })
	});    