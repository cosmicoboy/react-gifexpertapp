import React, {useState} from "react"
import { AddCategory } from './components/AddCategory'
import {GifGrid} from "./components/GifGrid"

export const GifExpertApp = () => {           
           
    const [categories, setCategories] = useState(["Hades"])

    // const handleAdd = () => {
    //     // me gusta más este
    //     // setCategories( [...categories, "Demeter"] );

    //     //setCategories con "callback"
    //     setCategories( cats => [...cats, "Demeter"])
    // }




    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories} />
            <hr />


            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key = { category }
                            category ={ category } />
                    )
                }
            </ol>

        </>
    )
}
