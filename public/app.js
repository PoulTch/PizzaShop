function something()
{
	
	x = window.localStorage.getItem('bbb'); // x = hh['bbb'], string type

	x = x * 1 + 1; // x = x + 1, * 1 - simple method to do type string into type integer
	
	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x*1 + 1;
	window.localStorage.setItem(key, x);
}