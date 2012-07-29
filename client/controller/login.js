Template.login.events={
	"click #login" : function(){
		Meteor.loginWithPassword($("#log").val(), $("#pwd").val(),function(error){
			if(!error){
				window.location.href = "/admin#posts";
			}else{
				Session.set("error",error);
			}
		});
	}
}
Template.login.error  = function(){
	if(Session.get("error")){
		return Session.get("error").reason;
	}else{
		return "";
	}
	
}
