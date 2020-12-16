import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'reactstrap'

const Home = () => {
  return (
    <Layout>
      <SEO
        description="New england painting is the future"
        keywords="Painting, services, construction, new england, job"
      />
      <h1>New England Services!</h1>
      <hr />
      <p>New England Painting is well-equipped to handle the painting needs of all types of properties—big or small. Whether you need interior or exterior painting (or both!), our experienced painting professionals knows how to get the job done right, the first time</p>
      <Row className="justify-content-center">
        <figure>
          <StaticQuery
            query={
              graphql`
                query {
                  file(relativePath: { eq: "new_england.jpg" }) {
                    childImageSharp {
                      fixed(width: 300, height: 300) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
            `}
            render={data => (
              <Img
                fixed={data.file.childImageSharp.fixed}
                imgStyle={{ borderRadius: '10px' }}
                alt="New England Painting"
              />
            )}

          />
        </figure>
      </Row>
      <section>
        <h6>Checkout our social  media</h6>
        <a href="https://www.facebook.com/newenglandservices" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" title="Facebook" />
        </a>{' '}
        <a href="https://www.instagram.com/newenglandservices/?hl=en" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" title="Instagram" />
        </a>
      </section>

      <Link to="/test">Go to test</Link>
    </Layout>
  )
};

export default Home;
