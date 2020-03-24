import React from 'react';
import logo from './logo.svg';
import top from './top.svg';
import './App.scss';
import projects from './projects.json';
import me from './me.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{me.contacts.who} {me.contacts.whom}</h1>
        <p>Hi, I'm {me.contacts.who}, welcome to my portfolio.</p>
        <p>{me.contacts.role}</p>
        <p><code>{me.contacts.where}</code></p>
        <div className="skill-list">
        {
          me.skills.map(skillList =>
            skillList.map(skill => <span className="skill" key={skill}>{skill}</span>)
          )
        }
        </div>
        <a
          className="App-link"
          href={me.contacts.cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my résumé in PDF
        </a>
        <a
          className="App-link"
          href={me.contacts.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check my Github
        </a>
        <div>
          <a
            className="App-link"
            href={'mailto:' + me.contacts.e + '@' + me.contacts.mail}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ping me on Email
          </a>
          {' '}or{' '}
          <a
            className="App-link"
            href={me.contacts.tg}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </header>
      <main>
        {
          projects.map(project =>
            <div key={project.name} className="project">
              <div className="project-about">
              <div><h3>{project.name}</h3></div>
              <div><strong>{project.year}</strong></div>
              <div>{project.about}</div>
              <div className="tech-wrap">
              <img src={"assets/" + project.tech + ".png"} className="tech" title={"Made with " + project.tech}/>
              </div>
              <div>
                <a
                  className="App-link"
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source →
                </a>
              </div>
              <div>
                <a
                  className="App-link"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo →
                </a>
              </div>
            </div>
              <div className="project-screenshot" style={{backgroundImage: "url(assets/" + project.pic + ")"}} title={project.name + " — Screenshot"}>
            </div>
            </div>
          )
        }
        <a className="back-to-top-fixed js-editable-target editable js-back-to-top" href="#">
          <img src={top} title="Go to top" className="icon icon-back-to-top"/>
        </a>
      </main>
    </div>
  );
}

export default App;
