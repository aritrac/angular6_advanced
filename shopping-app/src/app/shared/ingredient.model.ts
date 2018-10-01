export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    // we can also write the constructor without any declarations as shown above
    // constructor(public name: string, public amount: number) {}
}
