import React from 'react';



const Userlist = ({user:{login,avatar_url,html_url}}) =>{
    
 return(
  <div className='card text-center' >
  <img src={avatar_url} className='round-img' style={
    {width:'60px'}
  } alt=""  />
  <h3>{login}</h3>
  <div>
    <a href={html_url} target="_blank" rel="noopener noreferrer" className='btn btn-dark btn-sm my-1'>More</a>
  </div>
  </div>
 )
}

export default Userlist ;


