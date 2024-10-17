const resultat = document.getElementById('resultat');



function ajout(chaine,caractere){
    chaine = chaine + caractere;
    return chaine;

}


function ajoutChaine(chaine){
    let chaineClean = "";


    
}

function calculate(){




}

let test = "5 + 3"; 
// Résultat attendu : 8

let test1 = "10 - 4"; 
// Résultat attendu : 6

let test2 = "6 * 7"; 
// Résultat attendu : 42

let test3 = "20 / 5"; 
// Résultat attendu : 4

let test4 = "5 + 3 * 2"; 
// Résultat attendu : 11 (priorité de la multiplication)

let test5 = "(5 + 3) * 2"; 
// Résultat attendu : 16 (priorité des parenthèses)

let test6 = "5 * -3"; 
// Résultat attendu : -15

let test7 = "10 / 3"; 
// Résultat attendu : 3.3333 (précision à 4 décimales)

let test8 = "5 + 4 - 2 * 3"; 
// Résultat attendu : 5 (priorité multiplication puis addition/soustraction)

let test9 = "5 + * 7"; 
// Résultat attendu : 35 (remplace + par *)

let test10 = "6 * - 2"; 
// Résultat attendu : -12

let test11 = "2.5 + 1.75"; 
// Résultat attendu : 4.25

let test12 = "10.5 * 2 - 5 / 2"; 
// Résultat attendu : 19.75 (priorité multiplication/division, puis soustraction)

let test13 = "5 + 3 = 8 * 2"; 
// Résultat attendu : 16 (la nouvelle opération commence après le "=")

let test14 = "5.3.7 + 2"; 
// Résultat attendu : Erreur ou invalidation

let test15 = "0009 + 3"; 
// Résultat attendu : 12 (0009 est traité comme 9)
