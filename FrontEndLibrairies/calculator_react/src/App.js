  import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');  
  const [result, setResult] = useState(null);  // Gérer le résultat comme valeur numérique

  const handleClick = (e) => {
    const value = e.target.name;  // Le caractère cliqué
    let lastChar = input.slice(-1);  // Le dernier caractère de l'input actuel
    let newInput = input;

    const operators = ['+', '-', '*', '/'];

    // 1. Vérification pour le premier caractère
    if (input.length === 0) {
      // Si c'est le premier caractère, il doit être un chiffre ou un '-'
      if (!/[\d-]/.test(value)) {
        return; // Ne pas ajouter si ce n'est pas un chiffre ou un '-'
      } else {
        newInput = value; // Ajouter le chiffre ou le '-'
      }
    } 
    // 2. Vérification si la longueur de l'input est supérieure à 1
    else {
      // Si un opérateur est ajouté après un autre opérateur (exclure le '-')
      if (operators.includes(value) && operators.includes(lastChar)) {
        // Remplacer le dernier opérateur par le nouveau
        newInput = input.slice(0, -1) + value;
      } 
      // Empêcher plusieurs points décimaux dans un même nombre
      else if (value === '.' && lastChar === '.') {
        return; // Ne rien ajouter si on a déjà un point décimal
      } 
      // Vérifier si un nombre possède déjà un point décimal
      else if (value === '.') {
        const lastNumber = input.split(/[\+\-\*\/]/).pop();  // Extrait le dernier nombre
        if (lastNumber.includes('.')) {
          return; // Ne pas ajouter un autre point décimal dans le même nombre
        }
      } 
      // Vérification pour le nombre négatif en début ou après un opérateur
      else if (value === '-' && (lastChar === '' || operators.includes(lastChar))) {
        newInput += value; // Permettre le signe '-' en début ou après un opérateur
      } 
      // Vérification générale (ajout si tout est correct)
      else {
        newInput += value;
      }
    }

    // Mise à jour de l'input
    setInput(newInput);
  };

  // Fonction pour effacer
  const clear = () => {
    setInput('');              
    setResult(null);  // Réinitialiser le résultat à null            
  };

  // Fonction pour calculer le résultat
  const calculate = () => {
    try {
      // Remplacer les symboles comme × et ÷ par * et / pour le calcul
      let expression = input.replace(/×/g, '*').replace(/÷/g, '/');

      // Évaluer l'expression mathématique
      const evalResult = eval(expression);

      // Arrondir le résultat à 4 décimales de précision
      const roundedResult = parseFloat(evalResult.toFixed(4));

      // Mise à jour du résultat
      setResult(roundedResult);

      // Remettre l'input à vide (ou au résultat si on souhaite continuer les calculs)
      setInput(roundedResult.toString());

    } catch (error) {
      // En cas d'erreur dans l'expression (par ex. 5 * -), réinitialiser
      setResult('Error');
      setInput('');
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        <p className="input">{input || 0}</p>  {/* Afficher l'input ou 0 si vide */}
        <p className="result">{result !== null ? result : ''}</p>  {/* Afficher le résultat si présent */}
      </div>
      <div className="keypad">
        <button id="clear" className="span-three" onClick={clear}>Clear</button>
        <button name="/" id="divide" onClick={handleClick}>&divide;</button>

        <button name="7" id="seven" onClick={handleClick}>7</button>
        <button name="8" id="eight" onClick={handleClick}>8</button>
        <button name="9" id="nine" onClick={handleClick}>9</button>
        <button name="*" id="multiply" onClick={handleClick}>&times;</button>

        <button name="4" id="four" onClick={handleClick}>4</button>
        <button name="5" id="five" onClick={handleClick}>5</button>
        <button name="6" id="six" onClick={handleClick}>6</button>
        <button name="-" id="subtract" onClick={handleClick}>&ndash;</button>

        <button name="1" id="one" onClick={handleClick}>1</button>
        <button name="2" id="two" onClick={handleClick}>2</button>
        <button name="3" id="three" onClick={handleClick}>3</button>
        <button name="+" id="add" onClick={handleClick}>+</button>

        <button name="0" id="zero" className="span-two" onClick={handleClick}>0</button>
        <button name="." id="decimal" onClick={handleClick}>.</button>
        <button id="equals" onClick={calculate}>=</button>  
      </div>
    </div>
  );
}

export default App;
