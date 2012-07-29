var hashRoot = function($container,page){
	Session.set("params","");
	if(window.location.pathname == page && window.location.hash!=""){
	  var frag = Meteor.ui.render(function () {
                        if(Template[window.location.hash.split("/")[0]]){
                        	Session.set("params",window.location.hash.split("/")[1]);
                            return Template[window.location.hash.split("/")[0]]();
                        }
                      return "";
       });
       $container.innerHTML = "";
       $container.appendChild(frag);
       if(!Meteor.user()){
       	Session.set("error",{reason : "Not allowed"});
       	window.location.href='/login';
       	
       }
    }
}
Meteor.startup(function(){
    if(Meteor.is_client){
                var router = Backbone.Router.extend({
                  routes: {
                  	"":"main",
                    ":page" : "main",
                    ":page/*params": "main"
                  },
                  main: function () {
                  	console.log("hi");
                  	if(!page){
                  		page = "index";
                  	}
                  	console.log(page);
                  	Session.set("page",page);
                    document.body.innerHTML = "";
                    var frag = Meteor.ui.render(function () {
                        if(Template[page]){
                            return Template[page]();
                        }
                      return "";
                    });
                    document.body.appendChild(frag);
                    	page = Session.get('page');
				    	if(page=="/admin" || page =="admin"){
				    		Meteor.call("checklogin",function(error,result){
				    			if(!result){
				    				Session.set("error",{reason : "Not allowed"});
				    				window.location.href='/login';
				    				
				    			}
				    		});
				    	}
                  },
                  main: function (page) {
                  	if(!page){
                  		page = "index";
                  	}
                  	console.log(page);
                  	Session.set("page",page);
                    document.body.innerHTML = "";
                    var frag = Meteor.ui.render(function () {
                        if(Template[page]){
                            return Template[page]();
                        }
                      return "";
                    });
                    document.body.appendChild(frag);
                    	page = Session.get('page');
				    	if(page=="/admin" || page =="admin"){
				    		Meteor.call("checklogin",function(error,result){
				    			if(!result){
				    				Session.set("error",{reason : "Not allowed"});
				    				window.location.href='/login';
				    				
				    			}
				    		});
				    	}
                  },
                    main: function (page,params) {
                    	if(!page){
                  		page = "index";
                  	}
                    		console.log(page);
                    Session.set("page",page);
                    Session.set('params1',params);
                   
                    document.body.innerHTML = "";
                    var frag = Meteor.ui.render(function () {
                        if(Template[page]){
                            return Template[page]();
                        }
                      return "";
                    });
                    document.body.appendChild(frag);
                    	page = Session.get('page');
				    	if(page=="/admin" || page =="admin"){
				    		Meteor.call("checklogin",function(error,result){
				    			if(!result){
				    				Session.set("error",{reason : "Not allowed"});
				    				window.location.href='/login';
				    				
				    			}
				    		});
				    	}
                  }
                });
                Router = new router;
                Meteor.startup(function () {
                  Backbone.history.start({pushState: true});
                });
                window.onhashchange = function () {
               	 hashRoot(document.getElementById('subContainer'),window.location.pathname);
               	}
               	hashRoot(document.getElementById('subContainer'),window.location.pathname);
               	
    }
    function redirect(){
    
    }
});