export class Person {
  public readonly name: string;
  public readonly age: number;
  public readonly isChild: boolean;

  public constructor(name: string, age: number, isChild: boolean) {
    this.name = name;
    this.age = age;
    this.isChild = isChild;
  }
}

/**
 * Person factory
 * @param name name
 * @returns Person Object
 */
export const getPerson = (name: string) => new Person(name, 18, false);

/**
 * persont to string
 * @param person person object
 * @returns print string
 */
export const printPerson = (person: Person): string =>
  `{name: ${person.name}, age: ${person.age}, child: ${person.isChild}}`;

/**
 * log message to p element
 * @param msg log message
 */
export const logInfo = (msg: string): void => {
  const logElm = document.querySelector<HTMLParagraphElement>("p#msg");
  if (!logElm) {
    return;
  }

  logElm.textContent = msg;
};
