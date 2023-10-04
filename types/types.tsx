import { SetStateAction } from "react";
export type FilterContextType = {
    showFilter: boolean;
    setShowFilter: React.Dispatch<SetStateAction<boolean>>
  }