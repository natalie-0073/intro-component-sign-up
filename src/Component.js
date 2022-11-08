import React from "react";
import './_component.scss';
import Form from "./Form";
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
                            <Form/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}