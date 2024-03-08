import React, { useState } from 'react';
import { AccordionData } from './AccordianData';
import MyAccordian from './MyAccordian';

function Accordian() {
    const [Accordian, SetAccordian] = useState(AccordionData);
    
  return (
    <>
    <div className='App'>
        <div className='Accordian-box' >
        <div className='Accordian-title'>
            <div>Best FAQS</div>
        </div>
        <div className='Accordian-content'>
        <ul>
            {Accordian.map((data, index) => (
                <MyAccordian key={data.id} {...data} />
            ))}
            </ul>
        </div>
            
        </div>

    </div>

    </>
  )
}

export default Accordian;