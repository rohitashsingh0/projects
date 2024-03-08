import React, { useState } from 'react';

function MyAccordian({ id, question, answer }) {
    const [show, setShow] = useState(false);

    const handleView = () => {
        setShow(!show)
    }

  return (
    <>
    <div>
        <h1><button onClick={handleView}>{show ? "-" : "+" }</button>{question}</h1>
        {show && <p>{answer}</p>}

    </div>

    </>
  )
}

export default MyAccordian;