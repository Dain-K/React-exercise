import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../App.css";

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
        <div className='Login-container'>
            <h4>로그인</h4>
            <form>
                <div className='text_area'>
                    <input 
                        type='text' 
                        name='input_id'
                        placeholder='생년월일' 
                        className='text_input'
                        value={inputId} 
                        onChange={handleInputId} 
                    />
                </div>
                <div className='text_area'>
                    <input 
                        type='password' 
                        name='input_pw'
                        placeholder='군번'
                        className='text_input' 
                        value={inputPw} 
                        onChange={handleInputPw} 
                    />
                </div>
                <div>
                    <button className='login-btn' type='button' onClick={onClickLogin}>Login</button>
                </div>
            </form>
           
        </div>
    )
}
 
export default Login;