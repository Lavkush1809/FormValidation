
import './App.css';
import {useState} from 'react'

function App() {
  const[name,setName]=useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [Password, setPassword] = useState("")
  const [username,setUsername]=useState("")
  const[nameError,setNameerror]=useState("")
  const[emailError,setEmailerror]=useState("")
  const[phonenumberError,setPhonenumbererror]=useState("")
  const[passworderror,setPassworderror]=useState("")
  const[genderError,setGendererror]=useState("")
  const[emptyError,setEmptyerror]=useState("")
  const resetErrorDefault=()=>{
    setNameerror("")
    setEmailerror("")
    setGendererror("")
    setPhonenumber("")
    setPassworderror("")
  }
  const validate=()=>{
   if(
    name===""||email===""||gender===""||phonenumber===""||Password===""
   ){
    setEmptyerror("All fields are mandatory")
    setUsername("")
    return false
   }
   if(!name.match(/^[A-Za-z0-9- ]+$/)){
     setNameerror("Name is not Alphanumeric")
     setUsername("")
     return false
    }
   if(!email.includes("@")){
    setEmailerror("Email must contain @")
    setUsername("")
    return false
   }
   if(!gender.match(/Male|Female|Other/i)){
    setGendererror("Please identify as male,female or other")
    setUsername("")
    return false
   }
   if(!phonenumber.match(/^[0-9]+$/)){
    setPhonenumbererror("phone number must contain only numbers")
    setUsername("")
    return false;
   }
   if(Password.length<6){
    setPassworderror("Password must contain atleast 6 letters")
    setUsername("")
    return false;
   }
  }
  const handleSubmit=(e)=>{
  e.preventDefault()
  resetErrorDefault()
  const isValid=validate()
  if(isValid){
    setName("")
    setEmail("")
    setGender("")
    setPassword("")
    setPhonenumber("")
    resetErrorDefault()
    
  }
  setUsername(email.substring(0,email.indexOf("@")))
  }
  return (
      <div className='App'>
        <h1>Student Registration Form</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
      <span>{nameError}</span>
      <br></br>
      <input type="text" placeholder='Enter your Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
      <span>{emailError}</span>
      <br></br>
      <select name = "Select Gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
        <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
      </select>
      {genderError}<br/>
      <br></br>
      <input type="text" placeholder='Phone number' value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/><br/>
      <span>{phonenumberError}</span>
      <br></br>
      <input type="text" placeholder='Password'value={Password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <span>{passworderror}</span>
      <br></br>
      <span>{emptyError}</span>
      <input type="button" onClick ={handleSubmit}value="Submit"/><br/>
     </form>
     <h2>{username ? "Hello  " + username :""}</h2>
    </div>
  );
}

export default App;
