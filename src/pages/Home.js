import React from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/06.jpg";
// import img2 from '../Assets/02.jpg';
// import img3 from "../Assets/03.jpg";
// import img4 from "../Assets/04.jpg";
// import img5 from "../Assets/05.jpg";
// import img6 from "../Assets/01.JPG";
// import img7 from "../Assets/07.JPG";
// import About from "./About";
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
const Home = () => {
  return (
    <>
      {/* <div className="c">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={true}
        >
          <div>
            <img src={img1} alt="img01" />
          </div>
          <div>
            <img src={img5} alt="img05" />
          </div>
          <div>
            <img src={img3} alt="img03" />
          </div>
          <div>
            <img src={img4} alt="img04" />
          </div>
          <div>
            <img src={img6} alt="img06" />
          </div>
          <div>
            <img src={img7} alt="img07" />
          </div>
        </Carousel>
        <About/>
      </div> */}

      <ChakraProvider>
        <Flex justify="center" align="center" h="100%" marginTop='3vh'>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={4}
            maxWidth={{ base: "100%", md: "850px" }}
            marginX={{ base: "20px", md: "0" }}
          >
            <GridItem className="B001" bg="#F6F6F6" borderRadius="24px">
              <Box
                h="100%"
                display="grid"
                placeItems="center"
                fontWeight="700"
                textAlign="center"
                color="black"
                fontSize="35px"
                fontFamily= 'Plus Jakarta Sans'
              >
                A N N A P U R N A
              </Box>
            </GridItem>
            <GridItem bg="#F6F6F6" p={1} borderRadius="24px" >
              <Box h="100%" textAlign="center" color="white">
                <img
                  style={{ aspectRatio: "16/9", borderRadius: "24px" }}
                  src={img1}
                  alt="GroupPhoto"
                />
              </Box>
            </GridItem>
            <GridItem bg="#F6F6F6" h="100%" w="100%" p={2} borderRadius="24px">
              <Box h="100%" color="white">
                <Text
                  fontSize="xs"
                  style={{ textAlign: "left" }}
                  color="#0B5ED7"
                  fontFamily= 'Plus Jakarta Sans'
                >
                  What we do
                </Text>
                <Text fontSize="xs" fontFamily= 'Plus Jakarta Sans' style={{ textAlign: "left" }} color="#000">
                  We are group of friends who <br /> believe in donating
                  directly to <br /> needy people. Every Sunday <br /> We
                  Collect and People Join us <br /> to Visit the nearby areas
                  and <br /> donate the essentials
                </Text>
                <Image ml="auto" height='200px' src={img001} alt="KID" />
              </Box>
            </GridItem>
            <VStack>
              <GridItem
                bg="#F6F6F6"
                w="100%"
                h="100%"
                p={3}
                borderRadius="24px"
              >
                <Box h="100%" textAlign="center" color="#000">
                  <Text
                    fontSize="xs"
                    style={{ textAlign: "left" }}
                    color="#000"
                    fontFamily= 'Plus Jakarta Sans'
                  >
                    How can you Contribute to this Good Deed
                  </Text>
                  <Text
                    fontSize="xs"
                    style={{ textAlign: "left" }}
                    color="#000"
                    fontFamily= 'Plus Jakarta Sans'
                  >
                    If you only want to come for service, you are most welcome
                    to come. Help us fill tables with hope! Join our campaign
                    and let's make a difference in someone's life.
                  </Text>
                  <Button
                    as={Link}
                    to={"/Contactus"}
                    style={{ background: "#0B5ED7", color: "white",fontFamily: 'Plus Jakarta Sans' }}
                  >
                    Contact us
                  </Button>
                </Box>
              </GridItem>
              <GridItem
                bg="#F6F6F6"
                w="100%"
                h="100%"
                p={5}
                borderRadius="24px"
              >
                <Box h="100%" textAlign="center" color="#000">
                  <Text
                    fontSize="xs"
                    style={{ textAlign: "left" }}
                    color="#000"
                    fontFamily= 'Plus Jakarta Sans'
                  >
                    New Update
                  </Text>
                  <Text
                    style={{ textAlign: "left", fontSize: "15px" }}
                    color="#0B5ED7"
                    fontFamily= 'Plus Jakarta Sans'
                  >
                    Upcoming campaign on 10Nov Sunday!
                  </Text>
                  <Button
                    colorScheme="whatsapp"
                    leftIcon={<FaWhatsapp size={25} />}
                    borderRadius="50px"
                    style={{marginTop:'10px' ,fontFamily:'Plus Jakarta Sans'}}
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
