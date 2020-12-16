import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <section className="section">
      <h1>404: Not Found</h1>
      <p className="has-text-centered">
        You just hit a route that does not exist.
        {' '}
        <span role="img" aria-label="confused">
          😕
        </span>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;