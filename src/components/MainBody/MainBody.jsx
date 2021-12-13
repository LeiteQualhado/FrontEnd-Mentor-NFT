import React, { Component } from "react";
import { MainContainer, NftBox, Box, Image, NFTTitle } from "./MainBodyStyle";
import nftImage from "../../images/image-equilibrium.jpg"
class MainBody extends Component {
  render() {
    return (
      <MainContainer>
        <NftBox>
          <Box>
            <Image src= {nftImage}></Image>
            <NFTTitle>Equilibrium #3429</NFTTitle>
          </Box>
        </NftBox>
      </MainContainer>
    );
  }
}

export default MainBody;
