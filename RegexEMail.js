var regEmail=/(^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]+(\.[a-zA-Z0-9_-])?)/
do{
	var x=window.prompt("Enter Valid Email:")
	if (regEmail.test(x))
	{
		document.write("Valid Email..!")
		break
	}
	else
	{
		console.log("Enter Valid Email.....??")
	}
}while(x!=null)