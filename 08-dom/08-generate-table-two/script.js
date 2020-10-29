/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let tableau = document.createElement("table");
        let row, column;
        // creating all cells
        for (let i = 0; i < 10; i++) {
            row = document.createElement("tr");
            tableau.appendChild(row);

            for (let j = 0; j < 10; j++) {
            column = document.createElement("td");
            row.appendChild(column);

            resultat = (i+1)*(j+1);
            column.innerText = (i+1)+ " x " + (j+1) + " = " + resultat;
            }

        }

    document.getElementById("target").appendChild(tableau);


})();
