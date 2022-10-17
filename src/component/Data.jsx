import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const store = createContext()
const Data = (props) => {
    const [state, setState] = useState([
        {
                "Name":"Md Mobashir",
                "Age":"22",
                "Course":"full stack",
                "Branch":"9155395918",
                "id":"001"
                }
    ]);
return (
        <div>
         <store.Provider value={[state,setState]}> 
            {props.children}
         </store.Provider>
        </div>
    )
}




export default Data;