import React from 'react';
import {useState} from 'react';
import 'src/data.json';

const ProductTable = () => {
    const [search, setSearch] = useState();

    return(
        <>
            <form>
                <label>Search</label>
                <input name="search" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                <button>Confirm</button>
            </form>

            
        </>
    )

}
export default ProductTable;