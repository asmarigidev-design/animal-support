import React, { useEffect, useState } from "react"; // ایمپورت ری‌اکت و هوک‌ها | Import React and hooks
import "@fortawesome/fontawesome-free/css/all.min.css"; // ایمپورت آیکون‌های FontAwesome | Import FontAwesome icons

import AuthForm from "../AuthForm/AuthForm"; // فرم احراز هویت | Authentication form component

import Rellax from "rellax"; // برای افکت پارالاکس | For parallax effect
import img1 from "../../images/sky.png"; // تصویر آسمان برای هدر | Sky image for header
import img2 from "../../images/mooni.png"; // تصویر ماه برای هدر | Moon image for header
import img3 from "../../images/for.svg"; // تصویر جنگل برای هدر | Forest image for header

const AnimalSupport = () => {
    const [isRegister, setIsRegister] = useState(true); // وضعیت ثبت‌نام کاربر | User registration state

    useEffect(() => {
        new Rellax(".rellax"); // مقداردهی اولیه افکت پارالاکس | Initialize Rellax effect
    }, []);

    return (
        <div>
            <header id="header">
                <nav>
                    <ul>
                        <li><a href="/">خانه</a></li> {/* لینک صفحه اصلی | Home link */}
                        <li><a href="/team">تیم ما</a></li> {/* لینک تیم | Team link */}
                        <li><a href="/contact">تماس با ما</a></li> {/* لینک تماس | Contact link */}
                        <li><a href="/about">درباره ما</a></li> {/* لینک درباره ما | About link */}
                    </ul>
                </nav>
                <img src={img1} alt="Sky" className="sky rellax" data-rellax-speed="3" /> {/* تصویر آسمان با افکت | Sky image with parallax */}
                <img src={img2} alt="Moon" className="moon rellax" data-rellax-speed="7" /> {/* تصویر ماه با افکت | Moon image with parallax */}
                <img src={img3} alt="Forest" className="for" /> {/* تصویر جنگل بدون افکت | Forest image without parallax */}
            </header>

            <section className="wolf">
                <div className="wolf-title" data-aos="fade-right">

                    <h1>حیوانات نیاز به مراقبت دارند</h1> {/* عنوان بخش گرگ | Wolf section title */}
                    <p>با هم در انجمن‌های حمایت از حیوانات بستر مناسب برای آن‌ها را فراهم می‌کنیم</p>
                </div>
                <div className="wolf-content">
                    <div className="container" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <p>انجمن حمایت از حیوانات با هدف حفظ حقوق و رفاه حیوانات فعالیت می‌کندم.</p>
                        <p>ما با فراهم کردن سرپناه، مراقبت‌های پزشکی، و فرهنگ‌سازی تلاش داریم زندگی بهتری برای حیوانات فراهم کنیم.</p>
                        <p>با حمایت شما، دنیایی مهربان‌تر برای حیوانات می‌سازیم.</p>
                    </div>
                </div>
            </section>

            <section className="monkey">
                <div className="monkey-title">
                    <div className="container" data-aos="fade-left">
                        <h1>دوستی و مهربانی با حیوانات</h1> {/* عنوان بخش میمون | Monkey section title */}
                        <p>با عشق و مراقبت، دنیایی بهتر برای حیوانات بسازیم.</p>
                    </div>
                </div>
                <div className="monkey-content">
                    <div className="container" data-aos="fade-up">
                        <p>حیوانات موجوداتی شگفت‌انگیز هستند که مهربانی و مراقبت ما را نیاز دارند.</p>
                        <p>با حمایت از انجمن‌های حمایت از حیوانات، می‌توانیم زندگی بهتری برای آن‌ها فراهم کنیم.</p>
                        <p>محبت و توجه به حیوانات، بازتابی از انسانیت ماست.</p>
                        <p>هر اقدام کوچک می‌تواند تفاوت بزرگی در زندگی یک حیوان ایجاد کند.</p>
                        <p>با هم می‌توانیم جهانی امن‌تر و مهربان‌تر برای حیوانات بسازیم.</p>
                        <p>به انجمن‌های حمایت از حیوانات بپیوندید و قدمی در مسیر تغییر بردارید.</p>
                    </div>
                </div>
            </section>

            <footer>
                <div className="overlay">
                    <div className="container">
                        <div className="footer-title" data-aos="fade-bottom">
                            <h1>به ما بپیوندید</h1> {/* عنوان فوتر | Footer title */}
                            <p>با پیوستن به انجمن حمایت از حیوانات، قدمی در مسیر مهربانی و مراقبت بردارید...</p>
                        </div>

                        <div className="social" data-aos="fade-up">
                            <ul>
                                <li><a href="/"><i className="fab fa-instagram"></i></a></li> {/* آیکون اینستاگرام | Instagram icon */}
                                <li><a href="/"><i className="fab fa-youtube"></i></a></li> {/* آیکون یوتیوب | YouTube icon */}
                                <li><a href="/"><i className="fab fa-twitter"></i></a></li> {/* آیکون توییتر | Twitter icon */}
                                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li> {/* آیکون فیسبوک | Facebook icon */}
                            </ul>
                        </div>
                        <div className="description" data-aos="fade-right">
                            <p>انجمن حمایت از حیوانات با هدف حفاظت از حقوق حیوانات، ایجاد آگاهی عمومی...</p>
                        <p>انجمن حمایت از حیوانات با هدف حفاظت از حقوق حیوانات، ایجاد آگاهی عمومی، و ارائه سرپناه و مراقبت‌های لازم فعالیت می‌کند. ما تلاش داریم با فرهنگ‌سازی و ایجاد تغییرات مثبت، زندگی بهتری برای حیوانات فراهم کنیم. با حمایت شما، دنیایی مهربان‌تر و امن‌تر برای حیوانات خواهیم ساخت.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <AuthForm isRegister={isRegister} setIsRegister={setIsRegister} /> {/* فرم احراز هویت | Authentication form */}

        </div>
    );
};

export default AnimalSupport; 
