var rnum=Math.floor(Math.random()*(100-10)+10)
var l=window.alert("Enter any number:")
var c=0
do{
	l=window.prompt("Enter any number between 10 to 100:")
	if (rnum==l)
	{
		console.log("You are lucky")
		c=c+1
	}
	else
	{
		console.log("You are not lucky")
	}
}while(l!=null)
document.write("You've been lucky for "+c+" times")

