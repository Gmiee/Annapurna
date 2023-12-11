import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/06.jpg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  ChakraProvider,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import img001 from "../Assets/001.png";
import img2 from "../Assets/02.jpg";
import img3 from "../Assets/03.jpg";
import img4 from "../Assets/04.jpg";
import img5 from "../Assets/05.jpg";
// import img7 from "../Assets/07.jpg";

const Home = () => {
  const main = {
    primary: "#0B82D7",
    black: "#0D1C26",
    white: "#FFFFFF",
  };
  const neutral = {
    gray20: "#3D4952",
    gray40: "#6E777D",
    gray60: "#9EA4A8",
    gray80: "#CFD2D4",
    gray90: "#F3F4F4",
  };
  const date ="10Dec Sunday"
  const newDate ="17Dec Sunday"
  const lastVisit = "Last campaign was on"
  const upcomingCampaign = "Upcoming campaign is on"
  return (
    <>
      <ChakraProvider>
        <Flex justify="center" align="center" h="100%" marginTop="3vh">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={4}
            maxWidth={{ base: "100%", md: "850px" }}
            marginX={{ base: "20px", md: "0" }}
          >
            <GridItem className="B001" py={5} bg="#F6F6F6" borderRadius="16px">
              <Box
                h="100%"
                display="grid"
                placeItems="center"
                fontWeight="700"
                textAlign="center"
                color="black"
                fontSize="35px"
                fontFamily="Plus Jakarta Sans"
              >
                A N N A P U R N A
              </Box>
            </GridItem>
            <GridItem bg="#F6F6F6" borderRadius="16px">
              <Box h="100%" textAlign="center" color="white">
                <div className="c">
                  <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={2500}
                    infiniteLoop={true}
                    swipeable={true}
                    emulateTouch={true}
                    dynamicHeight={true}
                  >
                    <img
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        borderRadius: "16px",
                      }}
                      src={img1}
                      alt="GroupPhoto"
                    />
                    <div>
                      <img
                        style={{
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
                        src={img5}
                        alt="img05"
                      />
                    </div>
                    <div>
                      <img
                        style={{
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
                        src={img3}
                        alt="img03"
                      />
                    </div>
                    <div>
                      <img
                        style={{
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
                        src={img4}
                        alt="img04"
                      />
                    </div>
                    {/* <div>
                      <img  style={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        borderRadius: "16px",
                      }} src={img7} alt="img07" />
                    </div> */}
                    <div>
                      <img
                        style={{
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
                        src={img2}
                        alt="img07"
                      />
                    </div>
                  </Carousel>
                </div>
              </Box>
            </GridItem>
            <GridItem
              bg="#E7F0FE"
              h="100%"
              w="100%"
              p={5}
              borderRadius="16px"
              m="0"
            >
              <Box h="100%" color="white">
                <Text
                  fontSize="16px"
                  style={{ textAlign: "left", fontWeight: "700" }}
                  color="#0B5ED7"
                  fontFamily="Plus Jakarta Sans"
                >
                  What We Do
                </Text>
                {/* <Text fontSize="xs" fontFamily= 'Plus Jakarta Sans' style={{ textAlign: "left", fontWeight:'500' }} color="#1A2E4D">
                  We are group of friends who <br /> believe in donating
                  directly to <br /> needy people. Every Sunday <br /> We
                  Collect and People Join us <br /> to Visit the nearby areas
                  and <br /> donate the essentials
                </Text> */}
                <Text
                  fontSize="16px"
                  fontFamily="Plus Jakarta Sans"
                  style={{ textAlign: "left", fontWeight: "500" }}
                  color="#1A2E4D"
                >
                  We are a group of friends who want to make Sundays special.
                  Every week, we gather important things like food, wheat, and
                  rice. Then, we go to places where people need help and give
                  them these things directly. You can be part of this too! Join
                  us in making Sundays about helping others and creating a
                  positive difference in their lives.
                </Text>
                <Image
                  style={{}}
                  ml="auto"
                  mb="0"
                  height="200px"
                  src={img001}
                  alt="KID"
                />
              </Box>
            </GridItem>
            <VStack>
              <GridItem
                bg="#F6F6F6"
                w="100%"
                h="100%"
                p={4}
                borderRadius="16px"
              >
                <Box
                  h="100%"
                  textAlign="center"
                  style={{
                    display: "grid",
                    alignItems: "left",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    fontSize="16px"
                    style={{ textAlign: "left", fontWeight: "700" }}
                    color="#888"
                    fontFamily="Plus Jakarta Sans"
                  >
                    How Can You Contribute To This Good Deed?
                  </Text>
                  <Text
                    fontSize="14px"
                    style={{ textAlign: "left", fontWeight: "500" }}
                    color="#1A2E4D"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Be part of something good! Donate essential items like food, wheat, or rice to help those in need. Join us on Sundays to directly share supplies. Your time, items, or presence can make a big difference. Let's spread kindness together – join our mission to make the world better, one Sunday at a time.
                  </Text>
                  <Button
                    as={Link}
                    to={"/Contactus"}
                    style={{
                      background: "#0B5ED7",
                      color: "white",
                      fontFamily: "Plus Jakarta Sans",
                      textTransform: "uppercase",
                      fontSize:'12px',
                      width: "30%",
                    }}
                  >
                    Contact us!
                  </Button>
                </Box>
              </GridItem>
              <GridItem bg="#F6F6F6" w="100%" h="60%" p={5} borderRadius="16px">
                <Box
                  h="100%"
                  textAlign="center"
                  color="#000"
                  style={{
                    display: "grid",
                    alignItems: "left",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    fontSize="16px"
                    style={{ textAlign: "left", fontWeight: "700" }}
                    color="#888"
                    fontFamily="Plus Jakarta Sans"
                  >
                    Updates
                  </Text>
                  <Text
                    style={{
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                    color="#0B5ED7"
                    fontFamily="Plus Jakarta Sans"
                  >
                    {`${lastVisit} ${date}.`} <br />
                    {`${upcomingCampaign} ${newDate}.`}
                  </Text>
                  <Button
                    leftIcon={<FaWhatsapp size={25} />}
                    borderRadius="10px"
                    style={{
                      marginTop: "10px",
                      fontFamily: "Plus Jakarta Sans",
                      textTransform: "uppercase",
                      fontWeight: "500",
                      backgroundColor: neutral.gray20,
                      color: main.white,
                    }}
                  >
                    <a
                      href="https://chat.whatsapp.com/LBbGRUlvgeCFFsXLpNryJQ"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Join Our WhatsApp Community
                    </a>
                  </Button>
                </Box>
              </GridItem>
            </VStack>
          </Grid>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Home;
