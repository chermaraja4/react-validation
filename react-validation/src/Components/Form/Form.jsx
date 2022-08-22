import "./Style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect,useReducer } from "react";


export default function RegisterForm(){
 const initialState={
    name:"",
    error_name:"",
    email:"",
    error_email:"",
    mobile:"",
    error_mobile:"",
    country:"",
    error_country:"",
    city:"",
    error_city:"",
    state:"",
    error_state:"",
    message:"",
    error_message:"",
 }



 const reducer=(state,action)=>{  
    switch (action.type){ 
        case "email":{   
           let  invalidText=""          
            if( !action.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i)){                   
                   invalidText="invalid email format"
            }
            return {...state,[action.input]:invalidText ?"":action.value, error_email:invalidText} 
          }
          case "mobile":{                 
           let  invalidText=""
           if( /^[\s()+-]*([0-9][\s()+-.]*){0,18}$/.test(action.value) ){ 
             return {...state,[action.input]:action.value.length>10 ?"":action.value, error_mobile:invalidText}                 
            }
            else{
                return {...state, error_mobile:"invalid mobile number"} 
            }
         
           
          }
          case action.type:{        
            const letters = /^[A-Za-z]+$/;
           let  invalidText=""
            if(!action.value.match(letters)){   
                   invalidText=`invalid ${action.input} `                  
            }
            return {...state,[action.input]:invalidText ? "":action.value,["error_"+action.input]:invalidText} 
          }
        default:
            return state;
    }
   

 }
 const [state,dispatch]=useReducer(reducer,initialState);
 const[diasbleButton,setDisableButton]=useState(true)

 const onChange=(e)=>{ 
  
    const action={
        type:e.target.name,
        input:e.target.name,
        value:e.target.value
    }  
    dispatch(action)
 }

 
 const SubmitData=()=>{
        alert("successfully") 
  
 }

 useEffect(()=>{
  
    if(state.name && state.email &&  state.mobile && state.country && state.city && state.state && state.message){
        setDisableButton(false)
    }else{
        setDisableButton(true)
    }
 },[initialState])

    return(
        <div className="Formcard"> 

       <Row>
          <Col xs={12} md={6} sm={6} lg={6}>      
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control  placeholder="Enter Name" onChange={onChange} name="name"/>
            <Form.Text className="text-muted">
           {state.error_name}
            </Form.Text>
        </Form.Group>
        </Col>
        <Col xs={12} md={6} sm={6} lg={6} >    
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control placeholder="Enter email" onChange={onChange} name="email"/>
          <Form.Text className="text-muted">
          {state.error_email}
          </Form.Text>
        </Form.Group></Col>
      </Row>
      <Row>
         <Col xs={12} md={6} sm={6} lg={6}>      
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Mobile</Form.Label>
           <Form.Control placeholder="Enter Mobile" onChange={onChange} name="mobile" value={state.mobile}/>       
           <Form.Text className="text-muted">
          {state.error_mobile}
          </Form.Text>
        </Form.Group>
        </Col>
        <Col xs={12} md={6} sm={6} lg={6}>      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control placeholder="Enter Country" onChange={onChange} name="country"/>       
          <Form.Text className="text-muted">
          {state.error_country}
          </Form.Text>
        </Form.Group></Col>
      </Row>
      <Row>
         <Col xs={12} md={6} sm={6} lg={6}>      
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control  placeholder="Enter City" onChange={onChange} name="city"/>     
          <Form.Text className="text-muted">
          {state.error_city}
          </Form.Text>
         </Form.Group>
        </Col>
        <Col xs={12} md={6} sm={6} lg={6}>      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control  placeholder="Enter State" onChange={onChange} name="state"/>       
          <Form.Text className="text-muted">
          {state.error_state}
          </Form.Text>
        </Form.Group></Col>
      </Row>
      <Row className="align-items-center justify-content-center">
          <Col>      
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Enter Message" onChange={onChange} name="message"/>      
     
        </Form.Group>
        </Col>    
      </Row>

      <div className="d-flex justify-content-center"> 
        <Button variant="primary"  onClick={SubmitData} disabled={diasbleButton}>
          Submit
        </Button>
     </div>
       
        </div>
    )
} 