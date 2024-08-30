import Title from '../Title';
import { Icon } from '@iconify/react'

import './index.css'
import { useState } from 'react';

const Accordion = ({title, children}) => {
  let [open, setOpen] = useState(true);

  const handleOpen = () => open ? setOpen(false) : setOpen(true);

  return (
    <div className='accordion'>
      <div className='accordion__header'>
        <Title heading='h3' text={title}/>
        <Icon icon="pajamas:plus" onClick={handleOpen}/>
      </div>
      <div className={`accordion__content accordion__content--${open ? 'open': 'close' }`}>
          {children}
      </div>
    </div>
  );
};

export default Accordion;