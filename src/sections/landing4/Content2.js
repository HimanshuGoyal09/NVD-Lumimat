import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import {Title, Section, Box, Text, Button} from "../../components/Core";
import { device } from "../../utils";

// import imgMobile from "../../assets/image/png/lumimat-product-pic-1.png";

import imgMobile from "../../assets/image/png/starter-kit-grey.png";
// starter-kit-grey.png

import icon3dModel from "../../assets/image/png/icon-3d-model.png";
import iconLayout from "../../assets/image/png/icon-layot-25.png";

const ContentCard = ({ iconImage, title, className, children, ...rest }) => (
  <Box
    {...rest}
    className={`d-flex align-items-start justify-content-start ${className}`}
  >
    <Box mr={4}>
      <img src={iconImage} alt="" />
    </Box>
    <Box>
      <Title variant="card" fontSize="24px" mb={3}>
        {title}
      </Title>
      <Text variant="small">{children}</Text>
    </Box>
  </Box>
);

const ImgStyled = styled.img`
  box-shadow: ${({ theme }) => `0 52px 54px ${theme.colors.shadow}`};
  border-radius: 10px;
  max-width: 70%;
  @media ${device.sm} {
    max-width: 50%;
  }
  @media ${device.md} {
    max-width: 33%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
  @media ${device.xl} {
    margin-left: 50px;
  }
`;

const Content2 = () => (
  <>
    {/* <!-- Content section 2 --> */}
    <Section
        bg="#F7F7FB"
        className="position-relative"
        py={["50px", null, "130px", null, "230px"]}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <div
              className="pl-5"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <ImgStyled src={imgMobile} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg="6" md="9">
            <Box className="pt-5 pt-lg-0">
              <Title>
                Meet Lumimat
              </Title>
              <Text>
                Lumimat is a smart mat that kills bacteria in food, extending shelf life by up to 2.5x, reducing waste and increasing savings.
              </Text>
              <Box mt={4} pt={3}>
                <ContentCard
                  title="Kills 99% of the microbes on food"
                  iconImage={icon3dModel}
                  mb={4}
                >
                  With its unique setup, Lumimat kills all harmful microbes including covid-19
                </ContentCard>
                <ContentCard
                  title="Harmless to you and your family"
                  iconImage={iconLayout}
                >
                  Smart sensors switches off light avoiding any harmful interactions with humans and pets
                </ContentCard>
              </Box>
              <div className="d-flex flex-column align-items-center pt-3">
                <Button mb={2}><a href="/preorder">Join Waitlist</a></Button>
                <Text
                    variant="small"
                    fontSize={"14px"}
                    color="dark"
                    opacity={0.7}
                >
                  No credit card required
                </Text>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content2;
