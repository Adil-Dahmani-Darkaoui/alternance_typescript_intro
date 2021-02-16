import prompts from "prompts";
import {Character} from "./Characters/Character";
import {Enemy} from "./Characters/Enemy";

(async () => {
    const newCharacter = await prompts([
        {
            type: 'text',
            name: 'name',
            message: 'Player name'
        },
        {
            type: 'select',
            name: 'sexe',
            message: 'Your sexe',
            choices: [
                { title: 'Male', value: 'Masculin' },
                { title: 'Female', value: 'Feminin' },
                { title: '¯\\_(ツ)_/¯', description: 'If really you are not sure..', value: '¯\\_(ツ)_/¯' }
            ],
            initial: 0
        },
        {
            type: 'number',
            name: 'pv',
            message: 'Your point of life'
        },
        {
            type: 'toggle',
            name: 'value',
            message: 'Do you confirm?',
            initial: true,
            active: 'yes',
            inactive: 'no'
        }
    ]);

    let myCharacter:Character = new Character(newCharacter.name, newCharacter.sexe, newCharacter.pv);
    myCharacter.summary();

    console.log('Ennemi en approche !');

    const newFight = await prompts([

        {
            type: 'select',
            name: 'fight',
            message: 'Voulez-vous ..',
            choices: [
                { title: 'Combattre', value: 'go' },
                { title: 'Fuir', value: 'fail' },
            ],
            initial: 0
        }
    ]);

    console.log(newFight)

    if (newFight.fight === 'go'){
        let enemy: Enemy = new Enemy("Maitre d'arme");
        enemy.summary();
        console.log('En garde, ma biquette ! Je vais vous découper le gras du cul, ça vous fera ça de moins à trimbaler !')
        myCharacter.attack(enemy);
    }

})();

