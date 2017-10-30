import React from 'react';
import {Link} from 'react-router';

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Whoooops! Sorry, there is nothing to see here. :=)</p>
      <p><Link to="app">Back to Home</Link></p>
    </div>
  );
}

export default NotFoundPage;
