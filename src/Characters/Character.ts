export class Character {

    protected name: string;
    protected sexe: string;
    protected pv: number;

    constructor(n: string, s: string, p: number) {
        this.name = n;
        this.sexe = s;
        this.pv = p;
    }

    public summary(){
        console.log('Vous êtes ' + this.name + ', de sexe ' + this.sexe + ' et avec ' + this.pv + ' de points de vie');
    }

}
