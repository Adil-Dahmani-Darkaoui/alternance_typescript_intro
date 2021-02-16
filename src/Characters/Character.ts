import {Enemy} from "./Enemy";

export class Character {

    protected name: string;
    protected sexe: string;
    public pv: number;
    protected damages = Math.floor(Math.random() * 100) + 1;

    constructor(name: string, sexe: string, pv: number) {
        this.name = name;
        this.sexe = sexe;
        this.pv = pv;
    }

    public summary(){
        console.log('Vous êtes ' + this.name + ', de sexe ' + this.sexe + ' et avec ' + this.pv + ' de points de vie.. Place au combat!');
    }

    public attack(enemy: Enemy){
        enemy.pv -= this.damages;
        console.log('Vous avez infligé ' + this.damages + ' points de dégâts à votre ennemi.')
    }

}
