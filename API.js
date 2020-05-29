import React,{Component} from 'react'
class Api extends Component
{
    constructor()
    {
        super();
        this.state={
            users:null
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result.data)
                this .setState({users:result.data})
            })
        })
    }
    render()
    {
        return(
            <div>
                <h2>fetching api data</h2>
                {
                    this.state.users?
                    this.state.users.map((item,i)=>
                        <div>
                            <p>
                                {i}---{item.first_name}  {item.last_name}  {item.email}
                            </p>
                        </div>
                    )
                    :
                    null
                }
            </div>


        );
    }
}
export default Api
