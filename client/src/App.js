import React, { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleReviewAdded = () => {
    // Increment triggers useEffect in ReviewList
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="App">
      <header style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#282c34',
        color: 'white',
        marginBottom: '20px'
      }}>
        <h1>MERN Review App</h1>
      </header>
      <main>
        <ReviewForm onReviewAdded={handleReviewAdded} />
        <ReviewList refreshTrigger={refreshTrigger} />
      </main>
    </div>
  );
}

export default App;
