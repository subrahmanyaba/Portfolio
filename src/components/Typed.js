import Typed from 'react-typed';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>
        <Typed
          strings={['Welcome to My Portfolio', 'Explore My Projects', 'Discover My Skills']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h1>
      <p>Explore my work and get in touch!</p>
    </div>
  );
};

export default HomePage;
