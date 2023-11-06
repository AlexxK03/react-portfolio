const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 px-4">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">WELCOME!</h1>
            <p className="py-6">
              My portfolio is a collection of work I have done over the last three years
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
