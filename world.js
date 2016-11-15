window.onload = function(){

var lookup = document.getElementById('lookup');
var result = document.getElementById('result');
var check = document.getElementById('checkbox');
var $all = '';
var text = document.getElementById('country');




lookup.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    if(check.checked || text.value !== ''){
        if(check.checked){
    	$all =  check.value;
    }
    else{
    	$all = "";
    }

    xhr.open('Get', 'world.php?country=' + text.value + '&all=' + $all);
    xhr.onload = function(){
	    if (xhr.status === 200){
	        //alert( xhr.responseText);
		    result.innerHTML = xhr.responseText;
		    
		    }
		else{
			alert('Request failed.' + xhr.status);
			}
	    };
    xhr.send();
    }else{
alert("Select an option!!!");
    
}});
};