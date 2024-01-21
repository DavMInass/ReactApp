import React from "react";
import Header from "./components/header"
import Users from "./components/users"
import Adduser from "./components/Adduser";
import axios from 'axios';

const baseUrl1 = "https://reqres.in/api/users?page=1"



class App extends React.Component {
  constructor(props){
    super(props)

    axios.get(baseUrl1).then((res) => {
      this.setState({users: res.data.data});
    })

    this.state = {
        users: [
           
        ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)

}

  render() {
    return (<div>
      <Header title="Our Team" />
      <main className="main">
        <Users  onEdit={this.editUser} users={this.state.users} onDelete={this.deleteUser}/>
      </main>
      <aside className="aside">
        <Adduser onAdd={this.addUser}/>
      </aside>
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter(el => el.id !== id) 
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) { 
    const id = this.state.users.length - 1
    this.setState({ users: [...this.state.users, {id, ...user}]}) 
  }
}



export default App