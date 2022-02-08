import "../../App.css";
import React, { useEffect, useState } from 'react';

function Bread(deliveryTitle) {
    /*pallet count*/
    const target = 10
    const [delPallets, setDelPallets] = useState(0);
    const [bsPallets, setBsPallets] = useState(0);
    const [totalPallets,setTotalPallets] = useState(0);
    const calcPallets = () => {
        setTotalPallets(bsPallets + delPallets)
    }
    /*Employee count*/
    let inputFields = {
        input1:"",
        input2:"",
        input3:"",
        input4:"",
    }
    let counter =0
    const [employees,setEmployees] = useState(0);
    const updateEmployees = ()=> {
        setEmployees(0)
        for(const props in inputFields) {
            if(inputFields[props] !==""){
                counter +=1;
            }
        }
        setEmployees(counter)
        console.log(employees)
    };
    

    useEffect(()=> {
        calcPallets()
        
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
                <input type="text" className="input-field" onInput={(e) => {inputFields.input1 = e.target.value; }}></input>
                <input type="text" className="input-field" onInput={(e) => {inputFields.input2 = e.target.value; }}></input>
                <input type="text" className="input-field" onInput={(e) => {inputFields.input3 = e.target.value; }}></input>
                <input type="text" className="input-field" onInput={(e) => {inputFields.input4 = e.target.value; }}></input>
            </div>
            <button type="submit" onClick={()=> updateEmployees()}>Submit</button>
            <div>
                <h3 className="output-text">{totalPallets} pallets should take {employees} team members 10 minutes to complete.</h3>
            </div>
        </div>
    );
}

export default Bread;