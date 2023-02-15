import './App.css';
import { useState } from "react";
import DalleImg from "./images/dalle.jpeg"
import { Container, Row, Col } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);




function App() {


  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loadingImage, setLoadingImage] = useState(false)

  const generateImage = async () => {
    setLoadingImage(true)
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "512x512",
    }
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url
    console.log(urlData);
    setImageUrl(urlData);
    setLoadingImage(false)
  }

  return (
    <div className='home'>
      <Container>
        <Row>
          <Col>
            <p>Generate a unique image using DALL·E</p>
            <p>What do you want to see?</p>
            <input
              placeholder='A sunset on the Sydney Opera House'
              onChange={(e) => setUserPrompt(e.target.value)}
            />
            <button
              onClick={() => generateImage()}
              disabled={loadingImage}>
              {loadingImage
                ?
                'Loading...'
                :
                'Generate'}

            </button>
          </Col>

          <Col >
            {imageUrl
              ?
              <img src={imageUrl} className="image" alt="ai thing" />
              :
              <img src={DalleImg} className="hero" alt="DALL-E" />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default App;