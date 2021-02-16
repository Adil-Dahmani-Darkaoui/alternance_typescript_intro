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
                { title: 'Homme', value: 'male' },
                { title: 'Femme', value: 'female' },
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
    let enemy: Enemy = new Enemy("Maitre d'arme");

    while (enemy.pv >0 && myCharacter.pv>0) {

        const newFight = await prompts([

            {
                type: 'select',
                name: 'fight',
                message: 'Voulez-vous ..',
                choices: [
                    {title: 'Combattre', value: 'go'},
                    {title: 'Fuir', value: 'fail'},
                ],
                initial: 0
            }
        ]);

        console.log(newFight)

        if (newFight.fight === 'go') {
            enemy.summary();
            console.log('>>> En garde, ma biquette ! Je vais vous découper le gras du cul, ça vous fera ça de moins à trimbaler ! <<<')
            myCharacter.attack(enemy);

            if (enemy.pv > 0) {
                console.log('Il reste ' + enemy.pv + ' points de vie au ' + enemy.name)
                console.log(enemy.name + ' riposte !');
                enemy.attack(myCharacter);
                console.log('Il vous reste ' + myCharacter.pv + ' points de vie.')
            } else {
                console.log('Le ' + enemy.name + ' est vaincu. Vous remportez la victoire !');
            }
        } else {
            console.log('Vous avez perdu..');
        }
    }
})();

