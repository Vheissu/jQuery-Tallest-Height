jQuery-Tallest-Height
=====================

A simple jQuery plugin for normalising heights of one or more elements. No gimmicks, just a few lines of code to set the height of elements based on the largest height of similar elements.

## Simple Usage
Here is a theoretical example (your use case might differ) but it shows how simple the plugin is and how it is used. It's not required, but recommended that you wrap your code in a $(window).load so that the correct height is calculated (especially in instances where images are inside of your items).

$(window).load(function() {
	var $products = $("#products .product");

	if ($products.length) {
	    var biggest = $("#products .product").tallestHeight();
	        $products.height(biggest);
	}
});

As you can see, you first get the height and then can set the height of all those item elements using the return value. The reason the plugin does not set the heights is because sometimes you want to know the height value for mathematical calculations.

## Getting the plugin to work with window resizing
Setting the heights is all well and good, but if you're resizing your browser window and your site is responsive (and it should be!) then the heights won't change and be really big. There is a simple way to use this plugin with the window resize event. See below for some code.

$(window).load(function() {
	// Call the plugin on page load
	resizeProducts();
}

$(window).on("resize", function() {
	
	// Call our resize products function
	resizeProducts();

});

function resizeProducts() {
	var $products = $("#products .product");

	if ($products.length) {
	    var biggest = $("#products .product").tallestHeight();
	        $products.height(biggest);
	}
}

You can see we are still using the same code from the simple example above, however we've put it into a function so we can call it a whole lot easier when the window is resized and when the page is first loaded. You could go one step further and modify the function to take an element as an argument and change things that way, but this is merely a simple example.