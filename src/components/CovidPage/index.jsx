import React from 'react'
import "./CovidPage.css"


import image4 from "../../assets/images/covid.png"
import image5 from "../../assets/images/tel.svg"



const CovidPage = () => {
    return (
        <>
            <div className='container'>
                <div className="wrapper">
                    <div className="cardBig">
                        <div className='cardImage'>
                            <img src={image4} alt="" />
                        </div>
                        <div className="card__body">
                            <div className="card__link">
                                <p className="card__description">Covid-19 sanitization</p>
                                <h1 className="card__title">We follow guidelines to keep you safe from the COVID-19 virus</h1>
                                <p className="card__description">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                            </div>
                            <div className="card__button-group">
                                <button className="btn">Get a free quote</button>
                                <div className='callCovid'>
                                    <span  className="card__button-link">
                                        <img src={image5} alt="" />
                                    </span>
                                    <div className='calltitle'>
                                        <p>Call us now</p>
                                        <h2>(414) 567-2109</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CovidPage