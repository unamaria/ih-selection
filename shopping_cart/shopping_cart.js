var Cart = function () {
	this.total = 0;
	this.items = [];
};

Cart.prototype.add = function (item) {
	this.applyDiscount(item);
	console.log('Adding ' + item.name + ' to the cart at a price of ' + item.price);
	this.items.push(item);
};

Cart.prototype.remove = function (itemName, amount) {
	if (typeof amount !== 'undefined') {
		for (var i = this.items.length - 1; i >= 0 && amount > 0; i--) {
			if (this.items[i].name === itemName) {
				this.items.splice(i, 1);
				amount--;
			}
		}
	} else {
		this.items = this.items.filter (function (item) {
			return item.name !== itemName;
		});
	}
};

Cart.prototype.applyDiscount = function (item) {
	if (item.name === 'orange') {
		var total_oranges = 0;
		this.items.forEach (function(item) {
			total_oranges += item.name === 'orange' ? 1 : 0;
		});

		if (total_oranges > 4) {
			item.price = item.price / 2;
		} 

	} else if (item.name === 'apple') {
		var apple = new Item('apple', 0);
		this.items.push(apple);
	}
};

Cart.prototype.calculateTotal = function () {
	this.items.forEach (function(item) {
		this.total += item.price;
	}.bind(this));
	if (this.items.length > 5) {
		this.total = this.total * 0.9;
	}
};

var Item = function (name, price) {
	this.name = name;
	this.price = price;
};



var cart = new Cart();

cart.add(new Item('banana', 20));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('orange', 5));
cart.add(new Item('apple', 10));

cart.calculateTotal();

console.log('Your total is ' + cart.total);
cart.remove('orange', 4);
