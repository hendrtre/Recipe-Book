import React, { useState } from 'react'
// import { RecipesContext } from './data' 


function AddRecipePage() {
    // const [newRecipe, setNewRecipe] = useState("")
    const [title, setTitle] = useState("")
    const [prepHour, setPrepHour] = useState("")
    const [prepMin, setPrepMin] = useState("")
    const [cookHour, setCookHour] = useState("")
    const [cookMin, setCookMin] = useState("")
    const [stepDir, setStepDir] = useState("")
    const [ingr, setIngr] = useState("")

    // let [title, dispatch] = useContext(RecipesContext)
    // let [prepHour, dispatch] = useContext(RecipesContext)

    // let { recipes, dispatch } = useContext(RecipesContext)


    function handleButtonSubmit(event) { 
        event.preventDefault()
        // dispatch({
        //     type: "ADD_RECIPE",
        //     payload: event.target.value
        //   })
        console.log(title)
        console.log(prepHour)
        console.log(prepMin)
        console.log(cookHour)
        console.log(cookMin)
        console.log(stepDir)
        console.log(ingr)
    }

    return (
        <div className='container'>
            <h1>Add New Recipe</h1>
            <div className='form-holder'>
                <form onSubmit={handleButtonSubmit}>
                    <div className='title-form'>
                        <label>
                            Title: 
                            <input 
                                type="text" 
                                name="Title" 
                                placeholder='Name of Recipe...' 
                                onChange={(e) => setTitle(e.target.value)} 
                                // value={title}
                            />
                        </label>
                    </div>

                    {/* <div className='image-form'>
                        <label>
                            Cover Image: 
                            <input type="file" name='coverImage' />
                        </label>
                    </div> */}

                    <div className='time-form'>
                        <div className='prep-form'>
                            <label>
                            Prep Time:  
                                <input
                                    name="numberOfHoursPrep"
                                    type="number"
                                    placeholder='Hours'
                                    onChange={(e) => setPrepHour(e.target.value)}
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange} 
                                />
                                <input
                                    name="numberOfMinutesPrep"
                                    type="number"
                                    placeholder='Minutes'
                                    onChange={(e) => setPrepMin(e.target.value)}
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange} 
                                />
                            </label>
                        </div>
                        <div className='cook-form'>
                            <label>
                            Cook Time:  
                                <input
                                    name="numberOfHoursCook"
                                    type="number"
                                    placeholder='Hours'
                                    onChange={(e) => setCookHour(e.target.value)}
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange} 
                                />
                                <input
                                    name="numberOfMinutesCook"
                                    type="number"
                                    placeholder='Minutes'
                                    onChange={(e) => setCookMin(e.target.value)}
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange} 
                                />
                            </label>
                        </div>
                    </div>
                    
                    <div className='instruction-form'>
                        <div className='add-instruction'>
                            <button>+ Add Step</button>
                        </div>
                        <label>
                            Steps/Directions:
                            <textarea 
                                placeholder="Write instruction here..." 
                                onChange={(e) => setStepDir(e.target.value)}
                            />
                        </label>
                        <div className='delete-instruction'>
                            <button>&#10005; Delete</button>
                        </div>
                    </div>

                    <div className='measurements-form'>
                        <div className='add-measurement'>
                            <button>+ Add Ingredient</button>
                        </div>
                        <label>
                            Ingredients:
                            <textarea 
                                placeholder='Write ingredient with measurement here...' 
                                onChange={(e) => setIngr(e.target.value)}
                            />
                        </label>
                        <div className='delete-measurement'>
                            <button>&#10005; Delete</button>
                        </div>
                    </div>

                    <div className='finialSubmit'>
                        <input 
                            className='finialSubmitBTN' 
                            type="submit" 
                            value="+ Add New Recipe" 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRecipePage