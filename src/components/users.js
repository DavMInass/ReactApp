import React from "react";
import User from "./user"


class Users extends React.Component {
    render() {
        if (this.props.users.length > 0)
            return (<div>
                {this.props.users.map((user) => (<User onEdit={this.props.onEdit} onDelete={this.props.onDelete} user={user} />))}
            </div>)
        else
            return (<div className="noUser">
                <h3>There's no members</h3>
            </div>)
    }

}

export default Users