import {Fighter} from "./Fighter";

export class Enemy implements Fighter{

    public name: string;
    public pv = Math.floor(Math.random() * 100) + 1;

    constructor(name: string) {
        this.name = name;
        this.pv;
    }

    public summary(){
        console.log( this.name + ' possède ' + this.pv + ' points de vie.');
    }

    public attack(fighter:Fighter){
        let damages = Math.round((Math.floor(Math.random() * 100) + 1)/2);
        fighter.takeDamage(damages)
        console.log(this.name + ' vous inflige ' + damages + ' points de dégâts')
    }

    takeDamage(attack: number): number {
        let fighterPv = this.pv;
        this.pv = fighterPv - attack;
        console.log(this.name + ' subit ' + attack + ' points de dégâts')
        return attack*0.5;
    }
}
