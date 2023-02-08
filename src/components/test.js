import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>AZHAR KS</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a software engineer with a passion for developing innovative solutions. I have a strong background in React, Node.js, and MongoDB. I am constantly learning new technologies and expanding my skill set.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>A web application built with React and Node.js that allows users to search for books and save their favorites.</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>A mobile app built with React Native that helps users track their daily water intake and reminds them to drink more water.</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} azhar</p>
      </footer>
    </div>
  );
}

export default App;
