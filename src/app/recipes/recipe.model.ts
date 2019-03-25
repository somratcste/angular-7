export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, iamgePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = iamgePath;
    }
}