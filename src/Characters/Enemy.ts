import {Character} from "./Character";

export class Enemy {

    public name: string;
    public pv = Math.floor(Math.random() * 100) + 1;
    protected damages = (Math.floor(Math.random() * 100) + 1)/2;

    constructor(name: string) {
        this.name = name;
        this.pv;
    }

    public summary(){
        console.log( this.name + ' possède ' + this.pv + ' points de vie.');
    }

    public attack(charac: Character){
        charac.pv -= this.damages;
        console.log( this.name + ' vous a infligé ' + this.damages + ' points de dégâts.')
        console.log('HAHA, Sire ! Je vous attends ! À moins que vous préfériez que l’on dise partout que le roi est une petite pédale qui pisse dans son froc à l’idée de se battre !')
    }

}
