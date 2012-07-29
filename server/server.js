Posts = new Meteor.Collection("posts");
Comments = new Meteor.Collection("comments");
Meteor.publish("showposts",function(){
	return Posts.find({});
});
Meteor.publish("comments",function(){
	return Comments.find({});
});
Meteor.publish("users",function(){
	if(Meteor.users.find({_id:this.userId(),admin:1}).count()>0){
			return Meteor.users.find({});
		}
});
/**Meteor.users.allow({insert:function(userId,doc){
	if(Meteor.users.find({_id:userId,admin:1}).count()>0){
		return true;
	}else{
		return false;
	}
}});**/
/**Meteor.accounts.validateNewUser(function(propUser){
	/**if(Meteor.users.find({_id:this.userId(),admin:1}).count()>0){
			return true;
		}else{
			return false;
		}**/
/**});**/
Meteor.methods({
	"checklogin" : function(){
		if(Meteor.users.find({_id:this.userId(),admin:1}).count()>0){
			return true;
		}else{
			return false;
		}
	}
});
Posts.allow({
	insert : function(userId, doc){
		if(Meteor.users.find({_id:userId,admin:1}).count()>0){
			return true;
		}else{
			return false;
		}
	},
	update: function(userId, docs, fields, modifier){
		if(Meteor.users.find({_id:userId,admin:1}).count()>0){
			return true;
		}else{
			return false;
		}
	},
	remove:function(userId, docs){
		if(Meteor.users.find({_id:userId,admin:1}).count()>0){
			return true;
		}else{
			return false;
		}
	}
});
Comments.allow({
	insert : function(userId, doc){
		return true;
	},
	update: function(userId, docs, fields, modifier){
		return false;
	},
	remove:function(userId, docs){
		return false;
	}
});
Meteor.users.allow({
	insert : function(userId, doc){
		if(Meteor.users.find({_id:userId,admin:1}).count()>0 || Meteor.users.find({}).count() == 0){
			return true;
		}else{
			return false;
		}
	},
	update: function(userId, docs, fields, modifier){
		if(Meteor.users.find({_id:userId,admin:1}).count()>0){
			return true;
		}else{
			return false;
		}
	},
	remove:function(userId, docs){
		if(Meteor.users.find({_id:userId,admin:1}).count()>0){
			return true;
		}else{
			return false;
		}
	}
});
Meteor.startup(function(){
	console.log(Meteor._partials);
});
