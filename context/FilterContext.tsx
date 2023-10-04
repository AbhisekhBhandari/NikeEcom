'use client'
import {  SetStateAction, createContext, useState } from "react";
import { FilterContextType } from "@/types/types";
type FilterContextProviderProps = {
    children: React.ReactNode,

}

export const FilterContext = createContext<FilterContextType | null>(null)


export function FilterContextProvider({children}: FilterContextProviderProps){
    const [showFilter, setShowFilter] = useState<boolean>(true)
    return(
        <FilterContext.Provider value={{setShowFilter,showFilter}}>{children}</FilterContext.Provider>
    )
}