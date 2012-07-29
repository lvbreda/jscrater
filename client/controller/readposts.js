Template.readpost.posts = function(){
	var item = Posts.find({_id:Session.get("params1")},{sort:{date:-1}}).fetch();
	return item.slice(0,1);
}
