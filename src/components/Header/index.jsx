import React from 'react'
// import PropTypes from 'prop-types'
import "./Header.scss"
import { Col, Container, Row } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
Header.propTypes = {};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <Link
                            to="/"
                            className="header__link header__title"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        >
                            Photo App
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active"
                        >
                            Redux project
                        </NavLink>
                    </Col>
                </Row>
            </Container>

        </header>
    )
}

export default Header

