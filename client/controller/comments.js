Template.comments.comments = function(){
	return Comments.find({post : Session.get("params1")});
}
Template.comments.events={
	'click #submit' : function(e){
		e.preventDefault();
		Comments.insert({user:$("#username").val(),content:$("#comment").val(),post:Session.get("params1")});
	}
}
