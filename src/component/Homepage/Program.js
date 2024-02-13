import ProgramImage from '../../assest/images/11.png';
import ProgramImage2 from '../../assest/images/algo.png';
import ProgramImage3 from '../../assest/images/real.png';

const Program = () =>{
    return(
        <section class="program container" id="program">
        <h3 class="section-title">Get actionable insights from Big Data in 3 steps</h3>
        <span class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit . </span>
        <div class="row program-row">
          <div class="col program-card">
            <img
              class="program-card-image"
              src= {ProgramImage}
              alt=""
            />
            <h4 class="card-title">Valuable bussiness insights</h4>
            <p class="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
          </div>
          <div class="col program-card">
            <img
              class="program-card-image"
              src= {ProgramImage2}
              alt=""
            />
            <h4 class="card-title">Powerful algorithm</h4>
            <p class="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
          </div>
          <div class="col program-card">
            <img
              class="program-card-image"
              src= {ProgramImage3}
              alt=""
            />
            <h4 class="card-title">Data in real-time</h4>
            <p class="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
          </div>
        </div>
      </section>

    );
};
export default Program;