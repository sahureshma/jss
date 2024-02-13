import HeroImage from '../../assest/images/bg2.jpg.webp';
const Hero = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50', // Green
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '10px',
  };
    return (
        <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>


    <h1 class="hero-title">
    Your data with <br />
   real-time analytics
    </h1>
   <p style={{color:'white'}}>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae<br/> ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>

    <a href="signin" class="hero-btn-get-started">Start free trial </a>
   
    <button style={buttonStyle}>Learn more</button>
   
  </section>
    );
};
export default Hero;