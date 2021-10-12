
			function zen_open() {

			document.getElementById("zen_city").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

			document.getElementById("zen_open").setAttribute("style", "display: none");
			document.getElementById("mejdy_open").setAttribute("style", "display: block");
			document.getElementById("slavin_open").setAttribute("style", "display: block");
			
			
			document.getElementById("mejdy").setAttribute("style", "display: none");
			document.getElementById("slavin").setAttribute("style", "display: none");

			document.getElementById("zen_close").setAttribute("style", "display: block");
			document.getElementById("mejdy_close").setAttribute("style", "display: none");
			document.getElementById("slavin_close").setAttribute("style", "display: none");

			document.getElementById("zen_close2").setAttribute("style", "display: block");
			document.getElementById("mejdy_close2").setAttribute("style", "display: none");
			document.getElementById("slavin_close2").setAttribute("style", "display: none");

			}

			function zen_close() {

			document.getElementById("zen_city").setAttribute("style", "display: none");

			document.getElementById("zen_close").setAttribute("style", "display: none");
			document.getElementById("zen_close2").setAttribute("style", "display: none");

			document.getElementById("zen_open").setAttribute("style", "display: block");
			
			

			document.getElementById("mejdy_close").setAttribute("style", "display: none");
			document.getElementById("mejdy_close2").setAttribute("style", "display: none");

			document.getElementById("mejdy_open").setAttribute("style", "display: block");
			

			document.getElementById("slavin_close2").setAttribute("style", "display: none");
			document.getElementById("slavin_close").setAttribute("style", "display: none");

			document.getElementById("slavin_open").setAttribute("style", "display: block");

			}
			function mejdy_open() {

			document.getElementById("mejdy").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

			document.getElementById("mejdy_open").setAttribute("style", "display: none");			
			document.getElementById("zen_open").setAttribute("style", "display: block");;
			document.getElementById("slavin_open").setAttribute("style", "display: block");
			
			document.getElementById("zen_city").setAttribute("style", "display: none");
			document.getElementById("slavin").setAttribute("style", "display: none");

			document.getElementById("mejdy_close").setAttribute("style", "display: block");
			document.getElementById("zen_close").setAttribute("style", "display: none");
			document.getElementById("slavin_close").setAttribute("style", "display: none");

			document.getElementById("mejdy_close2").setAttribute("style", "display: block");
			document.getElementById("zen_close2").setAttribute("style", "display: none");
			document.getElementById("slavin_close2").setAttribute("style", "display: none");

			}


			function mejdy_close() {

			document.getElementById("mejdy").setAttribute("style", "display: none");

			document.getElementById("mejdy_close").setAttribute("style", "display: none");
			document.getElementById("mejdy_close2").setAttribute("style", "display: none");

			document.getElementById("mejdy_open").setAttribute("style", "display: block");
			
			

			document.getElementById("zen_close").setAttribute("style", "display: none");
			document.getElementById("zen_close2").setAttribute("style", "display: none");

			document.getElementById("zen_open").setAttribute("style", "display: block");

			document.getElementById("slavin_close").setAttribute("style", "display: none");
			document.getElementById("slavin_close2").setAttribute("style", "display: none");

			document.getElementById("slavin_open").setAttribute("style", "display: block");

			}
			
			function slavin_open() {

			document.getElementById("slavin").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

			document.getElementById("slavin_open").setAttribute("style", "display: none");			
			document.getElementById("mejdy_open").setAttribute("style", "display: block");			
			document.getElementById("zen_open").setAttribute("style", "display: block");;
			
			
			document.getElementById("zen_city").setAttribute("style", "display: none");
			document.getElementById("mejdy").setAttribute("style", "display: none");

			document.getElementById("slavin_close").setAttribute("style", "display: block");
			document.getElementById("mejdy_close").setAttribute("style", "display: none");
			document.getElementById("zen_close").setAttribute("style", "display: none");

			document.getElementById("slavin_close2").setAttribute("style", "display: block");
			document.getElementById("mejdy_close2").setAttribute("style", "display: none");
			document.getElementById("zen_close2").setAttribute("style", "display: none");

			}


			function slavin_close() {

			document.getElementById("slavin").setAttribute("style", "display: none");

			document.getElementById("slavin_close").setAttribute("style", "display: none");
			document.getElementById("slavin_close2").setAttribute("style", "display: none");

			document.getElementById("slavin_open").setAttribute("style", "display: block");
			

			document.getElementById("zen_close").setAttribute("style", "display: none");
			document.getElementById("zen_close2").setAttribute("style", "display: none");

			document.getElementById("zen_open").setAttribute("style", "display: block");

			document.getElementById("mejdy_close").setAttribute("style", "display: none");
			document.getElementById("mejdy_close2").setAttribute("style", "display: none");

			document.getElementById("mejdy_open").setAttribute("style", "display: block");

			}
			$(function(){

			$('#zen_open').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#zen_city').offset().top }, 1500);
			e.preventDefault();
			});

			});
			$(function(){

			$('#mejdy_open').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#mejdy').offset().top }, 1500);
			e.preventDefault();
			});

			});
			$(function(){

			$('#slavin_open').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#slavin').offset().top }, 1500);
			e.preventDefault();
			});

			});
			$(function(){

			$('#zen_close').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#project').offset().top }, 1500);
			e.preventDefault();
			});

			});
			$(function(){

			$('#mejdy_close').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#project').offset().top }, 1500);
			e.preventDefault();
			});

			});
			$(function(){

			$('#slavin_close').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('#project').offset().top }, 1500);
			e.preventDefault();
			});

			});