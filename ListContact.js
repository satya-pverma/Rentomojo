import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class ListContact extends Component
{
static propTypes ={

	contact: PropTypes.array.isRequired,
	onDeleteContact:PropTypes.func.isRequired,
}
state = {
	Querry: ''
}
updateQuery =(Querry) =>{
	this.setState(() =>({
		Querry: Querry.trim()
	}))
}
clearQuery=()=>{

this.updateQuery('')
}
	render()
	{

		const { Querry} = this.state
		const { contacts,onDeleteContact}= this.props
		const showingContacts = Querry ===''? contacts
		: contacts.filter((c)=>(
			c.name.toLowerCase().includes(Querry.toLocaleLowerCase())

		))



		return(
			<div>
		<div className="list-contacts">
			<div className="container-fluid bg-primary" style={{height:'4rem'}}>

			</div>
			
			<div className=" container text-center search">
				<input
				className="search-contacts mt-3 mb-3 container-fluid"
				type="text" style={{height:'3rem'}}
				placeholder="search"
				value={Querry}
				onChange={(event) => this.updateQuery(event.target.value)}
				/>
	
</div>
				{
					showingContacts.length !== contacts.length && (
						<div className="showing-contacts container text-center mb-2">
							<span>Now Showing {showingContacts.length} of {contacts.length} 
							</span>
							<button className="btn" onClick={this.clearQuery}>show all</button>

						</div>
					)
				}


				<ol className="contact-list container">
					{
						showingContacts.map((contact) =>(

							<ol key={contact.id} className ="contact-list-item">
								<div className="contact-detail bg-light" style={{backgroundColor:'grey'}}>
						<h4>{contact.name}</h4>
						<p>{contact.email1}</p>
						<button className="btn" onClick={()=>onDeleteContact(contact)} className="contact-remove float-right" style={{marginTop:'-60px',borderRadius:'50%'}}>
									X
								</button>
								</div>
								
								
							</ol>
								
							))
							

					}
                </ol>

			</div>
			<div>
			<Link to='/create'>
				add contact
			</Link>
			</div>
			
			
			</div>
		)
	}



}


export default ListContact
