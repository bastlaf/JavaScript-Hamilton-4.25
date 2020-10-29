/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let random = [];

        for (let i=0, t=100; i<10; i++) {
            random.push(Math.round(Math.random() * t))
            document.getElementById("n-" + Number(i + 1)).innerHTML = random[i];
        }

        document.getElementById("min").innerHTML = Math.min(...random);
        document.getElementById("max").innerHTML = Math.max(...random);
        document.getElementById("sum").innerHTML = random.reduce((a,b) => a + b);
        document.getElementById("average").innerHTML = random.reduce((a,b) => a + b) / random.length;
    })
})();
