import './SignIn.css';

function SignIn(){
  
      
    return(
        <div className="App">
        <div className='logo-box'>
          <img src='./pngtree-twitter-social-media-round-icon-png-image_6315985.png' alt='logo'className='logo'/>
          <h2>Sign in to Twitter</h2>
          <button>
          <img src='./googlelogo.png' alt='logo'/>
          Sign in with Google
          </button>
          <button>
          <img src='./applelogo.png' alt='logo'/>
          Sign in with Apple
          </button>
  
          <hr></hr>
          <span>Or</span>
          <form>
            <input type='text' placeholder='Phone email or username'/>
            <button>
              Next
            </button>
          </form>
          <button> Forget Password</button>
          <p>Don't Have an account <a>SignUp</a></p>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  

