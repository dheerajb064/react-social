import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">FaceBook</h3>
                    <span className="loginDesc">Connect with your friends around the world!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="username" type="text" className="loginInput" />
                        <input placeholder="email" type="email" className="loginInput" />
                        <input placeholder="password" type="password" className="loginInput" />
                        <input placeholder="confirm password" type="password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login into Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
