$(function() {
	// alert("DOM is ready to manipulate");
	//Exercise 2
	// $('#secretBox').css('background-color','white').append('<h1>Secret Box!</h1>'); //instead of append can also use .html
	// $('#row1 div').removeClass().addClass('box boxType3');
	// $('#row4 div:last').hide();
	// $('.boxType1').css('background-color','white');
	// // $('#row2 div').eq(0).removeClass();
	// // $('#row2 div').eq(1).removeClass();
	// $('#row2 div').slice(0,2).removeClass();
	// $('.box').not('#secretBox').css('width','2px');

	//Exercise 3
	$('#container').click(function(e) {
		console.log(e.pageX,e.pageY);
	});
	$('.boxType1').append('<a href="http://www.galvanize.com">Click for Galvanize</a>');
	$('a').click(function(){
		alert("You can never leave the page");
		$('a').attr('href','');
	});
	$('.box').append('<img src="data:image/jpeg;base64,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">');
	$('.box img').hide();
	$('.box').click(function(){
		$(this).find('img').toggle();
	});
	$('#container').click(function(e){
		console.log(e);
		$('#container').css('background-color','black');
		$(e.target).css('background-color','white');
		if(e.target === this)
			$(this).css('background-color',"green");
		// $('container').css('background-color','black');
		// $(this).
	});
});

console.log("hello world");


