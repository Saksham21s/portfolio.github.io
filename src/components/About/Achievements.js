
import React from 'react';
import hackathon from './certificates/hackathon.jpeg';
import Figure from 'react-bootstrap/Figure'

function Achievements() {
return (
    <Figure >
      <Figure.Image
        width={371}
        height={380}
        alt="171x180"
        src={hackathon}
        className='m-2  border-danger'
      />
      {/* <Figure.Image
        width={371}
        height={380}
        alt="171x180"
        src={Udemy}
        className='m-2'
      />
      <Figure.Image
        width={371}
        height={380}
        alt="171x180"
        src={Python}
        className='m-2'
      /> */}
    </Figure>
  );
}

export default Achievements;