$(document).ready(function()
{


		if($('.best_seller_slider').length)
		{
		var viewedSlider = $('.best_seller_slider');

		viewedSlider.owlCarousel(
		{
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:6000,
		nav:false,
		dots:false,
		responsive:
		{
		0:{items:1},
		575:{items:2},
		768:{items:3},
		991:{items:4},
		1199:{items:6}
		}
		});

		if($('.best_seller_prev').length)
		{
		var prev = $('.best_seller_prev');
		prev.on('click', function()
		{
		viewedSlider.trigger('prev.owl.carousel');
		});
		}

		if($('.best_seller_next').length)
		{
		var next = $('.best_seller_next');
		next.on('click', function()
		{
		viewedSlider.trigger('next.owl.carousel');
		});
		}
		}



		$(window).scroll(function() 
		{
		 if ($(this).scrollTop() > 1)
		 {
		  $('header').addClass("sticky_header");
		 }
		 else
		 {
		  $('header').removeClass("sticky_header");
		 }
		});


		// ----- On render -----
		$(function() {

		  $('#profile').addClass('dragging').removeClass('dragging');
		});

		$('#profile').on('dragover', function() {
		  $('#profile').addClass('dragging')
		}).on('dragleave', function() {
		  $('#profile').removeClass('dragging')
		}).on('drop', function(e) {
		  $('#profile').removeClass('dragging hasImage');

		  if (e.originalEvent) {
		    var file = e.originalEvent.dataTransfer.files[0];
		    console.log(file);

		    var reader = new FileReader();

		    //attach event handlers here...

		    reader.readAsDataURL(file);
		    reader.onload = function(e) {
		      console.log(reader.result);
		      $('#profile').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');

		    }

		  }
		})
		$('#profile').on('click', function(e) {
		  console.log('clicked')
		  $('#mediaFile').click();
		});
		window.addEventListener("dragover", function(e) {
		  e = e || event;
		  e.preventDefault();
		}, false);
		window.addEventListener("drop", function(e) {
		  e = e || event;
		  e.preventDefault();
		}, false);
		$('#mediaFile').change(function(e) {

		  var input = e.target;
		  if (input.files && input.files[0]) {
		    var file = input.files[0];

		    var reader = new FileReader();

		    reader.readAsDataURL(file);
		    reader.onload = function(e) {
		      console.log(reader.result);
		      $('#profile').css('background-image', 'url(' + reader.result + ')').addClass('hasImage');
		    }
		  }
		})




});