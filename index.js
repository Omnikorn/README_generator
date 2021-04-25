const fs = require("fs")
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



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
choices: ['MIT', 'Apache 2.0','GPL','BSD-2','BSD-3','BSD-4','None']},
{
    type: 'input',
    name: 'userName',
    message: 'What is your githun user name ?'
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email?'
}
    ]);
    
  };

  

  
promptUser()

.then((answers) => generateMarkdown(answers)) 
.then((readme) => fs.writeFileSync("auto_readme.md", readme, (err)=>err ?console.log(err):console.log("File created successfully")))

