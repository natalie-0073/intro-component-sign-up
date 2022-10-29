import React from "react";
import './_component.scss';
export default function Component(){
    return(
        <div className="Component">
            <main className="main">
                
                <div className="main-content">
                    <div className="main-content__container">
                        <div className="container-title">
                            <h2 className="container-title__h2">
                                Learn to code by watching others
                            </h2>
                        </div>
                        <div className="container-text">
                            <p className="container-text__p">
                                See how exporienced developers solve problems in real time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
                            </p>
                        </div>
                    </div>
                    <div className="main-content__container">
                        <div className="container-offer">
                            <div className="container-offer__text"><b>Try it free 7 days</b> then $20/mo. thereafter</div>
                        </div>
                        <div className="container-form">
                            <form>
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                <input type="email" placeholder="Email Address"/>
                                <input type="password" placeholder="Password"/>
                                <input type="submit" value="CLAIM YOUR FREE TRIAL" className="btn-primary"/>
                                <small>By clicking the button, you are agreeing to our <span>Terms and Services</span></small>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}