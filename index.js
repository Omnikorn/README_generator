const fs = require("fs")
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


// const writeFileAsync = util.promisify(fs.writeFile);
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

  // const generateReadme = (answers) =>
  // ` <font=6><span styl="color:red"> ${answers.title} </span></font>
  
  // <font=4> Description </font>
  // ${answers.description}

  // <font=4> Installation </font>
  // ${answers.installation}

  // <font size="4"> Usag </font>
  // ${answers.usage}

  // <font size="4"> Contributions </font>
  // ${answers.contributors}

  // <font size="4"> Tests </font>
  // ${answers.test}

  
  // `
// console.log("your answers are:: " + answers)
// const inint = () => {
promptUser()

.then((answers) => generateMarkdown(answers)) 
.then((readme) => fs.writeFileSync("test.md", readme, (err)=>err ?console.log(err):console.log("ok")))
// .then(()=>console.log("succefulify written your readme file"))
// .catch((err)=>console.log(err));
// }

