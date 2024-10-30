import React from 'react';

import img1 from './assets/images/img1.png';

import PropTypes from 'prop-types';

function Card({image,title,descrip}) {
 return(
   <div class="container">
   <div className="clist">
       <div className="card p-2 m-2  border border-3 border-blue">
         <img src={image} alt={title} class="rounded rounded-4" />
         <h5 className="mt-2">{title}</h5>
         <p>{descrip}</p>
       </div>
   </div>
  </div>
 );
}

//default url for image  https://via.placeholder.com/150

Card.defaultProps={
  image:img1,
  title:"React Default",
  descrip:"Default Values",
 };


// Validate prop types
Card.propTypes = {
  image:PropTypes.string,
  title:PropTypes.string.isRequired,
  descrip:PropTypes.string,
};

 export default Card

