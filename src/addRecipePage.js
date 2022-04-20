import React from 'react'

function AddRecipePage() {
    return (
        <div className='container'>
            <h1>Add New Recipe</h1>
            <div className='form-holder'>
                {/* <div className='title-form'> */}
                <form>
                    <div className='title-form'>
                        <label>
                            Title: 
                            <input type="text" name="Title" placeholder='Name of Recipe...' />
                        </label>
                    </div>

                    <div className='image-form'>
                        <label>
                            Cover Image: 
                            <input type="file" name='coverImage' />
                        </label>
                    </div>

                    <div className='time-form'>
                        <div className='prep-form'>
                            <label>
                            Prep Time:  
                                <input
                                    name="numberOfHoursPrep"
                                    type="number"
                                    placeholder='Hours'
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange} 
                                />
                                <input
                                    name="numberOfMinutesPrep"
                                    type="number"
                                    placeholder='Minutes'
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
                                    // value={this.state.numberOfGuests}
                                    // onChange={this.handleInputChange} 
                                />
                                <input
                                    name="numberOfMinutesCook"
                                    type="number"
                                    placeholder='Minutes'
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
                            <textarea placeholder="Write instruction here..." />
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
                            <textarea placeholder='Write ingredient with measurement here...' />
                        </label>
                        <div className='delete-measurement'>
                            <button>&#10005; Delete</button>
                        </div>
                    </div>
                    <div className='finialSubmit'>
                        <input className='finialSubmitBTN' type="submit" value="+ Add New Recipe" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRecipePage