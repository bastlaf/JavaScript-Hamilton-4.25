/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //Pour obtenir l’âge du personne en millisecondes, soustrayez la date de naissance(date.getTime()) 
    // du date actuelle(Date.now()). 
    // La méthode Date.now() renvoie le nombre de millisecondes depuis le 1er janvier 1970.
    run.addEventListener ("click", function () {

        let jour = document.getElementById("dob-day").value; //let à mettre dans la fonction
        let mois =  document.getElementById("dob-month").value;
        let annee =  document.getElementById("dob-year").value;

        function getAge(date) { 
            let diff = Date.now() - date.getTime();
             age = new Date(diff); 
            return Math.abs(age.getUTCFullYear() - 1970);
        }
        alert(getAge(new Date(annee, mois, jour))); //Date(année, mois, jour)
    })

    /* 
        La bonne façon de faire : 

        document.getElementById("run").addEventListener("click", function() {
        let birthDate = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value);
        let yearThen =birthDate.getFullYear();
        let monthThen = birthDate.getMonth();
        let dayThen = birthDate.getDate();

        let today = new Date();
        let birthday = new Date(yearThen, monthThen - 1, dayThen);
        let differenceInMilisecond = today.valueOf() - birthday.valueOf();
        let yourAge = Math.floor(differenceInMilisecond / 31536000000);

        alert(yourAge);});
    */






})();
