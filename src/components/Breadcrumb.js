import React from 'react';
import '../scss/Breadcrumb.scss';

const Breadcrumb = ({categories}) => {
  if (categories.length > 0)
  {
  	// recorrem el array con las categorias y las muestra, con un separador de por medio
    return (
  	<ul className='breadcrumb-container'>
	  	{categories.map((categorie, index) => {return (
	  		<li className={"breadcrumb"} key={index}>
	  		  {categorie}{(index !== categories.length - 1) && <s/>}
	  		</li>
	  	  )})}	
  	</ul>
  	)
  }
  else
  	return (null)
  	
}
export default Breadcrumb