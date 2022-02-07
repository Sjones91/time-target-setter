import "../../App.css";
import React, { useEffect, useState } from 'react';

function Bread() {
    /*pallet count*/
    const target = 10
    const [delPallets, setDelPallets] = useState(0);
    const [bsPallets, setBsPallets] = useState(0);
    const [totalPallets,setTotalPallets] = useState(0);
    const calcPallets = () => {
        setTotalPallets(bsPallets + delPallets)
    }
    /*Employee count*/
    let 

    const [employees,setEmployees] = useState(0);
    const updateEmployees = ()=> {
        let counter = 0
        setEmployees(0)
        const employeeList = document.getElementById("employee-list")
        const employeeInputs = employeeList.getElementsByTagName("input")

        for(let i = 0; i < employeeInputs.length; i++){
            let currentInput = employeeInputs[i]

            console.log(currentInput)
        }
        setEmployees(counter)
    }


    useEffect(()=> {
        calcPallets()
        updateEmployees()
    },)

    return (
        <div className="delivery-container">
            <h2 className="delivery-header">Bread Delivery</h2>
            
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
            <div className="d-f-row jc-space-e" id="employee-list">
                <input type="text" className="input-field" onChange={() => updateEmployees()}></input>
                <input type="text" className="input-field" onChange={() => updateEmployees()}></input>
                <input type="text" className="input-field" onChange={() => updateEmployees()}></input>
                <input type="text" className="input-field" onChange={() => updateEmployees()}></input>
            </div>
            
            <div>
                <h3 className="output-text">{totalPallets} pallets should take {employees} team members 10 minutes to complete.</h3>
            </div>
        </div>
    );
}

export default Bread;