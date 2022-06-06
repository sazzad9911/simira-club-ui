import React from "react";
import './css/TermsAndConditions.css'
import OptionLand from './../Components/OptionLand';
import AppOverView from './../Cart/AppOverView';
import Img from './Image/Careers.PNG'

function TermsAndConditions() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
       <div>
        <div className="TermsBody">
            <h2>Terms & Conditions</h2>
            <div className="TermsPDiv">
                <div>
                <p>1.</p>
                <p>It is the responsibility of a customer to read, understand and remain knowledgeable of the terms and conditions.</p>
                </div>
                <div>
                <p>2.</p>
                <p>Booking confirmation letter is required at the time of check-in.</p>
                </div>
                <div>
                <p>3.</p>
                <p>Customer is eligible for a stay from Sunday to Thursday at all mentioned locations.</p>
                </div>
                <div>
                <p>4.</p>
                <p>Offer is not valid for single occupancy.</p>
                </div>
                <div>
                <p>5.</p>
                <p>To avail of the offer, the customer will be required to pay Rs. 999/- per person per night, children from 5-12 years of age have to pay Rs. 599/- directly to the hotel or Smira Club account in advance for unlimited breakfast & dinner (veg /non-veg, as per the respective hotel’s policy, Non-Veg Breakfast Includes Egg Items Only and Non-Veg Dinner Includes Chicken Items Only)</p>
                </div>
                <div>
                <p>6.</p>
                <p>Booking should be done prior according to the membership plan.</p>
                </div>
                <div>
                <p>7.</p>
                <p>In case of non-availability, each customer shall be compensated with a stay at any other property/place offered by participating service provider.</p>
                </div>
                <div>
                <p>8.</p>
                <p>Any other services other than the above-mentioned services are chargeable at the resort.</p>
                </div>
                <div>
                <p>9.</p>
                <p>In case of conflict, the decision of the participating service provider shall be final and abiding.</p>
                </div>
                <div>
                <p>10.</p>
                <p>This membership cannot be encashed, refunded, or extended. The customer has to use this offer within the mentioned validity period.</p>
                </div>
                <div>
                <p>11.</p>
                <p>This membership is not valid during bank holidays, public holidays, long weekends, 7 days of Diwali, and from 24th December to 1st January. If a customer would like to book on the above-mentioned days then an extra amount will be charged as per the participating service provider’s rate policy.</p>
                </div>
                <div>
                    <p>12.</p>
                    <p>Any confirmed booking is non-refundable and cannot be canceled.</p>
                </div>
                <div>
                <p>13.</p>
                <p>Smira Club has no refund policy.</p>
                </div>
                <div>
                <p>14.</p>
                <p>Smira Club is not responsible and will not intervene in case of service-related issues with the participating service provider. We kindly request you to coordinate directly with the participating service provider.</p>
                </div>
                <div>
                    <p>15.</p>
                    <p>Any other commitment given by the executive other than the above-mentioned terms shall not be fulfilled by Smira Club.</p>
                </div>
                <div>
                <p>16</p>
                <p>Any legal issues will be resolved by an arbitrator in Mumbai jurisdiction only errors and omissions expected</p>
                </div>
                <h2>Cancellation Policys</h2>
                <div className="TermsPDiv">
                    <p className="TermsP">Member can cancel the policy at its own discretion, but NO REFUND will be processed for the same to
                        discontinue membership email us at support@smira.club

                    </p>
                </div>
            </div>
        </div>
        <div style={{ marginTop:'50px' }}>
            <AppOverView />
            </div>
            <OptionLand />
           
       </div>
    );
}

export default TermsAndConditions;