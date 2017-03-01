require.config({
	paths:{
		app:'app'
	},
	shim:{

	}

});

require(['app'],function(app){
	app.hello();
})