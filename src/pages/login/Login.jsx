import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FaceBook</h3>
                    <span className="loginDesc">Connect with your friends around the world!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="email" type="email" className="loginInput" />
                        <input placeholder="password" type="password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forget Password?</span>
                        <button className="loginRegisterButton">Create Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
