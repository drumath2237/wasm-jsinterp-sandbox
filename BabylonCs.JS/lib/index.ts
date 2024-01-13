export class Person {
  public name: string;
  public age: number;
  public isChild: boolean;

  public constructor(name: string, age: number, isChild: boolean) {
    this.name = name;
    this.age = age;
    this.isChild = isChild;
  }
}

export const getPerson = (name: string) => new Person(name, 18, false);
