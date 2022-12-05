import React from "react";
import '../../App.css';
import axios from "axios";

class test extends React.Component {
    state = {
        ListUsers: []
    }
    componentDidMount(){
        axios.get("https://638c3beceafd555746a28741.mockapi.io/api/users")
        .then(res => {
            console.log('Check', res.data)
            this.setState({
                ListUsers: res && res.data ? res.data : []
            })
        })
    }
    render() {
        let {ListUsers} = this.state;
        return(
            <div>
                {ListUsers && ListUsers.length > 0 && ListUsers.map((item, index) => {
                    return (
                        <div className="user" key={item.id}>
                            {index +1} - {item.name} - {item.account}
                        </div> 
                    )
                }
                )
                }
            </div>
        )
    }
}
export default test;