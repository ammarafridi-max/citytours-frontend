import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import "./ActivityDetailPage.css";
import East from "@mui/icons-material/East";
import { Email, LocationCity, WhatsApp } from "@mui/icons-material";
import DocumentMeta from "react-document-meta"

function ActivityDetailPage(){

    const [activity, setActivity] = useState(null);
    const {url} = useParams();
    const [adultsQuantity, setAdultsQuantity] = useState(0);
    const [childrenQuantity, setChildrenQuantity] = useState(0);
    const [infantQuantity, setInfantQuantity] = useState(0);

    let adultTotal = 0
    let childrenTotal = 0
    let infantTotal = 0

    const [total, setTotal] = useState(0)

    useEffect(() => {
        axios
          .get(`http://localhost:3001/activities/${url}`)
          .then((response) => {
            setActivity(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [url]);

      const meta = {
        title:`${activity.name} | Activities | City Tours UAE`
    }

    return(
        <section className="container-fluid py-5">

            <DocumentMeta {...meta} />

                <div className="col-11 col-lg-10 mx-auto">

                    <div className="activity-detail-image">
                        <img src={activity.image} className="activity-detail-image" />
                    </div>

                    <div className="mt-5 row justify-content-between">

                        <div className="activity-detail-main-section">
                            <h1 className="activity-detail-h1 bold">{activity.name}</h1>
                            { activity.description.length > 0 &&
                            <div>
                                <h2 className="activity-heading">Description</h2>
                                {activity.description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                                ))}
                                <hr className="activity-detail-hr"/>
                            </div>
                            }
                            { activity.highlights.length > 0 &&
                            <div>
                                <h2 className="activity-heading">Highlights</h2>
                                <ul> { activity.highlights.map((highlight) => <li>{highlight}</li> )} </ul>
                                <hr className="activity-detail-hr"/>
                            </div>
                            }
                            {activity.inclusions.length | activity.exclusions.length > 0 && 
                            <div>
                                <h2 className="activity-heading">Inclusions / Exclusions</h2>
                                { activity.inclusions.map( (inclusion) => <> <DoneIcon style={{ color:"#30B75D" }} className="me-2" /> {inclusion} <br/> </> )}
                                { activity.exclusions.map( (exclusion) => <> <CloseIcon style={{ color:"#E81A00" }} className="me-2" /> {exclusion} <br/> </> )}
                                <hr className="activity-detail-hr"/>
                            </div>
                            }
                            {activity.inclusions.length | activity.exclusions.length > 0 && 
                            <div>
                                <h2 className="activity-heading">Activity Location</h2>
                                <hr className="activity-detail-hr"/>
                            </div>
                            }

                            <div>
                                <h2 className="activity-heading">Frequently Asked Questions</h2>
                                { 
                                activity.faqs.map( (faq) => {
                                    return(
                                        <>
                                        <div>
                                            <h3 className="f-20 activity-detail-faq-question">{faq.question}</h3>
                                            <p>{faq.answer}</p>
                                        </div>
                                        </>
                                    )
                                } ) 
                                }
                                <hr className="activity-detail-hr"/>
                            </div>

                            <h2 className="activity-heading">Additional Information</h2>
                        </div>

                        <div className="activity-detail-sidebar">

                            <div className="activity-detail-button-section">
                                <h5 className="f-18 light">From <span className="bold">AED {activity.tickets[0].price.adults}</span></h5> <br/>
                                <a href={`${url}/booking`}>
                                    <button className="btn btn-primary w-100 activity-detail-booking-btn">Proceed to Booking <East /></button>
                                </a>
                                <div className="f-14">
                                    <DoneIcon style={{}} className="me-2" /><span>Safe and secure payment</span><br/>
                                    <DoneIcon style={{}} className="me-2" /><span>24/7 Customer Services</span><br/>
                                    <DoneIcon style={{}} className="me-2" /><span>Top quality guaranteed</span><br/>
                                </div>
                            </div>

                            <div className="activity-detail-contact-section">
                                <h6>Contact us now!</h6>
                                <hr className="activity-detail-hr-2" />
                                <div className="f-14">
                                    <WhatsApp /><span className="ms-2">+971 50 604 5355</span>
                                </div>
                                <div className="f-14 mt-2">
                                    <Email /><span className="ms-2">info@citytours.ae</span>
                                </div>
                                <div className="f-14 mt-2">
                                    <LocationCity /><span className="ms-2">Sarah Tower, Sharjah, UAE</span>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="mobile-button-section col-12 mx-auto">
                    <div className="col-11 row mx-auto">
                        <div className="col-5 my-auto">
                            <p className="white-color f-18"> from <span className="bold">AED {activity.tickets[0].price.adults}</span></p>
                        </div>
                        <div className="col-7">
                            <button className="btn btn-secondary activity-mobile-button w-100">Book Now</button>
                        </div>
                    </div>
                    
                </div>

        </section>
    )
}

export default ActivityDetailPage
