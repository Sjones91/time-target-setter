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
        let finalTarget = totalPallets / employees * companyTarget
        setTarget(finalTarget)
    }
    /*check fields populated and produce*/
    const [display] = `${totalPallets} pallets should take ${employees} team members ${target} minutes to complete.`
    const checkFields = ()=> {
        
    }

    /*Use Effect*/
    useEffect(()=> {
        calcPallets()
        calcTarget()
    },)

    return (
        <div className="delivery-container">
            <h2 className="delivery-header">{title} Delivery</h2>
            <h4>Target: {timeTarget} Minutes</h4>
            <h4 className="component-h4">Please enter delivery quantity</h4>
            <div className="d-f-row jc-space-e">
                <section className="d-f-col">
                    <label className="label-input">Delivery</label>
                    <input id="del-input"type="text" className="input-field pallet-input"onChange={(e)=> setDelPallets(parseInt(e.target.value))}></input>
                </section>
                <section className="d-f-col">
                <label className="label-input">Backstock</label>
                    <input id="bs-input"type="text" className="input-field" onChange={(e)=> setBsPallets(parseInt(e.target.value))}></input>
                </section>
            </div>
            
            <h4 className="component-h4">Please enter team members</h4>
            <div className="employeeInput d-f-row jc-space-e" id="employee-list">
                <input type="text" className="input-field" onChange={(e) => {teamMembers[0] = e.target.value; updateEmployees()}}></input>
                <input type="text" className="input-field" onChange={(e) => {teamMembers[1] = e.target.value; updateEmployees()}}></input>
                <input type="text" className="input-field" onChange={(e) => {teamMembers[2] = e.target.value; updateEmployees()}}></input>
                <input type="text" className="input-field" onChange={(e) => {teamMembers[3] = e.target.value; updateEmployees()}}></input>
            </div>
            <div>
                <h4 className="output-text">{totalPallets} pallets should take {employees} team members {target} minutes to complete.</h4>
            </div>
        </div>
    );
}

export default Delivery;