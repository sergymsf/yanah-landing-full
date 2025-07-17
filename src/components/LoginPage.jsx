
import React, { useEffect } from 'react';
// import 'boxicons/css/boxicons.min.css';

export default function LoginPage() {
  useEffect(() => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    const handleRegister = () => container.classList.add('active');
    const handleLogin = () => container.classList.remove('active');

    registerBtn.addEventListener('click', handleRegister);
    loginBtn.addEventListener('click', handleLogin);

    return () => {
      registerBtn.removeEventListener('click', handleRegister);
      loginBtn.removeEventListener('click', handleLogin);
    };
  }, []);

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0; 
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Poppins' , sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(90deg, #e2e2e2, #c9d6ff);
}

.container {
    position: relative;
    width: 850px;
    height: 550px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin : 20px;
}

.form-box {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-align: center;
    padding: 40px;
    z-index: 1;
    transition: ease-in-out 0.6s, visibility 0s 1s;
}

.container.active .form-box {
    right: 50%;
}

.form-box.register {
    visibility: hidden;
}

.container.active .form-box.register {
    visibility: visible;
}

from{
    width: 100%;
}

.container h1 {
    font-size: 36px;
    margin: -10px 0px;
}

.input-box {
    position: relative;
    margin: 30px 0;
}

.input-box input {
    width: 100%;
    padding: 13px 50px 13px 20px;
    border-radius: 8px;
    background: #eee;
    border: none;
    outline: none;
    font-size: 16px;
    color: #333;
    font-weight: 500;
}

.input-box input ::placeholder {
    color: #888;
    font-weight: 400;
}
.input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #888;

}

.forgot-link {
    margin: -15px 0 15px;
}

.forgot-link a {
    color: #333;
    text-decoration: none;
    font-size: 14.5px;
}

.btn {
    width: 100%;
    height: 48px;
    padding: 13px;
    border-radius: 8px;
    background: #333;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
}

.container p {
    margin: 15px 0;
    font-size: 14.5px;
}

.social-icons a {
    display: inline-flex;
    padding: 10px;
    border: 2px solid #333;
    border-radius: 8px;
    font-size: 24px;
    color: #333;
    text-decoration: none;
    margin: 0 8px;
}  

.toggle-box {
    position: absolute;
    width: 100%;
    height: 100%;
}

.toggle-box::before {
    content: '';
    position: absolute;
    left: -250%;
    width: 300%;
    height: 100%;  
    background: #333;
    color: #fff;
    border-radius: 150px;
    z-index: 2;
    transition: ease-in-out 1.8s;
}

.container.active .toggle-box::before {
    left: 50%;
}

.toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 2;
    transition: ease-in-out 0.6s;
}

.toggle-panel.toggle-left {
    left: 0;
}

.container.active .toggle-panel.toggle-left {
    left: -50%;
}

.toggle-panel.toggle-right {
    right: -50%;
    transition-delay: 0.6s;
}

.container.active .toggle-panel.toggle-right {
    right: 0;
    transition-delay: 1.2s;
}

.toggle-panel .btn{
    background: transparent;
    color: #fff;
    width: 160px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid #fff;
    cursor: pointer;
}

@media screen and (max-width: 650px) {
    .container {
        margin: 0;
        height: 100vh;
    }
    
    .form-box {
        width: 100%;
        height: 70%;
        bottom: 0;
    }

    .toggle-box::before {
        left: 0;
        top: -270%;
        width: 100%;
        height: 300%;
        border-radius: 20vw;
    }

    .container.active .form-box {
        right: 0;
        bottom: 30%;
    }

    .form-box::before{
        left: 0;
        top: -270%;
        width: 100%;
        height: 300%;
        border-radius: 20vw;
    }
    
    .container.active .toggle-box::before {
        boerder-radius: 5vh;
        left: 0;
        top: 70%;
    }

    .toggle-panel {
        width: 100%;
        height: 30%;
    }
   
    .toggle-panel.toggle-left {
        top: 0;
    }
    
    .container.active .toggle-panel.toggle-left {
        left: 0;
        top: -30%;
    }

    .toggle-panel.toggle-right {
        right: 0;
        bottom: -30%;
    }

    .container.active .toggle-panel.toggle-right {
        bottom: 0;
    }
    
@media screen and (max-width: 400px) {
    .form-box {
        padding: 20px;
    }

    .toggle-panel h1{
        font-size: 30px;
    }

}

}
      `}</style>

      <div className="container">
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bx-user-circle"></i> 
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bx-lock"></i> 
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or login with</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-apple"></i></a>
              <a href="#"><i className="bx bxl-google"></i></a>
            </div>    
          </form>
        </div>

        <div className="form-box register">
          <form>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bx-user-circle"></i> 
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bx-envelope"></i> 
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bx-lock"></i> 
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with</p>
            <div className="social-icons">
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-apple"></i></a>
              <a href="#"><i className="bx bxl-google"></i></a>
            </div>    
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Welcome to Yanah</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn">Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
