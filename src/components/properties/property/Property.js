import React from 'react'
import { Col } from 'react-bootstrap'
import { PROPERTY_IMG_SRC_URL } from '../../../Utilities/AppConstants'
import './Property.scss'

const Property = (props) => (
    <Col xs={4} className="pr-2 mt-4" onClick={() => props.goToCarddetails(props.guid)}>
        <div className="zoom">
            <div
                className="property-img"
                style={{ backgroundImage: `url(${PROPERTY_IMG_SRC_URL}${props.image} )` }}
            >
            </div>

            <div className="property-text" >
                <h6>{props.street_name}, {props.city}</h6>
                <p>{props.state}, {props.country_code}</p>
            </div>
        </div>
    </Col>
)
export default Property;