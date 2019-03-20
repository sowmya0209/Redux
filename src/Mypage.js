import React from 'react'

function Mypage() {
  return (
    <div>
      <Myheader/>
      <MyContent blog={{name:"Cooking", author:"Sai",title:"Cook Fun"}}/>
      <Myfooter visitor={23}/>
    </div>
  )
}

let Myheader=()=><h1 className="header">Welcome To My React App</h1>
   
function MyContent(props){
return <h4>Name: {props.blog.name}<br/>Author: {props.blog.author}<br/>Title: {props.blog.title}</h4>
}

let Myfooter=(props)=><h4>No of visitor {props.visitor}</h4>

export default Mypage

