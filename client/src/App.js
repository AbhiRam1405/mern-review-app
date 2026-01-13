import React from 'react';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
        <h1>MERN Review App</h1>
      </header>
      <main>
        <ReviewForm />
      </main>
    </div>
  );
}

export default App;
