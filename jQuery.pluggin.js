 jQuery.fn.display=function(){
 	return this.each(function(){
 		window.alert("Content of Elements:"+$(this).text())
 	})
 }