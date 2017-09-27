var modal = document.getElementById('mymodal');
var modal1 = document.getElementById('mymodal1');

var mybtn = document.getElementById('mybtn');
var mybtn1 = document.getElementById('mybtn1');

var span = document.querySelector('.close');
var span1 = document.querySelector('.close1');
var form = document.getElementById('form');


mybtn1.addEventListener('click',function () {
	modal1.style.display = 'block'
	// body...
});

mybtn.addEventListener('click',function () {
	modal.style.display = 'block'
	// body...
});


span1.addEventListener('click',function(){
	modal1.style.display = "none";
	form.reset();

});

span.addEventListener('click',function(){
	modal.style.display = "none";
	form.reset();

});

window.addEventListener('click',function(event){
	if(event.target === modal1){
		modal1.style.display = 'none';
		form.reset();
	}


})

window.addEventListener('click',function(event){
	if(event.target === modal){
		modal.style.display = 'none';
		form.reset();
	}


})
