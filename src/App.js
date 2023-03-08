import './App.css';
import { useState } from "react";
import DalleImg from "./images/dalle.webp"
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
    <Container className='mt-5'>

      <Row className='text-center'>

        <Col className='title col-md-12 col-sm-12 col-xl-6'>




          <p>Generate a unique image using DALL·E</p>
          <p>What do you want to see?</p>


          <div class="input-group">

            <input
              class="input"
              placeholder='A sunset on the Sydney Opera House'
              onChange={(e) => setUserPrompt(e.target.value)}
            />
            <button
              type="submit"
              class="button--submit"
              onClick={() => generateImage()}
              disabled={loadingImage}>
              {loadingImage
                ?
                'Loading...'
                :
                'Generate'}

            </button>
          </div>
        </Col>

        <Col className='mt-5 col-md-12 col-sm-12 col-xl-6'>
          {imageUrl
            ?
            <img src={imageUrl} className="image" alt="generated img" />
            :
            <img src={DalleImg} className="image" alt="DALL-E" />
          }
        </Col>
      </Row>

    </Container>
  )

}

export default App;