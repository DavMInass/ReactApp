import React from "react"
import Adduser from "./Adduser"
import{ IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }    
    user = this.props.user
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <IoHammerSharp className="edit-icon"
                
                onClick={
                    () => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }
                }/>
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <br></br>
                <img src={this.user.avatar} />
                <p className="prof">{this.user.email}</p>
                <br></br>
                <p className="bio">{this.user.bio}</p>
                <br></br>
                {this.state.editForm  && <Adduser user={this.user}  onAdd={this.props.onEdit}/> }
            </div>
        )
    }

}

export default User