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

	// вывод количества item'ов в корзине
	alert('Items in your cart: ' + cart_get_number_of_items());
}

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // get key
		var value = window.localStorage.getItem(key); // get value, in Ruby is hh['key'] = x

		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1; // увеличиваем на единицу
		}
	}

	return cnt;
}