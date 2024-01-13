import "./style.css";
import { getPerson } from "../lib";

const main = () => {
  const paragraph = document.querySelector<HTMLParagraphElement>("p#msg");
  if (!paragraph) {
    return;
  }

  const person = getPerson("Alice");
  paragraph.textContent = person.name;
  console.log(person);
};

main();
