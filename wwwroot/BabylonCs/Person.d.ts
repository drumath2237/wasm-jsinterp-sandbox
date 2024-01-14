export declare class Person {
    name: string;
    age: number;
    isChild: boolean;
    constructor(name: string, age: number, isChild: boolean);
}
/**
 * Person factory
 * @param name name
 * @returns Person Object
 */
export declare const getPerson: (name: string) => Person;
/**
 * persont to string
 * @param person person object
 * @returns print string
 */
export declare const printPerson: (person: Person) => string;
export declare const changePersonName: (person: Person, name: string) => void;
