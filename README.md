# jQuery.mousetip
Lightweight jQuery extension for creating cursor tooltips that follow mouse movement and position.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.mousetip.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.mousetip.js"></script>
```
## How to Use
Create an element with a class name `tip` and call the `mousetip()` method on the parent of said element. Modify the `x` and `y` parameters to change the tip position relative to the mouse cursor.
See the live demo: [code.nath.co/mousetip](http://code.nath.co/mousetip)

**HTML**
```html
<div>Content<span class="tip">Mousetip 1</span></div>
<div>Content<span class="tip">Mousetip 2</span></div>
<div>Content<span class="tip">Mousetip 3</span></div>
```

**jQuery**
```javascript
$(function() {

    // Default
    $('div').mousetip('.tip');

    // Custom Position
    $('div').mousetip('.tip', 20, 30);

});
```

**CSS**
```css
span.tip {

    /* Required */
    position: fixed;
    z-index: 2;
    display: none;

    /* Optional */
    font-size: 15px;
    max-width: 150px;
    height: auto;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 1px 2px #666;
    background: #FD0;
}
```

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [code@nath.co](mailto:code@nath.co) or find me on GitHub [@nathco](https://github.com/nathco).
