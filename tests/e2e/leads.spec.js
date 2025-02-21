
const { test, expect } = require('../support')
import { faker } from '@faker-js/faker/locale/en';



test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  const leadEmail = faker.internet.exampleEmail();
  const leadName = faker.person.fullName()

  await page.landing.visit()
  await page.landing.openLeadModal()
  await page.landing.submitLeadForm(leadName, leadEmail)
  const newLeadMessage = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!';
  await page.toast.containText(newLeadMessage)

  // await page.waitForTimeout(1000);
})

test('não deve cadastrar um lead quando o e-mail já existe', async ({ page, request }) => {
  const leadEmail = faker.internet.exampleEmail();
  const leadName = faker.person.fullName()

  const newLead = await request.post('http://localhost:3333/leads', {
    data: {
      name: leadName,
      email: leadEmail
    }
  })

  expect(newLead.ok()).toBeTruthy()

  await page.landing.visit()
  await page.landing.openLeadModal()
  await page.landing.submitLeadForm(leadName, leadEmail)
  const existEmailMessage = 'O endereço de e-mail fornecido já está registrado em nossa fila de espera.';
  await page.toast.containText(existEmailMessage)

  // await page.waitForTimeout(1000);
});

test('não deve cadastrar um lead na fila de espera e-mail incorreto', async ({ page }) => {

  await page.landing.visit()
  await page.landing.openLeadModal()
  await page.landing.submitLeadForm('Math', 'math')
  await page.landing.alertHaveText('Email incorreto')
});

test('não deve cadastrar com o nome em branco', async ({ page }) => {

  await page.landing.visit()
  await page.landing.openLeadModal()
  await page.landing.submitLeadForm('', 'math@math.com')
  await page.landing.alertHaveText('Campo obrigatório')
});

test('não deve cadastrar com o email em branco', async ({ page }) => {

  await page.landing.visit()
  await page.landing.openLeadModal()
  await page.landing.submitLeadForm('Math', '')
  await page.landing.alertHaveText('Campo obrigatório')
});

test('não deve cadastrar com o email e nome em branco', async ({ page }) => {

  await page.landing.visit()
  await page.landing.openLeadModal()
  await page.landing.submitLeadForm('', '')
  await page.landing.alertHaveText([
    'Campo obrigatório',
    'Campo obrigatório'])
});