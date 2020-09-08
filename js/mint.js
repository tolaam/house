$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $("#ror"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth <= 992){
      elem.removeClass('order-first');
    }
    else{
      elem.addClass('order-first');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

// $(window).resize(function(){

// 	if($(window).width() <= 992){
// 		$('#ror').removeClass('order-first');
// 		// $('#ror').removeClass('col-9');
// 		// $('#ror').addClass('col-4');

// 	}
// 	else{$('#ror').addClass('order-first');
// 		// $('#ror').addClass('col-9');
// 		// $('#ror').romeveClass('col-4');
// }});



$(window).resize(function(){

	if($(window).width() <= 992){
		$('#menu').removeClass('col-3');
		$('#menu').addClass('col-9');
	}
	else{$('#menu').removeClass('col-9');
		$('#menu').addClass('col-3');}
});


function skip() {
	var x = document.getElementById('srok_sdachi');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	}else {
		x.style.display = 'none';
	}
}



function skipp() {
	var x = document.getElementById('dvor');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	}else {
		x.style.display = 'none';
	}
}




function skit() {
	var x = document.getElementById('k_metro');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	}else {
		x.style.display = 'none';
	}
}

function add(newCard) {
	var elem = document.getElementById("card-deck");
	elem.style.display = newCard;
	(this).hide();
}

function more(moreCard) {
	var more = document.getElementById("more");
	more.style.display = moreCard;
}


$('#sbros_vsego').click(function() {
  $('input:checked').prop('checked', false);
});

