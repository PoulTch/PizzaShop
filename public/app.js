//function something()
//{
	
//	x = window.localStorage.getItem('bbb'); // x = hh['bbb'], string type

//	x = x * 1 + 1; // x = x + 1, * 1 - simple method to do type string into type integer
	
//	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

//	alert(x);
//}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x*1 + 1;
	window.localStorage.setItem(key, x);

	update_orders_input();
	update_orders_button();
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button()
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
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

function cart_get_orders()
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // get key
		var value = window.localStorage.getItem(key); // get value, in Ruby is hh['key'] = x

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}

	return orders;
}

function cancel_order()
{
	window.localStorage.clear();

	update_orders_input();
	update_orders_button();

	$('#cart').text('Your cart is now empty');

	return false;
}