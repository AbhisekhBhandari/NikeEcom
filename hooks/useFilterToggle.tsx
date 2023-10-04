import { FilterContext } from "@/context/FilterContext";
import { useContext } from "react";


export default function useFilterToggle(){
  const values = useContext(FilterContext)
  if(!values){
    return new Error('useContext must be used within its provider  ')
  }
  return values;
}