/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();

    if (hours > 17 || (hours ==17 && min > 30)) {
        document.getElementById("target").innerText = "Good evening"; //innerText permet plus de sécurité que innerHTML
    } else {
        document.getElementById("target").innerText = "Hello";
    }

})();
