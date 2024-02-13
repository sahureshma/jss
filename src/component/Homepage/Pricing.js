const Pricing = () =>{
  const imageStyle = {
    height: '200px',
    width: '',
  };
    return(
        <section class="membership container" id="pricing">
        <h3 class="section-title">Data-driven pipelines in minutes</h3>
        <span class="section-subtitle"
          >Data pipelines let you integrate data from different sources and transform it for analysis.<br/> They remove data silos and make your data analytics more reliable and accurate.
        </span>
        <div class="row membership">
          <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Description"  style={{ height: '200px', width: '400px'}} />
          <p>Technology is the use of scientific knowledge for practical purposes or applications, whether in industry or in our everyday lives. So, basically, whenever we use our scientific knowledge to achieve some specific purpose, we're using technology.</p>
        </div>
      </section>

    );
};
export default Pricing;