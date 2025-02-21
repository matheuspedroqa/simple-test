
const { test, expect } = require('../support')




test('deve logar como administrador', async ({ page }) => {

  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('admin@zombieplus.com', 'pwd123')
  await page.movies.isLoggedIn()
})

test('não deve logar senha incorreta', async ({ page }) => {

  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('admin@zombieplus.com', 'pwd1234')
  const errorMessage = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.';
  await page.toast.containText(errorMessage)
})

test('não deve logar email incorreto', async ({ page }) => {

  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('admin@zombieplus.com.br', 'pwd123')
  const errorMessage = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.';
  await page.toast.containText(errorMessage)
})

test('não deve cadastrar com o nome em branco', async ({ page }) => {

  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('', 'math@math.com')
  await page.login.alertHaveText(/Campo obrigatório/)
});

test('não deve cadastrar com o email em branco', async ({ page }) => {
  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('Math', '')
  await page.login.alertHaveText(/Campo obrigatório/)
});

test('não deve cadastrar com o email e nome em branco', async ({ page }) => {

  await page.login.visitLogin()
  await page.login.checkpointLogin()
  await page.login.submitLogin('', '')
  await page.login.alertLoginHaveText([
    'Campo obrigatório',
    'Campo obrigatório'])
});