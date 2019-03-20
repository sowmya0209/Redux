import React, { Component } from 'react';
import axios from 'axios';

const Header = () => <thead>
    <tr><th>Id</th><th>Name</th><th>email</th><th>Username</th></tr>
</thead>

const Body = (props) =>
    <tbody>
        {props.data.map((user, id) => <tr key={id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.username}</td><td><button className="btn btn-danger" onClick={()=>props.removeuser(user.id)}>Delete</button></td></tr>)}
    </tbody>

function Table(props) {
    let id=React.createRef();
    let name=React.createRef();
    let username =React.createRef();
    let email=React.createRef();
    return (
        <div>
        <table className="table table-hover">
            <Header />
            <Body data={props.data} removeuser={props.removeuser}/>
        </table>
        <form onSubmit={(e)=>props.adduser(e,{id:id.current.value,name:name.current.value,username:username.current.value,email:email.current.value})}>
            ID <input type="number" ref={id}/><br/>
            Name <input type="text"ref={name}/><br/>
            UserName <input type="text"ref={username}/><br/>
            Email <input type="email"ref={email}/><br/>
            <input type="submit" value="Add user"/>
        </form>
        </div>
    )
}

export default class Axiodemo extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                this.setState({ users: result.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    removeuser=(id)=>{     
        this.setState({
        users:this.state.users.filter(user=>user.id!==id)
        })
    }
    adduser=(e,data)=>{
        e.preventDefault()
        this.setState({users:[...this.state.users,data]})
    }
    render() {
        return (
            <Table data={this.state.users} removeuser={this.removeuser} adduser={this.adduser}/>
        )
    }
}
