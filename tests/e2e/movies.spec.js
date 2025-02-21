
const { test } = require('../support')

import { faker } from '@faker-js/faker/locale/en';
const { executeSQL } = require('../support/database')

const data = require('../support/fixtures/movies.json')



test('deve poder cadastrar um novo filme', async ({ page }) => {

  const movie = data.resident_evil_o_hospedeiro

  await executeSQL(`DELETE FROM movies WHERE title = '${movie.title}';`)

  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('admin@zombieplus.com', 'pwd123')
  await page.movies.isLoggedIn()
  await page.movies.addNewMovie(movie.title, movie.overview, movie.company, movie.release_year)
  await page.toast.containText('Cadastro realizado com sucesso!')



})
