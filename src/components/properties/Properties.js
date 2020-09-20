import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Property from './property/Property'
import { getPropertyData } from '../../redux/Action'
import { withRouter } from "react-router-dom";

class Properties extends PureComponent {

    state = {
        data: []
    }

    componentDidMount() {
        this.props.getPropertyData();

    }

    goToCarddetails = (cardId) => {
        this.props.history.push(`/details/${cardId}`);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data.length !== prevState.data.length) {
            return {
                data: nextProps.data
            }
        }
        return null;
    }

    render() {
        return (
            <Col xs={{ span: 11 }} style={{ marginLeft: "5.5%" }} className="mb-5">
                <Row >
                    {this.state.data.map((property) => (

                        <Property
                            key={property.guid}
                            {...property}
                            goToCarddetails={this.goToCarddetails}
                        />

                    ))}

                </Row>
            </Col>
        )
    }
}

const mapStateToProps = state => ({

    data: state.Reducer.data
});

export default connect(mapStateToProps, { getPropertyData })(withRouter(Properties));