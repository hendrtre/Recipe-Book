import * as React from 'react'

let RecipesContext = React.createContext()

let Data = [
    {
      title: "Ratatouille",
      prepTimeHour: "0",
      prepTimeMin: "30",
      cookTimeHour: "0",
      cookTimeMin: "60",
      totalTime: "1 hr, 30mins",
      ingredient0: "1-2 Cup(s) Tomato Sauce (good quality tomato basil sauce",
      ingredient1: "2 Garlic (cloves, minced)",
      ingredient2: "3-4 Thyme (sprigs) or 1tsp crushed",
      direction0: "1. Preheat Oven and Prepare Ratatouille Ingredients: Preheat oven at 375-degree Fahrenheit. Bring 2 cups of water to rolling boil. Season with salt. Slice red potatoes. Drop in water and boil for 3-4 minutes or until par cooked. Drain on a paper towel and set aside. While potatoes cook and cool down,  slice rest of veggies – squash, bell pepper and eggplant. ",
      direction1: "2. Make Bechamel Sauce: To make Bechamel – Microwave 1 cup of milk in microwave safe container. Set aside. Heat 1 tbsp butter in sauce pan. Add 1 tbsp flour and cook until raw flavor of flour goes away. 1-2 minutes. Don’t let flour turn brown. Add warm milk ¼ cup at time and stir well to avoid lumps. Add all of milk and continue cooking until sauce thickens and coat back of a spoon. Season with salt, nutmeg, and black pepper. Set aside. ",
      direction2: "test to see if this thing works",
    },
    {
      title: "Beef Ramen",
      prepTimeHour: "0",
      prepTimeMin: "15",
      cookTimeHour: "0",
      cookTimeMin: "30",
      ingredient0: ['1 tbsp Vegtable Oil', '5cm piece ginger, grated', '2 garlic cloves, crushed', '50g spring onions, sliced, greens and whites separated', '2 beef stock cubes, made up to 1.25Ltr', '2 tbsp light soy sauce', '1 tsp sugar', '395g pack Boswell Farms thin cut beef steaks', '150g sugarsnaps', '250 g fine egg noodles'],
      direction0: ['Heat the oil in a large saucepan on a medium heat. Fry the ginger, garlic and white parts of the spring onion for 2 mins until golden and fragrant. Pour the stock into the pan and cover. Simmer for 5mins.', 'Add the soy sauce and sugar to the broth. Thinly slice the beef steak into 1cm strips. Add to the broth with the sugar snaps and noodles. Cook for 5 mins over a medium high heat until the beef is cooked through and the noodles are tender.', 'Divide the ramen between 4 bowls. Scatter with the greens of the spring onions to serve.'],

    },
    {
      title: "Voluptas praesentium facere?",
      ingredient0: ['Flour','Sugar','Eggs'],
      direction0: ['Burn it!', 'Grill it!', 'Fry it!'],
    },
];

let Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        ...state, 
        title: state.title.concat(action.payload),
        prepTimeHour: state.prepTimeHour.concat(action.payload),
        prepTimeMin: state.prepTimeMin.concat(action.payload),
        cookTimeHour: state.cookTimeHour.concat(action.payload),
        cookTimeMin: state.cookTimeMin.concat(action.payload),
        ingredient0: state.ingredient0.concat(action.payload),
        direction0: state.direction0.concat(action.payload)
      }
    case 'REMOVE_POST':
      return {
        ...state,
        title: state.title.filter(title => title.id !== action.payload),
        prepTimeHour: state.prepTimeHour.filter(prepTimeHour => prepTimeHour.id !== action.payload),
        prepTimeMin: state.prepTimeMin.filter(prepTimeMin => prepTimeMin.id !== action.payload),
        cookTimeHour: state.cookTimeHour.filter(cookTimeHour => cookTimeHour.id !== action.payload),
        cookTimeMin: state.cookTimeMin.filter(cookTimeMin => cookTimeMin.id !== action.payload),
        direction0: state.direction0.filter(direction0 => direction0.id !== action.payload),
        ingredient0: state.ingredient0.filter(ingredient0 => ingredient0.id !== action.payload),
      }
    case 'Search':
      const filtered = state.filter((recipe) => {        
          return recipe["title"].toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
      })
      return filtered

    default: 
      return state
  }
}


const RecipeProvider = ({children}) => {
  const [recipes, dispatch] = React.useReducer(Reducer, Data)
  const value = {recipes, dispatch}
  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  )
}

let RecipeConsumer = RecipesContext.Consumer


export { Data, RecipesContext, RecipeProvider, RecipeConsumer }