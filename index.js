const fs = require("fs")
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Welcome to the auto readme generator. What is your project called? ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your application',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instruction?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Any usage instructions?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Any contributors to the project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests were carried out?',
      },
      {type: 'list',
    name: 'license',
choices: ['MIT', 'HARRY']}
    ]);
    
  };

  const generateReadme = (answers) =>
  ` <font=6> ${answers.title} </font>
  
  <font=4> Description </font>
  ${answers.description}

  <font=4> Installation </font>
  ${answers.installation}

  <font size="4"> Usag </font>
  ${answers.usage}

  <font size="4"> Contributions </font>
  ${answers.contributors}

  <font size="4"> Tests </font>
  ${answers.test}

  
  `
// console.log("your answers are:: " + answers)
promptUser()
.then((answers) => console.log("your answers are:: " + generateReadme(answers)))