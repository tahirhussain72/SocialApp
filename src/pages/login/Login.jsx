import "./login.css"

export default function Login() {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social App</h3>
            <span className="loginDesc"> Connect with friends and the world around you on Social App :)</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput"/>
                <input placeholder="Password" className="loginInput"/>
                <button className="loginButton">Login In</button>
                <span className="loginForgotButton">Forgot Password</span>
                <button className="loginregisterationButton">Create New Account</button>
            </div>
        </div>
    </div>
      
    </div>
  )
}
