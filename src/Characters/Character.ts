import {Fighter} from "./Fighter";

export class Character implements Fighter{

    protected name: string;
    protected sexe: string;
    public pv: number;

    constructor(name: string, sexe: string, pv: number) {
        this.name = name;
        this.sexe = sexe;
        this.pv = pv;
    }

    public summary(){
        console.log('Vous êtes ' + this.name + ', de sexe ' + this.sexe + ' et avec ' + this.pv + ' de points de vie.. Place au combat!');
    }

    public attack(fighter: Fighter){
        let damages = Math.round(Math.floor(Math.random() * 100) + 1);
        fighter.takeDamage(damages)
    }

    takeDamage(attack: number): number {
        let fighterPv = this.pv;
        this.pv = fighterPv - attack;
        console.log('Vous subissez ' + attack + ' points de dégâts')
        return attack;
    }
}
