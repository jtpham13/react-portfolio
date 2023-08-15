import React from 'react';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <div>
        <div>
          <h4>Front-End Skills</h4>
          <ul>
            {['HTML', 'CSS', 'JavaScript', 'React', 'jQuery', 'HandlebarsJS', 'Bootstrap', 'Bulma'].map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Back-End Skills</h4>
          <ul>
            {['NodeJS', 'Express', 'APIs', 'MySQL, Sequelize', 'MongoDB, Mongoose'].map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
