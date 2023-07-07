import React from 'react'

function Home() {
    const logoArray = [
        {

            heading: "Quick Checkout: Turbocharge Your Conversions",
            description: "Get ready for an e-commerce revolution! With Precify Commerce's Quick Checkout, we've redefined the purchase experience. We know that every second counts, so we've eliminated the unnecessary friction that plagues traditional checkouts. Now, your customers can complete their orders with just a contact number. Watch as conversion rates soar to unprecedented heights. Say goodbye to cart abandonment and hello to a streamlined, revenue-boosting checkout process.            "
        },
        {

            heading: "Predictive Model: Predict the Future, Empower Your Decisions",
            description: "Unlock the potential of your data with our awe-inspiring predictive model. Our cutting-edge algorithms analyze over 150 critical data points for each order. The result? Actionable insights that let you see into the future. Our model accurately predicts whether an order is likely to become an RTO, enabling you to take proactive measures. Stay steps ahead of the game, mitigate risks, and optimize your fulfillment processes like never before. With Precify Commerce, you're in command of your destiny.            "
        },
        {

            heading: "Business Flow Builder: Automate Success, Maximize Efficiency",
            description: "Get ready for operational excellence! Our Business Flow Builder puts you in the driver's seat of efficiency. Take advantage of our intuitive tool to create customized workflows based on RTO predictions. Seamlessly integrate our powerful insights into your existing systems and automate actions that drive success. Effortlessly reroute shipments, reach out to customers, and optimize inventory management. With Precify Commerce, every operation runs like clockwork, allowing you to focus on conquering the market.            "
        }
    ];
    const subArray = [
        {
            icon: 'globe',
            heading: "Unleash Unmatched Precision",
            description: "Our state-of-the-art platform delivers unparalleled accuracy, providing you with the insights you need to make informed decisions and achieve outstanding results.            "
        },
        {
            icon: 'anchor',
            heading: "Skyrocket Your Profitability",
            description: "By significantly reducing RTO rates, you're maximizing your revenue potential and boosting your bottom line. It's time to leave your competitors in the dust. "
        },
        {
            icon: 'hourglass',
            heading: "Delight Your Customers",
            description: "Seamless experiences lead to customer loyalty and brand advocacy. With Precify Commerce, you'll create extraordinary experiences that keep customers coming back for more.            "
        }, {
            icon: 'database',
            heading: "Empower Your Data-Driven Future",
            description: "Harness the power of data and drive your business forward with confidence. Our advanced analytics fuel your decision-making and ensure you're always one step ahead. "
        },
        {
            icon: 'cart-arrow-down',
            heading: "Lead the Industry",
            description: "Join the elite league of D2C pioneers who have embraced Precify Commerce. Dominate your market, outshine your competition, and set new industry standards."
        }
    ];


    return (
        <>
            <div className='HomeContainer_div'>
                <div className='Div_containerOne'>
                    <h1 className='Div_containerOne_text text-center'>
                        <span style={{ color: '#ff8181' }}>Unleash the Power of</span> <span style={{ color: '#6f7eff' }}>Precify Commerce</span>
                    </h1>
                    <h5 className='Div_containerOne_Innertext'>
                        Boost Your D2C Success with Unmatched Predictive Precision
                    </h5>
                </div>
                <div className='Div_containerTwo'>
                    <img style={{ maxWidth: '600px', width: '100%',mixBlendMode:'darken' }} className='' src='mainImage.webp' />
                </div>
            </div>


            <div className='service'>
                <h4 className='service_heading text-center' >Experience the Power of Our Irresistible Solutions</h4>
                <div className='Service_container'>
                    <div className='Service_container_image'>
                        <img src='service.png' style={{width:'100%'}} />
                    </div>
                    <div className='Service_container_array_object'>
                        {logoArray.map((element, i) => (
                            <div className='Service_container_innerDiv' key={i}>
                                <h4 className='Service_container_innerDiv_heading'>{element.heading}</h4>
                                <h6 style={{ fontWeight: '300', textAlign: 'justify' }}>{element.description}</h6>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 className='whySettleLessText'>Why Settle for Less? Choose <span style={{ color: '#6f7eff' }}>Precify Commerce</span></h2>
                </div>
                <div className='whyUsDiv'>
                    {subArray.map((element, i) => (
                        <div className='whyUsArrayDiv' key={i}>
                            <div className='fa-fa-Div'> <i className={`fa fa-${element.icon} fa-2x hover-fafa`}></i></div>

                            <div><h5>{element.heading}</h5></div>
                            <div> <p style={{ textAlign: 'inherit' }}>{element.description}</p></div>
                        </div>
                    ))}

                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 className='UnleashPower_text'><span style={{ color: '#ff8181' }}>Ready to Unleash</span> the Power of <span style={{ color: '#6f7eff' }}>Precify Commerce</span>?</h2>
                </div>
                <div className='UnleashPower_Div'>
                    <div className='UnleashPower_Div_one'>
                        <h5 className='UnleashPower_Div_one_text' >Now is the time to transform your business into an unstoppable force. Join forces with Precify Commerce and witness unparalleled success. Take advantage of our irresistible solutions, embrace the future of D2C operations, and position yourself as an industry leader.
                            Don't settle for mediocrity—aim for greatness. Contact Precify Commerce today and experience the sales revolution you've been waiting for. Together, we'll redefine what it means to be a true D2C powerhouse.
                        </h5>
                    </div>
                    <div className='UnleashPower_Div_two'>
                        <img style={{maxWidth:'420px',width:'100%'}} src='unleashPower.webp'/>
                    </div>
                </div>
            </div>
                        
        </>
    )
}

export default Home