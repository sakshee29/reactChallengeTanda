

function App() {
  return (
    <div className="App">
        <a href="#"><h1>Adnat</h1></a>
        <h2>Login</h2>
        <form>
          <label>
            <br></br> Email:<br></br>
            <input type="text" name="email" />
          </label>

          <label>
            <br></br>Password:<br></br>
            <input type="text" name="email" />
          </label>
          <br></br>
          <input type="submit" value="Login" />
        </form>

        <a href="#">Signup</a><br></br>
        <a href="#">Forgot your Password?</a>

    </div>
  );
}

export default App;
