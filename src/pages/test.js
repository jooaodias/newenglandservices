import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Test = () => {
    return (
        <Layout>
            <SEO
                pageTitle="Test"
                description="Test"
                keywords="test"
            />
            <p>Isso é um teste</p>
            <Link to="/">Back to home page</Link>
        </Layout>
    )
}

export default Test
