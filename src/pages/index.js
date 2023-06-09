import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h3>Cloud Atlas Stuff</h3>
        <p>Building on the Atlas metaphor, exploring Fetlify Forms, and Serverless Functions</p>
        <StaticImage  src="../images/cloudatlas-poster.jpg" 
          height={600} 
          alt="Cloud Atlas Poster"
          placeholder="blurred"
          loading="eager"
          >
          </StaticImage>
          <form method="post" 
                name="Data Collection Form" 
                data-netlify="true">
            <input type="hidden" name="form-name" value="Data Collection Form"/>
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label><br/>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label><br/>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
