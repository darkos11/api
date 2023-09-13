import React, {useEffect, useState} from 'react'
import axios from'axios'
const UserList = () => {
    const [data, setData]= useState([])
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        setData(response.data)
        console.log(response)
       })

    },[])
    return(
        <>
        <div style={{background:"black", textAlign:"center", color:"white", marginTop:"200px"}}>
        {data.map((e)=> (<div> First Name : {e.name} </div>))}
        </div>
        </>
    )

}



export default UserList