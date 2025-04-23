//your JS code here. If required.
const form = document.getElementById("userform");
function checkElegibility(age, name){
	return new Promise((resolve,reject)=>{
		if(age>18){
			setTimeout(()=>resolve(`Welcome, ${name}. You can vote.`),4000);
		}
		else if(age<18) setTimeout(()=>reject(`Oh sorry ${name}. You aren't old enough.`),4000);
	})
}
function validate(e){
	e.preventDefault();
	let name = document.getElementById("name").value.trim();
	let age = parseInt(document.getElementById("age").value.trim());
	if(name==="" || isNaN(age))
		alert("Please enter valid details");
	else checkElegibility(age,name).then((message)=>{
		alert(message);
	}).catch((message)=>{
		alert(message);
	});
}
form.addEventListener("submit",validate)