import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Badge, Button, Alert } from 'react-bootstrap'
import { Redirect } from "react-router-dom"
import { statusBadge } from '../../../Utilities/Helper'
import { PROPERTY_IMG_SRC_URL } from '../../../Utilities/AppConstants'
import './PropertyDetail.scss'
class PropertyDetail extends Component {

    state = {
        data: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { match: { params } } = nextProps;
        if (nextProps.data.length > 0 && prevState.data == null) {
            const property = nextProps.data.find((property) => (
                property.guid === params.id))
            return {
                data: property
            }
        }
        return null;
    }

    render() {
        if (this.state.data !== null) {
            const { name, customer, street_name, street_address, city, state, country, postal_code, image, location_lng, location_lat, status } = this.state.data;
            return (
                <Col xs={{ span: 11 }} style={{ marginLeft: "5.5%" }} className="mb-5">
                    <Row className="pr-2 mt-4" >
                        <Col xs={7}>
                            <div
                                className="property-detail-img"
                                style={{ backgroundImage: `url(${PROPERTY_IMG_SRC_URL}${image})` }}
                            >
                            </div>

                        </Col>
                        <Col xs={5} >
                            <h5>{customer}  <Badge variant={statusBadge(status)}>{status}</Badge></h5>
                            <div className="property-detail-text" >
                                <p className="detail-text">{street_name}, {street_address}</p>
                                <p>{city}, {state}, {country}, {postal_code}</p>
                            </div>

                            <h6>
                                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/icons/icon-location.svg`} alt="" /> {location_lng}, {location_lat}</a>
                            </h6>
                            <div className="owner">
                                <h6><img src={`${process.env.PUBLIC_URL}/assets/icons/icon-user.svg`} alt=""/> {name}</h6>
                            </div>
                            <section>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                                <p> Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </section>

                            <Button variant="primary" size="lg">KNOW MORE</Button>
                        </Col>
                    </Row>
                </Col>
            )
        } else {
            return (
                <Col xs={{ span: 10, offset: 1 }} className=" mt-5">
                    <Alert variant="warning">
                        <div>Failed to load</div>
                    </Alert>
                    <Redirect to="/" />
                </Col>
            );
        }
    }
}
const mapStateToProps = state => ({
    data: state.Reducer.data
});
export default connect(mapStateToProps)(PropertyDetail);