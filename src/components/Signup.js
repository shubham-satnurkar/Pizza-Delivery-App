import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { addUSer } from '../api/Myservices';

export default function Signup() {
    const [state, setState] = useState({ name: '', email: '', pass: '', mobile: '' });
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");

    const navigate = useNavigate();

    const handler = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    function postUser(event) {
        event.preventDefault();
        let result = validate()
        if (result) {
            addUSer(state)
                .then(res => {
                    if (res) {
                        alert("User Added")
                        navigate("/login")
                    }
                })
                .catch(err => console.log(err))
        }

    }
    const validate = () => {
        let result1 = validate1();
        let result2 = validate2();
        let result3 = validate3();
        let result4 = validate4();

        return result1 && result2 && result3 && result4;
    }
    const validate1 = () => {
        let regEx = new RegExp("^[A-Z a-z]*$");

        if (state.name === "") {
            setError(true)
            setText("required")
            return false
        }
        else if (!regEx.test(state.name)) {
            setError(true)
            setText("name should contain only alphabets ")
            return false

        }
        else {
            setText("")
            return true
        }
    }
    const validate2 = () => {
        let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.com]+$"
        );
        if (state.email === "") {
            setError2(true)
            setText2("required")
            return false
        }
        else if (!regEx.test(state.email)) {
            setError2(true)
            setText2("enter valid email address")
            return false

        }
        else {
            setText2("")
            return true
        }
    }
    const validate3 = () => {
        let regEx = new RegExp("^[A-Za-z0-9]*$");

        if (state.pass === "") {
            setError3(true)
            setText3("required")
            return false
        }
        else if (!regEx.test(state.pass)) {
            setError3(true)
            setText3("password should contain only alphabets and digits")
            return false

        }
        else {
            setText3("")
            return true
        }
    }
    const validate4 = () => {
        let regEx = new RegExp("^[0-9]*$");

        if (state.mobile === "") {
            setError4(true)
            setText4("required")
            return false
        }
        else if (!regEx.test(state.mobile)) {
            setError4(true)
            setText4("Number should contain only digits")
            return false

        }
        else {
            setText4("")
            return true
        }
    }

    return (
        <>
            <section className='signup-form pt-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <form onSubmit={postUser} className='bg-light py-5 px-4 shadow'>
                                <h2 className='mb-4'>Sign Up</h2>
                                <div className="mb-3">
                                    <input type="text" name='name' className="form-control" id="name" placeholder='Full Name' onChange={handler} onBlur={validate1} />
                                    {error ? <p className='text-danger'>{text}</p> : ""}
                                </div>
                                <div className="mb-3">
                                    <input type="email" name='email' className="form-control" id="email" placeholder='email' onChange={handler} onBlur={validate2} />
                                    {error2 ? <p className='text-danger'>{text2}</p> : ""}
                                </div>
                                <div className="mb-3">
                                    <input type="password" name='pass' className="form-control" id="password" placeholder='password' onChange={handler} onBlur={validate3} />
                                    {error3 ? <p className='text-danger'>{text3}</p> : ""}
                                </div>
                                <div className="mb-3">
                                    <input type="text" name='mobile' className="form-control" id="mobile" placeholder='mobile no.' onChange={handler} onBlur={validate4} />
                                    {error4 ? <p className='text-danger'>{text4}</p> : ""}
                                </div>

                                <button type="submit" className="btn btn-dark">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
