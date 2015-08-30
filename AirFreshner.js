$(document).ready(function(){
 $("input.search_btn").click(function(){
   var username=$('#username').val();
   var password=$('#password').val();
   $.ajax({
						type: 'GET',
						url: 'http://airfresh.site50.net/index.php',
						dataType:"jsonp",
						jsonp: 'callback',
        				jsonpCallback: 'checkdata',
						data: {user_name:username,
						password:password,
						operation:'login'
                     	},
						success: function(response){
							 console.log(response);
							 window.location.href = '/welcomeUser.html';

						},
						error:function(response){
							alert("error");
							console.log(response);
						}
										
           }); 	

  

 });

 $("input.reg_btn").click(function(){
   //  var username=$('#userid').val();
   //  var password=$('#pswd').val();
   //  var user_address=$('#home_address').val();
   // $.ajax({
			// 			type: 'POST',
			// 			url: 'http://airfresh.site50.net/index.php',
			// 			dataType:"jsonp",
			// 			jsonp: 'callback',
   //      				jsonpCallback: 'checkdata',
			// 			data: {user_name:username,
			// 			password:password,
			// 			operation:'insert'
   //                   	},
			// 			success: function(response){
			// 				 console.log(response);
			// 				 window.location.href = '/index.html';

			// 			},
			// 			error:function(response){
			// 				alert("error");
			// 				console.log(response);
			// 			}
										
   //         }); 	

	window.location.href = 'index.html';
 });


});
