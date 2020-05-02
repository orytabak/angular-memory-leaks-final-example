import {CatCardComponent} from "./cat-card/cat-card.component";

export class Cat {

  public name: string;
  public age: number;
  public color: string;
  public isStrayCat = true;
  public isHungry = true;
  public catCard: CatCardComponent;

  private static catNames = ['Fluffy', 'Tiger', 'Linda', 'Furr', 'Black', 'Giant', 'Meow', 'Oscar', 'Lily', 'Smokey', 'Sassy', 'Tash', 'Kitty', 'Simba', 'Sassy', 'Patch', 'Shadow', 'Max', 'Misty', 'Princess', 'Lucky'];
  private static catColors = ['Black', 'White', 'Gray', 'Orange', 'Brown'];

  constructor() {
    this.name = "Unnamed Cat";
    this.age = Math.round(Math.random() * 15);
    this.color = Cat.catColors[Math.round(Math.random() * Cat.catColors.length)];
  }

  public giveName(name?: string): void {
    if (name) {
      this.name = name;
    } else {
      this.name = Cat.getRandomCatName();
    }
  }

  public feed(): void {
    this.isHungry = false;
    setTimeout(this.setCatToHungry.bind(this), 10000);
  }

  public setCatToHungry(): void {
    this.isHungry = true;
    this.catCard.onCatHungry();
  }

  public adopt(): void {
    this.isStrayCat = false;
  }

  public shoo(): void {
    this.isStrayCat = true;
  }

  public static getRandomCatName(): string {
    return Cat.catNames[Math.round(Math.random() * Cat.catNames.length)];
  }
}
