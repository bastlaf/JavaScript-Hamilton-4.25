/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", function() {

    const person = class {
        constructor(firstname, lastname) {
          this.firstname = firstname;
          this.lastname = lastname;
        }
   
        Sayhello(){
            return "Say hello " + this.firstname + " " + this.lastname;
        }

    }

    let jeanjacques = new person("Jean,", "dit <le bon vieux jackou>!"); console.table();

    console.table(jeanjacques.Sayhello());

});

})();
