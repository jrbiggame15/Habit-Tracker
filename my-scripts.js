//checks to see if days tag exist
if(localStorage.getItem("days") == null){

//put days into local memory
localStorage.setItem("days", 25)

//sets 


}

function update(){

	document.getElementById("count").innerHTML = localStorage.getItem("days");

}

update()

function reset(){

if(confirm("are you sure?")){
localStorage.setItem("days",25)
update()
}
}

function plusOne(){

	localStorage.setItem("days", Number(localStorage.getItem("days")) - 1)
	update()

}