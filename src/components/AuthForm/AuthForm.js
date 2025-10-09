import React from "react"; // ایمپورت ری‌اکت | Import React
import "@fortawesome/fontawesome-free/css/all.min.css"; // آیکون‌های FontAwesome | FontAwesome icons
import './Auth.css'; // استایل فرم احراز هویت | Auth form styles

const AuthForm = ({ isRegister, setIsRegister }) => {
  return (
    <div id="register" data-aos="flip-left">
      <div className="container">
        <div className="row">
          <div className="register-page">
            <div className="register" >
              <h1>{isRegister ? "ثبت نام کنید" : "وارد شوید"}</h1> {/* عنوان فرم | Form title */}
              {isRegister && (
                <>
                  <ul data-aos="fade-up"> 
                    <li>
                      <a href="/"><i className="fab fa-facebook-f"></i></a> {/* آیکون فیسبوک | Facebook icon */}
                    </li>
                    <li>
                      <a href="/"><i className="fab fa-google"></i></a> {/* آیکون گوگل | Google icon */}
                    </li>
                    <li>
                      <a href="/"><i className="fab fa-linkedin-in"></i></a> {/* آیکون لینکدین | LinkedIn icon */}
                    </li>
                  </ul>
                  <h5>یا میتوانید از روش بالا ثبت نام کنید.</h5> {/* توضیح روش جایگزین | Alternative signup method */}
                </>
              )}
              <form>
                {isRegister && (
                  <div className="form-item">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="نام و نام خانوادگی" /> {/* فیلد نام | Name input */}
                  </div>
                )}
                <div className="form-item">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="ایمیل" /> {/* فیلد ایمیل | Email input */}
                </div>
                <div className="form-item">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="پسوورد" /> {/* فیلد رمز عبور | Password input */}
                </div>
                {/* دکمه ثبت نام/ورود که وضعیت را تغییر می‌دهد | Submit button toggles form state */}
                <input
                  type="submit"
                  value={isRegister ? "ثبت نام" : "ورود"}
                  onClick={(e) => {
                    e.preventDefault(); // جلوگیری از ارسال فرم | Prevent form submission
                    setIsRegister(!isRegister); // تغییر وضعیت فرم | Toggle form state
                  }}
                  className="submit-button"
                />
              </form>
            </div>
            <div className="auth-login">
              <img src="images/logo.svg" alt="" /> {/* لوگو فرم | Form logo */}
              <div className="login-content" data-aos="fade-up">
                <h1>خوش آمدید</h1> {/* پیام خوش‌آمدگویی | Welcome message */}
                <p>اگر قبلا ثبت نام کرده اید میتوانید از این قسمت وارد شوید</p> {/* توضیح ورود | Login prompt */}
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegister(!isRegister); // تغییر وضعیت فرم | Toggle form state
                  }}
                  className="auth-link"
                >
                  {isRegister ? "وارد شوید" : "ثبت نام کنید"} {/* لینک تغییر فرم | Switch form link */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm; // خروجی کامپوننت فرم | Export AuthForm component
