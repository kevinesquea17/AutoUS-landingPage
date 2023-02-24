import { createContext, useRef } from "react";

const SliderContext = createContext();


const SliderProvider = ({children}) => {

    const slider = useRef();

    return (
        <SliderContext.Provider value={{
            slider
        }}>
            {children}
        </SliderContext.Provider>
    )
}


export {
    SliderContext,
    SliderProvider
}