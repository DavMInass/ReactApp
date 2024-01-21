import React from "react";

class Adduser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            avatar: "",
            email: ""
        }
    }
    render() {
        return (<form ref={(el) => this.myForm = el} className="controlPanel">
            <input placeholder="Name" onChange={(e) => this.setState({ first_name: e.target.value })} />
            <input placeholder="Surname" onChange={(el) => this.setState({ last_name: el.target.value })} />
            <textarea placeholder="Avatar" onChange={(e) => this.setState({ avatar: e.target.value })} />
            <input placeholder="e-mail" onChange={(e) => this.setState({ email: e.target.value })} />
            <button type="button" onClick={() => {
                this.myForm.reset();
                this.userAdd  = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    avatar: this.state.avatar,
                    email: this.state.email
                }
                if(this.props.user){
                    this.userAdd.id = this.props.user.id
                }
            this.props.onAdd(this.userAdd)
        }
        }>Add</button>
        </form>
        )
    }

}

export default Adduser