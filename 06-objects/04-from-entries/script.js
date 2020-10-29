/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
   /* let button = document.getElementById("run");
    button.addEventListener ("click", function () {

        let keysObject = Object.fromEntries(keys.entries());
        let valuesObject = Object.fromEntries(values.entries());

        let keysObjectKeys = Object.values(keysObject);
        let valuesObjectValues = Object.values(valuesObject);

        keysObjectKeys.forEach(item => console.table(item));
        valuesObjectValues.forEach(item => console.table(item));

    }); */

    let tableau = []
    for (i=0; i<5; i++) {
        tableau.push([keys[i], values[i]]);
    }

    let map= new Map([...tableau]);
    let items = Object.fromEntries(map);

    document.getElementById("run").addEventListener("click", function() {
        console.table(items);
    });

})();
