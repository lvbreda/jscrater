Meteor.autosubscribe(function(){
	Meteor.subscribe("showposts");
	Meteor.subscribe("users");
	Meteor.subscribe("comments");
});

Template.index.posts = function(){
	var item = Posts.find({},{sort:{date:-1}}).fetch();
	return item.slice(0,1);
}
Template.index.bottomposts = function(){
	var item = Posts.find({},{sort:{date:-1}}).fetch();
	return item.slice(1,4);
}