import React, { useEffect, useState } from 'react'

const Table = () => {

    const [myPot,setPosts]=useState([]);

    useEffect(()=>{
        getdata()
    },[])

    async function getdata(){
        const response = await fetch('https://dummyjson.com/products');
        const data=await response.json();
        console.log(data.products)
        setPosts(data.products);
      
    }
  return (
   <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Completed</th>
      
    </tr>
  </thead>
  <tbody>
  {
        myPot.length>0?
        myPot.map((post)=>(
            
            <tr key={post.id}>
            <th scope="row">{post.id} </th>
            <td>{post.title}</td>
            <td>{post.description}</td>
          
          </tr> 
        )):<>No Data</>
    }
    
    
  </tbody>
</table>
   </div>
  )
}

export default Table
