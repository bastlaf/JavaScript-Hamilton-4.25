/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        // your code here
        let red = document.getElementById("red");
        let green = document.getElementById("green");
        let yellow = document.getElementById("yellow");
        let blue = document.getElementById("blue");
    
    
        red.addEventListener ("click", function () {
            document.body.style.background='#ff0000';
        })
    
        green.addEventListener ("click", function () {
            document.body.style.background='#00ff00';
        })
    
        yellow.addEventListener ("click", function () {
            document.body.style.background='#ffff00';
        })
    
        blue.addEventListener ("click", function () {
            document.body.style.background='#0000ff';
        })
    
    
    // your code here

})();
