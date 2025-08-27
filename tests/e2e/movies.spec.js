
// const { test } = require('../support')

// import { faker } from '@faker-js/faker/locale/en';
// const { executeSQL } = require('../support/database')

// const data = require('../support/fixtures/movies.json')



// test('deve poder cadastrar um novo filme', async ({ page }) => {

//   const movie = data.resident_evil_o_hospedeiro
//   await executeSQL(`DELETE FROM movies WHERE title = '${movie.title}';`)
//   await page.login.login('admin@zombieplus.com', 'pwd123', 'Admin')
//   await page.movies.addNewMovie(movie.title, movie.overview, movie.company, movie.release_year)
//   await page.toast.containText('Cadastro realizado com sucesso!')

// })

// test('não deve cadastrar quando os campos obrigatórios não são preenchidos', async ({ page }) => {
//   await page.login.login('admin@zombieplus.com', 'pwd123', 'Admin')
//   await page.movies.goForm()
//   await page.movies.submit()
//   await page.movies.alertHaveText([
//     'Por favor, informe o título.',
//     'Por favor, informe a sinopse.',
//     'Por favor, informe a empresa distribuidora.',
//     'Por favor, informe o ano de lançamento.'
//   ])
// })