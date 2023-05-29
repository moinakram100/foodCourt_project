import React from 'react'
import '../assets/css/card2.css'

function Card2(props) {
    return (
        <>
            <div className="container-fluid mx-auto mt-2 cardbg">
                <div className="row">
                    {
                        props.detail.slice(0, 4).map((item, index) => {
                            return (
                                <>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={item.id}>
                                        <div className="cards-list" >
                                            <div className="card 1">
                                                <div className="card_image" style={{}}>
                                                    <img src={item.image} />
                                                </div>
                                                <div className="card_title title-white">
                                                    <p style={{ fontSize: "30px", fontWeight: "bold" }}>{item.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card2