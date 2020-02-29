import React, { useState, useEffect } from 'react';
import './StudentForm.css';

const StudentForm = ({ mode }) => {
    const [sendRequest, setSendRequest] = useState(false);

    const [formValue, setFormValue] = useState({ 'firstName': '', 'lastName': '' });

    const onChageFormElement = event => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    useEffect(() => {
        if(sendRequest) {
            console.log('sending')
        }
    }, [sendRequest]);

    console.log("formvalue", formValue)

    return (
        <div className="student-form">
            <div className="student-form__wrapper">
                <div className="student-form__wrapper__input-wrapper">
                    <label>First Name</label>
                    <input type="text" value={formValue.firstName} name="firstName" onChange={onChageFormElement} />
                </div>
                <div className="student-form__wrapper__input-wrapper">
                    <label>Last Name</label>
                    <input type="text" value={formValue.lastName} name="lastName" onChange={onChageFormElement} />
                </div>
                <div>
                    <button onClick={() => setSendRequest(sendRequest ? false : true)}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default StudentForm;