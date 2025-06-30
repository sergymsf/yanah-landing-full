import { useEffect } from 'react';
import yanah from '../assets/yanah.png';

export default function LoginPage() {
  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (!container || !registerBtn || !loginBtn) return;

    const handleRegister = () => container.classList.add("active");
    const handleLogin = () => container.classList.remove("active");

    registerBtn.addEventListener("click", handleRegister);
    loginBtn.addEventListener("click", handleLogin);

    return () => {
      registerBtn.removeEventListener("click", handleRegister);
      loginBtn.removeEventListener("click", handleLogin);
    };
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[#f6eee0] dark:bg-gray-700 text-black dark:text-white flex flex-col items-center justify-center relative">
      <a className="fixed top-5 left-1/2 transform -translate-x-1/2" href="/">
        <img src={yanah} alt="T-Shirt" className="h-20 w-20 hover:scale-110 transition-transform duration-500" />
      </a>

      <div
        id="container"
        className="relative bg-green-800 dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden w-[50%] max-w-full min-w-[800px] min-h-[480px] grid"
      >
        {/* Sign Up Form */}
        <div className="absolute top-0 left-0 w-1/2 h-full transition-all duration-500 form-container sign-up">
          <form className="flex flex-col items-center justify-center p-10 h-full">
            <h1 className="text-2xl mb-2">Create Account</h1>
            <div className="flex gap-2 text-2xl my-4">
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span className="text-lg mb-2">or use your email for registration</span>
            <input className="bg-gray-200 dark:bg-gray-700 rounded p-2 w-full mb-2 text-black dark:text-white" type="text" placeholder="Username" required />
            <input className="bg-gray-200 dark:bg-gray-700 rounded p-2 w-full mb-2 text-black dark:text-white" type="email" placeholder="Email" required />
            <input className="bg-gray-200 dark:bg-gray-700 rounded p-2 w-full mb-2 text-black dark:text-white" type="password" placeholder="Password" required />
            <button className="bg-black dark:bg-white text-white dark:text-black uppercase text-sm font-semibold rounded px-8 py-2 mt-2">Create Account</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="absolute top-0 left-0 w-1/2 h-full z-10 transition-all duration-500 form-container sign-in">
          <form className="flex flex-col items-center justify-center p-10 h-full">
            <h1 className="text-2xl mb-2">Sign In</h1>
            <div className="flex gap-2 text-2xl my-4">
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="border border-gray-400 dark:border-gray-600 rounded p-2"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span className="text-lg mb-2">or use your email password</span>
            <input className="bg-gray-200 dark:bg-gray-700 rounded p-2 w-full mb-2 text-black dark:text-white" type="text" placeholder="Username" />
            <input className="bg-gray-200 dark:bg-gray-700 rounded p-2 w-full mb-2 text-black dark:text-white" type="password" placeholder="Password" />
            <a href="#" className="text-sm text-black dark:text-white">Forget Your Password?</a>
            <button className="bg-black dark:bg-white text-white dark:text-black uppercase text-sm font-semibold rounded px-8 py-2 mt-2">Sign In</button>
          </form>
        </div>

        {/* Toggle */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-500 z-20">
          <div className="bg-green-900 dark:bg-gray-900 text-white dark:text-black w-[200%] h-full flex transition-transform duration-500">
            <div className="w-1/2 flex flex-col items-center justify-center p-8 text-center">
              <h1 className="text-2xl">Welcome Back!</h1>
              <p className="text-sm mt-2">Enter your personal details to use all of site features</p>
              <button id="login" className="mt-4 border border-white dark:border-black rounded px-6 py-2 uppercase text-sm">Sign In</button>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center p-8 text-center">
              <h1 className="text-2xl">Hello, Friend!</h1>
              <p className="text-sm mt-2">Register with your personal details to use all of site features</p>
              <button id="register" className="mt-4 border border-white dark:border-black rounded px-6 py-2 uppercase text-sm">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}