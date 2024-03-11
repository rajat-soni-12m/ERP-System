import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Products from './components/Product';
import Orders from './components/Orders';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigateTo = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  let content;
  switch (currentPath) {
    case '/':
      content = <Dashboard navigateTo={navigateTo}/>;
      break;
    case '/product':
      content = <Products navigateTo={navigateTo} />;
      break;
    case '/orders':
      content = <Orders navigateTo={navigateTo}/>;
      break;
    default:
      content = <div>Page not found</div>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default App;
