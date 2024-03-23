import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";


export const EmailTemplate = ({
  response
}) => (
    
    <Html>
    <Head />
    <Preview> {response?.userName} has shared you a file. </Preview>
   <Body style={main}>
      <Container>
        <Section style={logo}>
          {/* <Img src={`https://img.freepik.com/free-vector/concept-landing-page-transfer-files_52683-27127.jpg?t=st=1710077475~exp=1710081075~hmac=63270dbe9cffb386fda768052901a899d661cb73272b3a78c2c64e8561cfe44d&w=740`} /> */}
        </Section>

        <Section style={content}>
           <Row>
            {/* <Img
              style={image}
              width={620}
              src={`/logo.svg`}
            /> */}
          </Row>

          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi {response?.senderEmail?.split("@")[0] },
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {response?.userName} has shared a file with you with following details.
              </Heading>

              <Text style={paragraph}>
                <b> FileName: {response?.fileName} </b>
              
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File Type: {response?.fileType} </b>
               
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>fileSize: {response?.fileSize} </b>
               
              </Text>
              <Text
                style={{
                  color: "rgb(0,0,0, 0.5)",
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                *Download the sent File on your own risk.
                
              </Text>

              <Text style={paragraph}>
                If you trust on the shared file then you can access through this link
              </Text>

              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>url: {response?.shortUrl} </b>
               
              </Text>

              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Password: {response?.password} </b>
               
              </Text>
              
            </Column>
          </Row>
          
        </Section>

        <Section style={containerImageFooter}>
          {/* <Img
            style={image}
            width={620}
            src={`https://img.freepik.com/free-vector/concept-landing-page-transfer-files_52683-27127.jpg?t=st=1710077475~exp=1710081075~hmac=63270dbe9cffb386fda768052901a899d661cb73272b3a78c2c64e8561cfe44d&w=740`}
            alt="banner image"
          /> */}
        </Section>

        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        >
          © 2024 | Share Now, India | https://sharenowdotcom.vercel.app
        </Text>
      </Container>
    </Body>

    
  </Html>
);



//CSS for the html file----



const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };