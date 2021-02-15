import prompts from "prompts";
import {Character} from "./Characters/Character";

// const prompts = require('prompts');
//
// const newCharacter = [
//     {
//         type: 'text',
//         name: 'name',
//         message: 'Player name'
//     },
//     {
//         type: 'select',
//         name: 'sexe',
//         message: 'Your sexe',
//         choices: [
//             { title: 'Male', value: 'Male' },
//             { title: 'Female', value: 'Female' },
//             { title: '¯\\_(ツ)_/¯', description: 'If really you are not sure..', value: '¯\\_(ツ)_/¯' }
//         ],
//         initial: 0
//     },
//     {
//         type: 'number',
//         name: 'pv',
//         message: 'Your point of life'
//     },
//     {
//         type: 'toggle',
//         name: 'value',
//         message: 'Do you confirm?',
//         initial: true,
//         active: 'yes',
//         inactive: 'no'
//     }
// ];
//
// let myCharacter:Character = new Character(newCharacter.name, newCharacter.sexe, newCharacter.pv);
// myCharacter.summary();
//
// (async () => {
//     const response = await prompts(newCharacter);
// })();

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
                { title: 'Male', value: 'Male' },
                { title: 'Female', value: 'Female' },
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

})();

