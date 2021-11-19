import React, { useState } from "react";
import Input from "../Elements/Input";
import "./UserDetails.css"

const UserDetailForm = (props) =>{
    const [userDetails, setUserDetails] = useState({});
    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        let newDetails = {...userDetails,[name]:value};
        setUserDetails(newDetails);
        props.onSave(userDetails);
    }
    
return <div className="all-inputs-container">
    <Input id="username" isLabel={true} isRequired={true} label="Account Username" type="text" name="username" onChange={handleInputChange}/>
    <Input id="password" isLabel={true} isRequired={true} label="Password" type="password" name="password" onChange={handleInputChange}/>
    <Input id="cpassword" isLabel={true} isRequired={true} label="Confirm Password" type="password" name="cpassword" onChange={handleInputChange}/>
    <Input id="sa-name" isLabel={true} isRequired={true} label="Sub-Agent Name" type="text" name="saName" onChange={handleInputChange}/>
    <Input id="contact" isLabel={true} label="Contact Number" type="tel" name="contact" onChange={handleInputChange}/>

</div>
}

export default UserDetailForm;