window.onload = function(){
var text = document.getElementById('country');
var lookup = document.getElementById('lookup');
var result = document.getElementById('result');

lookup.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('Get', 'world.php?country=' + text.value);
    xhr.onload = function(){
	    if (xhr.status === 200){
	        alert( xhr.responseText);
		    result.innerHTML = xhr.responseText;
		    
		    }
		else{
			alert('Request failed.' + xhr.status);
			}
	    };
    xhr.send();
});
};