Template["#posts"].posts = function(){
	return Posts.find({},{sort: {date: -1}});
}
Template["#posts"].events = {
	"click .delete" : function(){
		Posts.remove({_id:this._id});
	}
}
Template["#post"].param = function(){
	return Session.get("params");
}
Template["#post"].post = function(){
	if(Posts.findOne({_id:Session.get("params")})){
		return Posts.findOne({_id:Session.get("params")});
	}else{
		return {};
	}
	
}
Template["#post"].events = {
	"click #submit" : function(e){
		e.preventDefault();
		var i  = Meteor.users.findOne({_id : window.userId});
		console.log(i);
		if(Session.get("params")){
			console.log("update");
			Posts.update(Session.get("params"), {$set: {title: $("#title").val(),content: $("#content").val(),description: $("#description").val()}});
		}else{
			console.log("insert");
			Posts.insert({title: $("#title").val(),content: $("#content").val(),description: $("#description").val(), date : new Date(), authorfirstname : i.firstname,authorlastname : i.lastname});
		}
	}
}