export class Enemy {

    protected name: string;
    pv = Math.floor(Math.random() * 100) + 1;

    constructor(name: string) {
        this.name = name;
        this.pv;
    }

    public summary(){
        console.log( this.name + ' vous défit et possède ' + this.pv + ' points de vie.');
    }

}
