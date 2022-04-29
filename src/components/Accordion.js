import { useState } from "react";
// import { Recipes } from "../data";
import { Data } from "../data";
import AccordionItem from "./AccordionItem";
const originalRecipe = Data
// console.log(Data)
// console.log(originalRecipe)
const Accordion = () => {
    const [clicked, setClicked] = useState("0")

    const [recipes, setRecipes] = useState(Data)

    function updateData() {
      var searchText = document.getElementById("Search").value
      const filtered = recipes.filter((recipe) => {        
        // console.log(searchText.length == 0)
          return recipe["title"].toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        // console.log(recipe.title.includes(searchText))
      })

      if (searchText.length == 0) {
        // console.log("Data", Data)
        // console.log(originalRecipe)
        setRecipes(Data)
      } else {
        setRecipes(filtered)
        // console.log(recipes)
      }
    }

    function runChange(event){
      updateData(event.target.value)
    }


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
          id="Search"
          type="text" 
          placeholder="Accordion..." 
          onChange={runChange}
        />
      </div>
      <ul className="accordion">
        {recipes.map((recipe, index) => (
          <AccordionItem 
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index} 
          Recipe={recipe} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;