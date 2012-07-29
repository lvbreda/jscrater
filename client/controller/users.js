Template["#users"].users = function(){
	console.log(Meteor.users.find({}));
	return Meteor.users.find({});
}
Template["#users"].events = {
  'mousedown #newUser': function (evt) { // select list
    window.location.href="/admin#newuser";
  },
  'click .delete' : function(){
  	console.log(this._id);
  	Meteor.users.remove({_id : this._id});
  }
};
Template["#newuser"].events= {
  'click #submit': function (evt) {
  	evt.preventDefault(); // select list

    Meteor.createUser({username:$("#username").val(),email:$("#email").val(),password:$("#password").val()},{admin:1,firstname:$("#firstname").val(),lastname:$("#lastname").val()});
  },
  
}
