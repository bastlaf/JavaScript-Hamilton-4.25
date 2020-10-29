/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    
    const person = class {
        constructor(firstname, lastname) {
          this.firstname = firstname;
          this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(newIdentity) {
            [this.firstname, this.lastname] = newIdentity.split(" ");
        }

    }

    document.getElementById("run").addEventListener("click", function() {

        let test = new person("Xavier", "DupondDeLigogo"); 
        console.table(test.name);

        test.name = "Francis Huster";
        console.table(test.name);

    });


})();
