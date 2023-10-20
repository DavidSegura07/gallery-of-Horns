/* The Gallery class is a React component that renders two GalleryItem components with different
titles, images, and descriptions. */
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HornedBeast from "./HornedBeast"; // Make sure this path is correct
import data from "../assets/galleryphotos.json"; // Make sure this path is correct

class Gallery extends React.Component {
    render() { console.log(this.props.data)
        return (
            <Container>
                <Row>
                    {data.map((beast, idx) => (
                        <Col xs={1} sm={3} md={4} lg={5} key={idx}>
                            <HornedBeast
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}
                                keyword={beast.keyword}
                                horns={beast.horns}
                                setSelectBeast={this.props.setSelectBeast}
                                beast={beast}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Gallery;
