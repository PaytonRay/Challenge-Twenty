import React from 'react';

function About() {
    return (
        <section id="about">
            <div classname="row">
                <div className="three columns">
                    <img className="profilepic" src={profilePic} alt="Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Hello my name is Payton! I am a aspriring web dev breaking into tech! I am contuing to learn and get better at all that ive
                        learned. Im based out of Austin Texas but am willing and hoping to move and expierance everything the world has to offer!
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Information</h2>
                            <p className="address">
                                <span>Payton Ray</span><br />
                                <span>Austin, TX </span><br />
                                <span>(512)-573-7446</span><br />
                                <span>webdevpayton@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={myResume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;