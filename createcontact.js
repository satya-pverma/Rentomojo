import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import serializeForm from 'form-serialize'

class CreateContact extends Component
{

handleSubmit=(e) =>{
    e.preventDefault()
    const values=serializeForm(e.target, {hash:true})
    if(this.props.onCreateContact){
        this.props.onCreateContact(values)
    }

}


    render()
    {
        return(
                <div>
                    
                    <div className="header container-fluid bg-primary" style={{height:'50px'}}>
                      <h3>RM PHONEBOOK</h3>
                    </div>
                    
                     <div className="container bg-light" style={{border:'3px silid grey', height:'450px'}}>
                    
                     <form onSubmit={this.handleSubmit}className="create-contact-form container "  >
                     <Link
                     className="close-create-contact mb-5"
                     to='/'>Go to back
                     </Link>
                     <div className="mt-4 ">

                     </div>
                         <div className="create-contact-details container mb-2 " style={{width:'100%'}} >
                                Name<input className="btn-block" style={{border:'2px solid grey', height:'40px'}} type="text" name="name"
                                    placeholder="name"  /><br />
                                DOB<input type="date" name="Dob" style={{border:'2px solid grey',height:'40px',marginBottom:'15px',width:'100%'}} />
                                Contact<input className="btn-block" style={{border:'2px solid grey', height:'40px'}} type="text" name="contact"
                                    placeholder="name"  /><br />
                                   
                                   email<input className="btn-block" style={{border:'2px solid grey', height:'40px'}} type="text" name="email"
                                    placeholder="name"  /><br />
                                    <button className="btn bg-success text-light float-right">Add Contact</button><br />
                        </div>

                     </form>
                     </div>
                </div>
            
        )
    }

}
export default CreateContact
