function something()
{
	
	x = window.localStorage.getItem('bbb'); // x = hh['bbb'], string type

	x = x * 1 + 1; // x = x + 1, * 1 - simple method to do type string into type integer
	
	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{
	alert('You added pizza with id: ' + id);
}