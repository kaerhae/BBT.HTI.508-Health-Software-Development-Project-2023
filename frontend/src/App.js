import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Health Care Software Project</h1>
      <p>This is going to be the frontpage of the Health Software Project</p>

      <div >
        <input type="email" placeholder='Email or Username' />
      </div>
      <div>
        <input type="password" placeholder='Password' />
      </div>

      <div>
        <button>Login</button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default App;
