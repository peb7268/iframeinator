//Since we now have to use twitter's retarded embedded timeline you can inject stuff into the iframe to get around styling issues
		function injectIntoIframe(){
			var loaded = $('body').data('twttr-rendered');
			if(loaded){
				var frameBody 	= frames[0];
				var cssLink 	= document.createElement("link");
				var fontLink 	= document.createElement("link");
				var tImg 		= $(frameBody.document.body).find('.u-photo');
				var iFrame 		= $('#twitter-widget-0');
				$(iFrame).addClass('fw');

				//Load custom styles
				//cssLink.href 	= "http://imperativedesign.net/wp-content/themes/Zeus/styles/twitter.css"; 
				cssLink .rel 	= "stylesheet"; 
				cssLink .type 	= "text/css"; 

				//Load custom fonts
				fontLink.href 	= 'http://fonts.googleapis.com/css?family=Open+Sans+Condensed%3A300&amp;ver=3.3.1';
				fontLink.rel 	= "stylesheet"; 
				fontLink.type 	= "text/css";

				$('#twitter-widget-0').removeAttr('style');
				$('#twitter-widget-0').removeAttr('height');
				$('#twitter-widget-0').removeAttr('width');
				$('#twitter-widget-0').css({
					'width' : '100%'
				});
				frameBody.document.body.appendChild(fontLink);
				frameBody.document.body.appendChild(cssLink);
				
				function shouldShowTweet(){
					var toShow = $(tImg).is(':hidden');
					console.log(toShow);
					if(toShow == true) {
						window.clearInterval(timerId2);
						$(iFrame).show();
					}
					return toShow;
				}
				
				window.timerId2 = window.setInterval(shouldShowTweet, 100);
				window.clearInterval(timerId);
			}

		}
		window.timerId = window.setInterval(injectIntoIframe, 500);
		