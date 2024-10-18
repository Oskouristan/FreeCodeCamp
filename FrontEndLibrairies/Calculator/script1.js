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
        let resultat = eval(chaineSoigne);

        // Arrondir à 4 décimales pour les divisions avec résultats décimaux
        if (!Number.isInteger(resultat)) {
            resultat = resultat.toFixed(4);
        }

        return resultat;
    } catch (e) {
        return "Erreur";
    }
}

function testerCalculs() {
    const tests = [
        { test: "10.5*2-5/2", attendu: 18.5},
    ];

    let echecCount = 0;

    tests.forEach(({ test, attendu }) => {
        const resultat = calculer(test);
        if (String(resultat) !== String(attendu)) {
            echecCount++;
            console.log(`Test échoué : ${test} (attendu: ${attendu}, obtenu: ${resultat})`);
        }
    });

    const resultDiv = document.getElementById("resultat");
    resultDiv.textContent = `${echecCount} test(s) échoué(s) sur ${tests.length}`;
}

testerCalculs();
