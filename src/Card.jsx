
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

export default Card

/*
{data.map((item)=>(
       <div className="card" >
          <img src={item.imgurl} alt={item.title} />
         <h5>{item.title}</h5>
         <p>{item.description}</p>
       </div>
       ))}
 */