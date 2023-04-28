import React from 'react';
import {useState} from 'react';
const Car = () => {
    const[brand, setBrand] = useState();
    const[model, setModel] = useState();
    const[colour, setColour] = useState();
    const[year, setYear] = useState();


    return(
        <>
            <form>
                <label>Brand</label>
                <input name ="brand" type="text" value={brand} onChange={e => setBrand(e.target.value)}/>

                <label>Model</label>
                <input name ="model" type="text" value={model} onChange={e => setModel(e.target.value)}/>

                <label>Colour</label>
                <input name ="colour" type="text" value={colour} onChange={e => setColour(e.target.value)}/>

                <label>Year</label>
                <input name ="year" type="text" value={year} onChange={e => setYear(e.target.value)}/>

                <button>Confirm</button>
            </form>
            
            <div>
                <p>My car is a {brand} brand, model {model}</p>
                <p>It is {colour} and is from the year {year}</p>
            </div>
        </>
    )
}
export default Car;