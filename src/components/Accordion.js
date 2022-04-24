import { useState } from "react";
import { Recipes } from "../data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
    const [clicked, setClicked] = useState("0")

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    }

  return (
    <div>
      <div>
        <input 
          type="text" 
          placeholder="Search Recipes..." 
          // onChange={handleFilter}
        />
      </div>
      <ul className="accordion">
        {Recipes.map((Recipe, index) => (
          <AccordionItem 
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index} 
          Recipe={Recipe} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;