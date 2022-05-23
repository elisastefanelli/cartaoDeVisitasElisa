import chalk from 'chalk';
import data from './data.js';
import figlet from 'figlet';
import gradient from 'gradient-string';

const card = () => {
  const titulo = figlet.textSync('Elisa Stefanelli', {
    font: 'Big',
    width: 80
  });

  console.log(gradient.pastel.multiline(titulo));

  console.log(
    `${chalk.underline(
      gradient.retro('Este_é_o_meu_cartão_de_apresentação')
    )} 😊\n`
  );

  console.log(`${chalk.yellowBright(data.description)}\n`);

  console.log(`${chalk.cyan.bold('name:')} ${data.name}
${chalk.cyan.bold('title:')} ${data.title}
${chalk.cyan.bold('email:')} ${data.email}
${chalk.cyan.bold('github:')} https://github.com/${data.github}
${chalk.cyan.bold('linkedin:')} https://linkedin.com/in/${data.linkedin}`);
};

export default card;
