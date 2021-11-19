import React, {useState} from "react";
import UserDetailForm from "../Forms/UserDetailForm";
import UserPricesForm from "../Forms/UserPricesForm";
import "./NewSubAgent.css";


const NewSubAgent = () => {

    const [formData, setFormData] = useState({userDetails:{}, userPrices:{}});

    const submitHandler= async(event)=>{
        event.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('http://localhost:5000/api/dashboard/sa-management/create-new-sa',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDetails:formData.userDetails,
                userPrices:formData.userPrices
            })
        });
        const responseData = await response.json();
        console.log(responseData);
        } catch (error) {
            console.log(error);
        }
        document.location.reload();
        alert("Sub-Agent added successfully!");

    }
    const handleDetails = (details)=>{
        let newFormData = {...formData, userDetails:details};
        setFormData(newFormData);
    }
    const handlePrices = (prices)=>{
        let newFormData = {...formData, userPrices:prices};
        setFormData(newFormData);
    }
return <div className="component-container">
    <div className="form-head">
        <h2>CREATE NEW SUB-AGENT</h2>
    </div>
    <form id="user-form" onSubmit={submitHandler}>
    <div className="user-details">
        <UserDetailForm onSave={handleDetails}/>
    </div>
    <div className="user-prices">
    <UserPricesForm onSave={handlePrices}/>
    <div className="save-form-btn">
        <button >SAVE</button>
    </div>
    </div>
    </form>
</div>
}

export default NewSubAgent;