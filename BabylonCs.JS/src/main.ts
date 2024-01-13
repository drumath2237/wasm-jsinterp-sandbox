import "./style.css";
import { getPerson, printPerson } from "../lib";

const main = () => {
  const paragraph = document.querySelector<HTMLParagraphElement>("p#msg");
  if (!paragraph) {
    return;
  }

  const person = getPerson("Alice");
  paragraph.textContent = printPerson(person);
  console.log(person);
};

main();
