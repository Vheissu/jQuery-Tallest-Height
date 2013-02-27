/*!
 * Tallest Height - A function for normalising heights of elements
 *
 * Version:  1.0
 * Released: 28-02-2013
 * Source:   http://github.com/Vheissu/jQuery-Tallest-Height
 * Plugin:   tallestHheight
 * Author:   Dwayne Charrington (dwaynecharrington@gmail.com)
 * License:  MIT Licence 
 *           http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright (c) 2013 Dwayne Charrington.
 *
 * Simple usage:
 *
 * var $products = $("#products .product");
 *
 * if ($products.length) {
 *     var biggest = $("#products .product").tallestHeight();
 *     $products.height(biggest);
 * }
 *
 */
;(function ($, undefined) {

    $.fn.tallestHeight = function() {

        var tallestHeight = 0;

        $(this).each(function() {

            var $this = $(this);

            // Normalise the height so our calculation works in instances
            // where we're calling this code on events that have already
            // had their heights calculated.
            $this.css('height', 'auto');

            if ($this.height() > tallestHeight) {
                tallestHeight = $this.height();  
            }
        });

        return tallestHeight;

    };

})( jQuery );