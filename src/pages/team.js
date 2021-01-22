import React from "react";

import Team from "../sections/about/Team";
import styled from "styled-components";
import {Box} from "../components/Core";
import {device} from "../utils";

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

const TeamMem = () => {
    return (
        <>
            <WidgetWrapper>
                <Team />
            </WidgetWrapper>
        </>
    );
};
export default TeamMem;
