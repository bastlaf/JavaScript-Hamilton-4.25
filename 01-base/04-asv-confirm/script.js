/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
 while (true) {
    let age = prompt("Quel est votre age ?");
    let genre = prompt("Quel est votre genre ?");
    let ville = prompt("Quel est votre ville ?");
    
    alert ("so, you are " + age + ", you're a " + genre + ", and you live at" + ville);
    let confirm = prompt("données correctes ?");
    if (confirm === "yes") {
        break;
    };}
})();
