
import React from 'react';
import App from './certificates/app-development.jpeg';
import Python from './certificates/python.jpeg';
import Trainingse from './certificates/trainig-se.jpg';
import Udemy from './certificates/udemy-python.jpeg';
import Figure from 'react-bootstrap/Figure'

function ImageSlider() {
return (
    <Figure >
      <Figure.Image
        width={371}
        height={380}
        alt="171x180"
        src={App}
        className='m-2  border-danger'
      />
      <Figure.Image
        width={371}
        height={380}
        alt="171x180"
        src={Trainingse}
        className='m-2  border-danger'
      />
      <Figure.Image
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
      />
    </Figure>
  );
}

export default ImageSlider;