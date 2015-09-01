var isEnable=false;

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
							 alert("Login Success");
							 var user_data={
							 	username:username,
							 	password:password
							 };
							 localStorage.setItem('user_details', JSON.stringify(user_data));
							 window.location.href = 'welcomeUser.html';

						},
						error:function(response){
							alert("error");
							console.log(response);
						}
										
           }); 	

  

 });

 $("input.reg_btn").click(function(){
    var username=$('#userid').val();
    var password=$('#pswd').val();
    var user_address=$('#home_address').val();
   $.ajax({
						type: 'GET',
						url: 'http://airfresh.site50.net/index.php',
						dataType:"jsonp",
						jsonp: 'callback',
        				jsonpCallback: 'checkdata',
						data: {user_name:username,
						password:password,
						home_address:user_address,
						operation:'insert'
                     	},
						success: function(response){
							 console.log(response);
							 alert("You are Resgistered Sucessfully, please login and activate the system");
							 window.location.href = 'index.html';

						},
						error:function(response){
							alert("error");
							console.log(response);
						}
										
           }); 	

	
 });

$(".start_btn").click(function(){
	 	
	 if(!isEnable){
	 	$(".start_btn").attr('src',"stop.png");
	 	$(".start_lbl").html("Click on Stop to De-activate");
	     isEnable=true;
	 }
	 else
	 {
	 	$(".start_btn").attr('src',"start.jpg");
	 	$(".start_lbl").html("Click on Start to Activate");
	     isEnable=false;
	 }

	 var userData=JSON.parse(localStorage.getItem('user_details'));
	  $.ajax({
						type: 'GET',
						url: 'http://airfresh.site50.net/index.php',
						dataType:"jsonp",
						jsonp: 'callback',
        				jsonpCallback: 'checkdata',
						data: {user_name:userData.username,
						password:userData.password,
						activate:"yes",
						operation:'update'
                     	},
						success: function(response){
							 console.log(response);
							 alert("Your airfreshner is activated");
						},
						error:function(response){
							alert("error");
							console.log(response);
						}
										
           }); 	  
 	
 });
});
