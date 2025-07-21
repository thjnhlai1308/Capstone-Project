import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({attemptLoginWithToken}) => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const login = async (formdata) => {
        const username = formdata.get('username')
        const password = formdata.get('password')

        const user = {
            username,
            password
        }

        try {
            const {data} = await axios.post('/api/auth/login', user)
            const {token} = data
            window.localStorage.setItem('token', token)
            attemptLoginWithToken()
            navigate('/')
        } catch (error) {
            console.error(error)
            if(error.status === 401) {
                setError('incorrect credentials')
            } else {
                setError(error.message)
            }
        }
    }
    return (
        <div className="login-container">
            <form className="login-form" action={login}>
            <h1>Login</h1>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <hr />
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
        </div>
    )
}

export default Login