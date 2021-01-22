import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device } from "../utils";

const FormStyled = styled.form``;

const WidgetWrapper = styled(Box)`
  border-radius: 10px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  @media ${device.lg} {
    padding-left: 140px;
    padding-right: 150px;
  }
  @media ${device.xl} {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

const Contact2 = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <div className="banner-content">
                  <Title variant="hero">Contact us</Title>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5 pt-lg-5">
              <Col xl="12">
                <WidgetWrapper>
                  <Row>
                    <Col md="4" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Call us
                        </Title>
                        <Text>+1-492-4918-395</Text>
                        <Text>+14-394-409-591</Text>
                      </Box>
                    </Col>
                    <Col md="4" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Email us
                        </Title>
                        <Text>support@lumimat.com</Text>
                      </Box>
                    </Col>
                    <Col md="4" sm="6">
                      <Box className="mb-5">
                        <Title variant="card" fontSize="24px">
                          Address
                        </Title>
                        <Text>34 Madison Street,</Text>
                        <Text>NY, USA 10005</Text>
                      </Box>
                    </Col>
                  </Row>
                </WidgetWrapper>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Contact2;
