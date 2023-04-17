// This function will generate the markdown data for the Logo
function generateMarkdown(data) {
  const { title, color, shape, ...info } = data;

  return `
    # ${info.title}
    ## Color
    ${info.color}
    ## Shape
    ${info.shape}
    ## Text Color
    ${info.textcolor}`;
}

module.exports = generateMarkdown;
