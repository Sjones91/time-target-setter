import "../../App.css";
import React, { useEffect, useState } from 'react';

function Delivery(props) {
    const {timeTarget, title} = props;

    /*pallet count*/
    const companyTarget = timeTarget
    const [delPallets, setDelPallets] = useState(0);
    const [bsPallets, setBsPallets] = useState(0);
    const [totalPallets,setTotalPallets] = useState(0);
    const calcPallets = () => {
        setTotalPallets(bsPallets + delPallets)
    }
    
    /*Employee count*/
    
    const [employees,setEmployees] = useState(0);
    let teamMembers= []
    
    const updateEmployees = ()=>{
        setEmployees(teamMembers.length)
    };

    /*Calculate Time Target*/
    const [target,setTarget] = useState(0)
    const calcTarget = ()=>{
        let finalTarget = Math.floor(totalPallets / employees * companyTarget)
        setTarget(finalTarget)
    }
    /*check fields populated and produce*/
    const display = `${totalPallets} pallets should take ${employees} team members ${target} minutes to complete.`
    const [message, setMessage] = useState(false)
    const checkFields = ()=> {
        let palletsField = false;
        let membersField = false;

        if( totalPallets >= 1) {
            palletsField = true;
        };
        if(employees >= 1) {
            membersField =true;
        };
        if(palletsField === true && membersField === true) {
            setMessage(true)
        } else {
            setMessage(false)
        }
    }
    /**Reset form */
    const resetInputs = ()=> {
        setEmployees(0);
        setTotalPallets(0);
        teamMembers = [];
        const inputs = document.getElementsByTagName("input");
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].type == "text"){
                inputs[i].value = "";
            }
            inputs[i].style.borderColor = "rgb(32, 92, 148)"
        }
    }

    /*Use Effect*/
    useEffect(()=> {
        calcPallets()
        calcTarget()
        checkFields()
    },)

    return (
        <div className="delivery-container">
            <h2 className="delivery-header">{title} Delivery</h2>
            <h4>Target: {timeTarget} Minutes</h4>
            <div className="d-f-row jc-space-e">
                <section className="d-f-col">
                    <label className="label-input">Delivery</label>
                    <input id="del-input"type="text" className="input-field pallet-input"
                    onChange={(e)=> 
                        {if(e.target.value >= 0){
                            setDelPallets(parseFloat(e.target.value))
                            e.target.style.borderColor = "rgb(32, 92, 148)";
                        } else{
                            setDelPallets(0)
                            e.target.style.borderColor = "red";
                            }
                        }}>
                    </input>
                </section>
                <section className="d-f-col">
                <label className="label-input">Backstock</label>
                    <input id="bs-input"type="text" className="input-field" 
                    onChange={(e)=> 
                        {if(e.target.value >= 0){
                            setBsPallets(parseFloat(e.target.value))
                            e.target.style.borderColor = "rgb(32, 92, 148)";
                        } else{
                            setBsPallets(0)
                            e.target.style.borderColor = "red";
                            }
                        }}
                    >

                    </input>
                </section>
            </div>
            <h4 className="component-h4">Team Members</h4>
            <div className="employeeInput d-f-row jc-space-e" id="employee-list">
                <input type="text" className="input-field" onChange={(e) => {teamMembers[0] = e.target.value; updateEmployees()}}></input>
                <input type="text" className="input-field" onChange={(e) => {teamMembers[1] = e.target.value; updateEmployees()}}></input>
                <input type="text" className="input-field" onChange={(e) => {teamMembers[2] = e.target.value; updateEmployees()}}></input>
                <input type="text" className="input-field" onChange={(e) => {teamMembers[3] = e.target.value; updateEmployees()}}></input>
            </div>
            <button type="submit" className="btn" onClick={resetInputs}>Reset form</button>
            <div>
                <h4 className="output-text">{message? display : "Please enter workload and employees"}</h4>
            </div>
        </div>
    );
}

export default Delivery;