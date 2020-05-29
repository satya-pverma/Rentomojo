import React,{Component} from 'react';
import ListContact from './ListContact';
import CreateContact from './CreateContact';
import {Route} from 'react-router-dom'; 

class App extends Component {
  state = {
   contact: [
      {
      id:'1',
      name: 'satya',
      mob1: '98765',
      dob:'20/12/2000',
      email1:'abc@gmail.com',
    
     
    },
    {
      id:'2',
      name: 'astha',
      mob1: '98765',
      dob:'21/12/2000',
      email1:'abc@gmail.com',
  
      
    },
    {
      id:'3',
      name: 'shaily',
      mob1: '98765',
      dob:'22/12/2000',
      email1:'abc@gmail.com',
      
    },
    {
      id:'4',
      name: 'rohan',
      mob1: '98765',
      dob:'23/12/2000',
      email1:'abc@gmail.com',
      
    },
    {
      id:'5',
      name: 'sarthak',
      dob:'24/12/2000',
      mob2:'85689',
      email1:'abc@gmail.com',
     
    
    },
    {
      id:'6',
      name: 'ganesh',
      mob1: '98765',
      dob:'20/12/2000',
      email1:'abc@gmail.com',
     
    }
    ],
    

  }
  removeContact =(contact) =>{
    this.setState((currentState)=>({
contact: currentState.contact.filter((c)=>{
return c.id !== contact.id

})
    }))
  }

createContact=() =>{

}

  render(){
  return (
    <div>
      <Route exact path='/' render={()=>(

<ListContact contacts={this.state.contact}
onDeleteContact={this.removeContact}

/>

      )} />
      <Route path='/create' component={CreateContact}
     />
     <div>


     </div>
    
     
    </div>
  );

}
}

export default App;
