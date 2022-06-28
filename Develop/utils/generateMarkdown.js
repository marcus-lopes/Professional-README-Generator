
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

function generateDescription(data){
  return `${data.description}`;
}

function generateUserName(data){
  return `${data.userName}`;
}

function generateGitHubLink(data){
  return `https://github.com/${data.userName}`;
}
/////
function addLine(){
  return '\n';
}

function generateLink(linkName, linkAddress, data){
  return `[${linkName}](${linkAddress})`;
}

function generateSubTitle(subTitle){
  return `## ${subTitle}`;
}

function generateNewLink(nameNewLink, newLink){
  return `* [${nameNewLink}](${newLink})`
}




module.exports = {generateMarkdown, addLine, generateLink, generateDescription, generateSubTitle, generateUserName, generateGitHubLink, generateNewLink};


