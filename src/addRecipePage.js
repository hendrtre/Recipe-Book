import React from 'react'

function AddRecipePage() {
    return (
        <div className='container'>
            <h1>Add New Recipe</h1>
            <div className='form-holder'>
                <form>
                    <label>
                        Title: 
                        <input type="text" name="Title" placeholder='Name of Recipe' />
                    </label>
                </form>

                <form>
                    <label>
                        Cover Image: 
                        <input type="file" name='coverImage' />
                    </label>
                </form>

                <form>
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
                </form>
                <form>
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
                </form>
                <form>
                    <label>
                        Steps/Directions:
                        <textarea></textarea>
                    </label>
                </form>
                <form>
                    <label>
                        Ingredients:
                        <textarea></textarea>
                    </label>
                </form>

                <input type="submit" value="Submit" />
            </div>
        </div>
    )
}

export default AddRecipePage