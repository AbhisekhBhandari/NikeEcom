import React, {useState} from 'react'
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AiOutlineDown } from "react-icons/ai";
import {styled} from '@mui/material/styles';
import MuiAccordion,{AccordionProps} from '@mui/material/Accordion'
import { JsxElement } from 'typescript';
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
type AcordionPropTypes = {
  title: string,
}

const AccordionComponent:React.FC<AccordionProps> = ({title, children}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  
  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Accordion
    disableGutters
    expanded={expanded}
    onChange={() => {
      handleExpand()
    }}
  >
    <AccordionSummary>
      <div className="flex items-center justify-between  w-full">
        <p className=' font-semibold'>{title}</p>
        <AiOutlineDown className = {`${expanded && 'rotate-180'} duration-200`}/>
      </div>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
  )
}

export default AccordionComponent
