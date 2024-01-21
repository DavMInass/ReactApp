import React from "react";

class Adduser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            prof: ""
        }
    }
    render() {
        return (<form ref={(el) => this.myForm = el} className="controlPanel">
            <input placeholder="Name" onChange={(e) => this.setState({ first_name: e.target.value })} />
            <input placeholder="Surname" onChange={(el) => this.setState({ last_name: el.target.value })} />
            <textarea placeholder="Bio" onChange={(e) => this.setState({ bio: e.target.value })} />
            <input placeholder="Prof" onChange={(e) => this.setState({ prof: e.target.value })} />
            <button type="button" onClick={() => {
                this.myForm.reset();
                this.userAdd  = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    bio: this.state.email,
                    prof: this.state.prof
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