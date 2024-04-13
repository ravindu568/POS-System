import React from "react";

import DefaultCard from "./cards/DefaultCard";

import MinQtyCard from "./cards/MinQtyCard";

function Home(){


    return (


        <>
        <br/>
        
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <DefaultCard 
                
                                    thumbnail="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?size=626&ext=jpg&ga=GA1.2.1993585290.1703997392&semt=sph"
                                    description="customer"
                                    title="Customer"
                                    value={250}
                                    key={1}
                />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <DefaultCard
                                    thumbnail="https://img.freepik.com/free-vector/taking-orders-by-phone-store-contact-center-customers-support-easy-order-fast-delivery-trade-service-call-center-operator-cartoon-character_335657-2564.jpg?size=626&ext=jpg&ga=GA1.2.1993585290.1703997392&semt=sph"
                                    description="order"
                                    title="Orders"
                                    value={250}
                                    key={1}
                />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <DefaultCard
                                        thumbnail="https://img.freepik.com/free-vector/webrooming-abstract-concept-illustration_335657-3898.jpg?size=626&ext=jpg&ga=GA1.2.1993585290.1703997392&semt=sph"
                                        description="products"
                                        title="Products"
                                        value={250}
                                        key={1}
                />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <DefaultCard
                                    thumbnail="https://img.freepik.com/free-vector/startup-managers-presenting-analyzing-sales-growth-chart-group-workers-with-heap-cash-rocket-bar-diagrams-with-arrow-heap-money_74855-14166.jpg?size=626&ext=jpg&ga=GA1.2.1993585290.1703997392&semt=sph"
                                    description="Sales"
                                    title="Sales"
                                    value={250}
                                    key={1}
                />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="context">
                        
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <MinQtyCard/>
                    <MinQtyCard/>
                    <MinQtyCard/>
                    <MinQtyCard/>
                    <MinQtyCard/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;