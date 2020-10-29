/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener ("click", function() {

        console.log(people.size);

        if (people.has("Alexandre")) {
            console.log("oui, il y a un Alexandre.");

        } else {
            console.log("non, il n'y a pas d'Alexandre.");
        }
    
    })

})();
