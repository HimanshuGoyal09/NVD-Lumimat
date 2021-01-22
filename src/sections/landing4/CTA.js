import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Box, Text } from "../../components/Core";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Box bg="dark" className="position-relative" py={[4, null, null, 5, 6]}>
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="7">
            <Box className="text-center">
              <Title color="light">A step to save your pockets and your planet</Title>
              <Text mb={4} color="light" opacity={0.7}>
                A Canadian household wastes $2,000 worth of fresh food every year emitting ___ tons of carbon dioxide and methane. Join us in the pledge to reduce wastage one fridge at a time.
              </Text>
              <div className="d-flex flex-column align-items-center pt-3">
                <Button mb={2}><a href="/preorder">Join Waitlist</a></Button>
                <Text
                  variant="small"
                  fontSize={"14px"}
                  color="light"
                  opacity={0.7}
                >
                  No credit card required
                </Text>
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  </>
);

export default CTA;
