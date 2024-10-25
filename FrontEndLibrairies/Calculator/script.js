const resultat = document.getElementById('resultat');

function ajout(chaine, caractere) {
    const caractere_allowed_at_first = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['+', '-', '*', '/'];

    if (chaine.length === 0) {
        if (caractere_allowed_at_first.includes(caractere)) {
            return caractere === '0' ? '' : chaine + caractere;
        }
    } else {
        const dernierCaractere = chaine[chaine.length - 1];
        const dernierNombre = chaine.split(/[\+\-\*\/]/).pop();

        if (numbers.includes(dernierCaractere)) {
            if (operators.includes(caractere)) {
                return chaine + caractere; 
            } else if (caractere === '.' && !dernierNombre.includes('.')) {
                return chaine + caractere; 
            } else if (numbers.includes(caractere)) {
                return chaine + caractere;
            }
        }
        else if (operators.includes(dernierCaractere)) {
            if (caractere === '-' && dernierCaractere !== '-') {
                return chaine + caractere;
            } else if (numbers.includes(caractere)) {
                return chaine + caractere;
            } else if (operators.includes(caractere)) {
                return chaine.slice(0, -1) + caractere;
            }
        }
        else if (dernierCaractere === '.') {
            if (numbers.includes(caractere)) {
                return chaine + caractere;
            }
        }
    }
    return chaine;
}

function ajoutChaine(chaine) {
    let chaineClean = "";

    for (let i = 0; i < chaine.length; i++) {
        chaineClean = ajout(chaineClean, chaine[i]);
    }

    // Correction pour éliminer les zéros non significatifs au début de chaque nombre dans la chaîne
    chaineClean = chaineClean.replace(/\b0+(\d+)/g, '$1');

    return chaineClean;
}

function isValidExpression(expression) {
    const validExpression = /^-?(\d+(\.\d+)?|\.\d+)([+\-*\/]-?(\d+(\.\d+)?|\.\d+))*$/;
    return validExpression.test(expression);
}

function calculer(expression) {
    const chaineSoigne = ajoutChaine(expression);

    if (!isValidExpression(chaineSoigne)) {
        return "Erreur";
    }

    try {
        // Suppression de l'arrondi à 4 décimales
        let resultat = eval(chaineSoigne);
        return resultat;
    } catch (e) {
        return "Erreur";
    }
}

function testerCalculs() {
    const tests = [

        
        { test: "3 + 5 * 6 - 2 / 4", attendu: 32.5 },
        { test: "5+3", attendu: 8 },
        { test: "10-4", attendu: 6 },
        { test: "6*7", attendu: 42 },
        { test: "20/5", attendu: 4 },
        { test: "5+3*2", attendu: 11 },
        { test: "5*-3", attendu: -15 },
        { test: "10/3", attendu: (10 / 3).toFixed(4) },  // Arrondi à 4 décimales pour le test
        { test: "5+4-2*3", attendu: 5 },
        { test: "5+*7", attendu: 35 },  // Expression incorrecte
        { test: "6*-2", attendu: -12 },
        { test: "2.5+1.75", attendu: 4.25 },
        { test: "10.5*2-5/2", attendu: 18.5 },  // Test pour les nombres décimaux
        { test: "5+3=8*2", attendu: "Erreur" },  // Expression incorrecte
        { test: "5.3.7+2", attendu: 7.37 },  // Expression incorrecte
        { test: "0009+3", attendu: 12 },
        { test: "10.5*2-5/2", attendu: 18.5 }
    ];

    let echecCount = 0;

    tests.forEach(({ test, attendu }) => {
        const resultat = calculer(test);
        if (String(resultat) !== String(attendu)) {
            echecCount++;
        }
    });

    const resultDiv = document.getElementById("resultat");
    resultDiv.textContent = `${echecCount} test(s) échoué(s) sur ${tests.length}`;
}

testerCalculs();
