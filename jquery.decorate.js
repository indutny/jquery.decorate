(function($){
	$.decorate = function ( func ){
		var args = Array.prototype.slice.call(arguments,1);
		return function(){
			func.apply(
				this,
				args.concat.apply(args,arguments)
			)
		}
	}
})(jQuery);//jQuery.decorate plugin v.0.1;Copyright 2010, Fedor Indutny;Released under MIT license