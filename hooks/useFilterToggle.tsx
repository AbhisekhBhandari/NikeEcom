import React, { useState } from 'react'

const useFilterToggle = () => {
    const [showFilter, setShowFilter] = useState(true);
    const toggleFilter = () =>{
        setShowFilter(prev=>!prev)
    }
    
  return {showFilter, toggleFilter}
}

export default useFilterToggle
