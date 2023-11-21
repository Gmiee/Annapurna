import React , {useState , useEffect} from "react";
import photo from "../Assets/06.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { Skeleton, Stack, SkeletonCircle, SkeletonText , Box } from '@chakra-ui/react'
const Contactus = () => {
  
  const [isloading, setisloading] = useState(false)
  const [isloading2, setisloading2] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setisloading(true); 
      setisloading2(true); 
    }, 1000); 

    return () => clearTimeout(timeout); // Clean up the timeout on unmount (optional)
  }, []);
  return (
    <>
      <div className="container01">
        <div className="photo">
          {isloading ? (<img
            src={photo}
            alt="GroupPhoto"
            height={"450"}
            width={"450"}
            style={{ aspectRatio: 1 / 1, objectFit: "cover" }}
          /> ) :
          <Stack>
          <Skeleton height='450px' width='450px' />
          </Stack>  
          } 
          
        </div>
        {isloading2 ? (
                <div className="form">
                <div className="fcf-body" id="contact">
                  <div id="fcf-form">
                    
                  <div className="headingz">Submit Your Query</div>
                    <form
                      id="fcf-form-id"
                      className="fcf-form-className"
                      method="post"
                      action="https://formspree.io/f/xayglawa"
                    >
                      <div className="fcf-form-group">
                        <label htmlFor="Name" className="fcf-label">
                          Your Name
                        </label>
                        <div className="fcf-input-group">
                          <input
                            type="text"
                            placeholder="Name"
                            id="Name"
                            name="Name"
                            className="fcf-form-control"
                            required
                          />
                        </div>
                      </div>
      
                      <div className="fcf-form-group">
                        <label htmlFor="Email" className="fcf-label">
                          Your Email address
                        </label>
                        <div className="fcf-input-group">
                          <input
                            type="email"
                            placeholder="Email"
                            id="Email"
                            name="Email"
                            className="fcf-form-control"
                            required
                          />
                        </div>
                      </div>
      
                      <div className="fcf-form-group">
                        <label htmlFor="Message" className="fcf-label">
                          Your Message
                        </label>
                        <div className="fcf-input-group">
                          <textarea
                            id="Message"
                            placeholder="Message"
                            name="Message"
                            className="fcf-form-control"
                            rows="6"
                            maxLength="3000"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="fcf-form-group">
                        {/* <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send
                              Message</button> */}
      
                          <div className="btns">
                        <button
                          type="submit"
                          style={{
                            padding: "7px 15px",
                            background: "#fff",
                            borderRadius: "10px",
                            border: "2px solid",
                          }}
                        >
                          Send
                        </button>
                        <a
                          href="https://wa.me/919510232212?text=Hello%20I%20Also%20Wanna%20Come%20For%20Sewa!"
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >{" "}
                          <FaWhatsapp size={30} color="black" />{" "}
                        </a>
                        <a
                          href="https://wa.me/919510553908?text=Hello%20I%20Also%20Wanna%20Come%20For%20Sewa!"
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <FaWhatsapp size={30} color="black" />{" "}
                        </a>
      
      
                        <Button colorScheme='whatsapp'  leftIcon={<FaWhatsapp size={25}  />}>
                          <a href='https://chat.whatsapp.com/LBbGRUlvgeCFFsXLpNryJQ' target="_blank" >
                        Community
                          </a>
                        </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
                ):
                <Box padding='6' mt={5} bg='white' width='70%'>
  <SkeletonText  m='auto' width='70%' noOfLines={1} spacing='4' skeletonHeight='5' />
  <SkeletonText  m='4' width='10%' noOfLines={1} spacing='4' skeletonHeight='5' />
  <SkeletonText  m='4' noOfLines={1} spacing='4' skeletonHeight='5' />
  <SkeletonText  m='4' width='10%' noOfLines={1} spacing='4' skeletonHeight='5' />
  <SkeletonText  m='4' noOfLines={1} spacing='4' skeletonHeight='5' />
  <SkeletonText  m='4' width='10%' noOfLines={1} spacing='4' skeletonHeight='5' />
  <SkeletonText  m='4' noOfLines={1} spacing='4' skeletonHeight='150' />
  <SkeletonText  m='4' width='10%' noOfLines={1} spacing='4' skeletonHeight='6' />
</Box>
                }
        
      </div>
    </>
  );
};

export default Contactus;
