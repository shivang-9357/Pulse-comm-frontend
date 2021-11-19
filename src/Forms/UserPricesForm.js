import React,{useState} from "react";
import Input from "../Elements/Input";
import "./UserPricesForm.css";

const UserPricesForm = (props)=>{
    const [userPrices, setUserPrices] = useState({pttUserPrice:{}, dispatcherAcc:{},controlStationAcc:{}});
    const handlePttInputChange = (event)=>{
        const {name, value} = event.target;
        let newPttUserPrice = {...userPrices.pttUserPrice,[name]:value };
        let newPrices = {...userPrices,pttUserPrice:newPttUserPrice};
        setUserPrices(newPrices);
        props.onSave(userPrices);
    }
    const handleDisInputChange = (event)=>{
        const {name, value} = event.target;
        let newdispatcherAcc = {...userPrices.dispatcherAcc,[name]:value };
        let newPrices = {...userPrices,dispatcherAcc:newdispatcherAcc};
        setUserPrices(newPrices);
        props.onSave(userPrices);
    }
    const handleConInputChange = (event)=>{
        const {name, value} = event.target;
        let newControlStationAcc = {...userPrices.controlStationAcc,[name]:value };
        let newPrices = {...userPrices,controlStationAcc:newControlStationAcc};
        setUserPrices(newPrices);
        props.onSave(userPrices);
    }
    return <div className="all-inputs-container2">
        <p className="info-text"><i>(Prices have to be greater than or equal to the Base Price of Parent Agent.)</i></p>
        <table>
            <tbody>
            <tr>
                <td></td>
                <td><p>Monthly License</p></td>
                <td><p>Quarterly License</p></td>
                <td><p>Half-Yearly License</p></td>
                <td><p>Yearly License</p></td>
                <td><p>One-Time License</p></td>
            </tr>
            <tr>
            <td><h3>PTT User Price</h3></td>
                <td>
                    <Input type="number" name="monthly" onChange={handlePttInputChange}/>
                </td>
                <td>
                    <Input type="number" name="quarterly" onChange={handlePttInputChange}/>
                </td>
                <td>
                    <Input type="number" name="halfYearly" onChange={handlePttInputChange}/>
                </td>
                <td>
                    <Input type="number" name="yearly" onChange={handlePttInputChange}/>
                </td>
                <td>
                    <Input type="number" name="oneTime" onChange={handlePttInputChange}/>
                </td>
            </tr>
            <tr>
            <td><h3>Dispatcher Account Price</h3></td>
            <td>
                    <Input type="number" name="monthly" onChange={handleDisInputChange}/>
                </td>
                <td>
                    <Input type="number" name="quarterly" onChange={handleDisInputChange}/>
                </td>
                <td>
                    <Input type="number" name="halfYearly" onChange={handleDisInputChange}/>
                </td>
                <td>
                    <Input type="number" name="yearly" onChange={handleDisInputChange}/>
                </td>
                <td>
                    <Input type="number" name="oneTime" onChange={handleDisInputChange}/>
                </td>
            </tr>
            <tr>
            <td><h3>Control Station Account Price</h3></td>
            <td>
                    <Input type="number" name="monthly" onChange={handleConInputChange}/>
                </td>
                <td>
                    <Input type="number" name="quarterly" onChange={handleConInputChange}/>
                </td>
                <td>
                    <Input type="number" name="halfYearly" onChange={handleConInputChange}/>
                </td>
                <td>
                    <Input type="number" name="yearly" onChange={handleConInputChange}/>
                </td>
                <td>
                    <Input type="number" name="oneTime" onChange={handleConInputChange}/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}

export default UserPricesForm;