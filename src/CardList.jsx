import Card from './Card.jsx';

function CardList({arraydata})
//const CardList=({arraydata})=>
  {

 return(
  <div className="container">
   <h3 class="ms-3">React Concepts</h3>
    {arraydata.map((data,index)=>(
      <Card  image={data.imgurl}   title={data.title}   descrip={data.description}  key={index} />

     ))}
    
  </div>
 );
};

export default CardList


/*
{data.map((item)=>(
       <div className="card" >
          <img src={item.imgurl} alt={item.title} />
         <h5>{item.title}</h5>
         <p>{item.description}</p>
       </div>
       ))}
 */


