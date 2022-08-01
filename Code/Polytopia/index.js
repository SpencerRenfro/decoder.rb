// Quick n' Dirty

var characters = {
    warrior: {
      name: "Warrior",
      maxHealth: 10,
      attack: 2,
      defence: 2,
    },
    swordsman: {
      name: "Swordsman",
      maxHealth: 15,
      attack: 3,
      defence: 3,
    },
    knight: {
        name: "Knight",
        maxHealth: 15,
        attack: 3,
        defence: 3,
    }
  }
  
  var offenceSelectInput = document
      .getElementById('offence');
  var defenceSelectInput = document
      .getElementById('defence');
  
  function initSelectOptions() {
    // character = current character in loop
    for (var characterName in characters) {
      // Dynamically create <option> element
      var character = characters[characterName];
      var newDefenceSelectOption = document.createElement('option');
      var newOffenceSelectOption = document.createElement('option');
      newOffenceSelectOption.setAttribute('value', character.name.toLowerCase());
      newOffenceSelectOption.innerHTML = character.name;
      // <option value="warrior">Warrior</option>
      newDefenceSelectOption.setAttribute('value', character.name.toLowerCase());
      newDefenceSelectOption.innerHTML = character.name;
      // Append to the parent <select> input
      offenceSelectInput.appendChild(newOffenceSelectOption);
      console.log(`Offence option generated for ${character.name}`);
      defenceSelectInput.appendChild(newDefenceSelectOption);
    }
  }




btn = document.getElementById('btn-main');

var selectedDefender;
var selectedAttacker;




document.addEventListener('DOMContentLoaded', () => {
    initSelectOptions();
    document
    .getElementById('offence')
    .addEventListener('input', handleSelectOffence);
    document
    .getElementById('defence')
    .addEventListener('input', handleSelectDefence);
})


function handleSelectDefence(ev) {
    selectedDefender = ev.target;
    console.log(selectedDefender.value);

}

function handleSelectOffence(ev) {
    selectedAttacker= ev.target;
    console.log(selectedAttacker.value);
    return selectedAttacker;

}

selectedAttacker = handleSelectOffence();
// btn.addEventListener('click', () => {

//     console.log(`You have slected ${selectedDefender.value} for your defence`);
//     console.log(`You have slected ${selectedAttacker.value} for your offence`);
        
//     });
    

// create new function called calculateBattle 

function calculateBattle() {

    // list all variables needed
    // calculate results
    // create results object
    // display results in the DOM
}

/*
selected character
*/


/* 


attackForce = attacker.attack * (attacker.health / attacker.maxHealth)

defenseForce = defender.defense * (defender.health / defender.maxHealth) * defenseBonus

totalDamage = attackForce + defenseForce

attackResult = round((attackForce / totalDamage) * attacker.attack * 4.5)

defenseResult = round((defenseForce / totalDamage) * defender.defense * 4.5)


*/