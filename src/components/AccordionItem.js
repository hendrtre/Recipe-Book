import { useRef } from "react"

const AccordionItem = ({ Recipe, onToggle, active }) => {
    const { title, direction0, direction1, direction2, prepTime, cookTime, totalTime, ingredient0, ingredient1, ingredient2, coverImage } = Recipe;
    // const directionItems = Recipe.map(function(element){
    //   return `${element.direction0}`
    // })
    function directionList() {
      const directions = direction0
      return (
        <div>
          {directions.map(step => <h1>{step}</h1>)}
        </div>
      )
    }
    const contentEl = useRef();

    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
        <button className="button" onClick={onToggle}>
          {title}
          <span className="control">{active ? "—" : "+"} </span>
        </button>
        <div ref={contentEl} className="direction_wrapper" style={ active ? { height: contentEl.current.scrollHeight } : { height: "0px" } }>

            <p>{coverImage}</p>
            <div className="time-frame">
              <div className="prep-time">Prep Time: {prepTime}</div>
              <div className="cook-time">Cook Time: {cookTime}</div>
              <div className="total-time">Total Time: {totalTime}</div>
            </div>
            <h3>Ingredients</h3>
            <div className="ingredient">{ingredient0}</div>
            <div className="ingredient">{ingredient1}</div>
            <div className="ingredient">{ingredient2}</div>
            <h3>Directions</h3>
            <div>Hello {directionList}</div>

            {/* <div className="direction">Test {directionItems}</div> */}
            <div className="direction">Step 1. {direction0}</div>
            <div className="direction">Step 2. {direction1}</div>
            <div className="direction">Step 3. {direction2}</div>
        </div>
      </li>
    );
  };
  
  export default AccordionItem;