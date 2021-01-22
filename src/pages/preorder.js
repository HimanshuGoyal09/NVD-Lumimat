import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";

const FormStyled = styled.form``;
const preorder = () => {
    return (
        <>
            <PageWrapper footerDark>
                <Section
                    bg="#F7F7FB"
                    className="position-relative"
                    py={["50px", null, "130px", null, "230px"]}
                >
                    <div className="pt-5"></div>
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col lg="8">
                                <div className="banner-content">
                                    <Title variant="hero">Join Waitlist</Title>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={6} className="order-lg-1 pt-5 mt-4">
                                <div>
                                    <FormStyled
                                        name="contact2"
                                        method="post"
                                        data-netlify="true"
                                        data-netlify-honeypot="bot-field"
                                    >
                                        {/* You still need to add the hidden input with the form name to your JSX form */}
                                        <input type="hidden" name="form-name" value="contact2" />
                                        <Box mb={4}>
                                            <Title
                                                variant="card"
                                                fontSize="18px"
                                                as="label"
                                                htmlFor="nameput"
                                            >
                                                Your full name
                                            </Title>
                                            <Input
                                                type="text"
                                                id="nameput"
                                                name="name"
                                                required
                                            />
                                        </Box>
                                        <Box mb={4}>
                                            <Title
                                                variant="card"
                                                fontSize="18px"
                                                as="label"
                                                htmlFor="emailput"
                                            >
                                                Email address
                                            </Title>
                                            <Input
                                                type="email"
                                                id="emailput"
                                                name="email"
                                                required
                                            />
                                        </Box>
                                        <Button width="100%" type="submit" borderRadius={10}>
                                            Reserve
                                        </Button>
                                    </FormStyled>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </PageWrapper>
        </>
    );
};
export default preorder;
