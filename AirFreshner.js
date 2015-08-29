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
							 alert("success");
							 //window.location.href = '/welcomeUser.html';

						},
						error:function(response){
							alert("error");
							console.log(response);
						}
										
           }); 	

  

 });


});
