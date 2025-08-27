
const { test, expect } = require('../support')
import { faker } from '@faker-js/faker/locale/en';

test('deve acessar o google', async ({ page }) => {
  await page.leads.visit()
  await page.leads.openGoogle()
})
// test('deve cadastrar um lead na fila de espera', async ({ page }) => {
//   const leadEmail = faker.internet.exampleEmail();
//   const leadName = faker.person.fullName()

//   await page.leads.visit()
//   await page.leads.openLeadModal()
//   await page.leads.submitLeadForm(leadName, leadEmail)
//   const newLeadMessage = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!';
//   // await page.waitForTimeout(100);
//   await page.toast.containText(newLeadMessage)


// })

// test('não deve cadastrar um lead quando o e-mail já existe', async ({ page, request }) => {
//   const leadEmail = faker.internet.exampleEmail();
//   const leadName = faker.person.fullName()

//   const newLead = await request.post('http://localhost:3333/leads', {
//     data: {
//       name: leadName,
//       email: leadEmail
//     }
//   })

//   expect(newLead.ok()).toBeTruthy()

//   await page.leads.visit()
//   await page.leads.openLeadModal()
//   await page.leads.submitLeadForm(leadName, leadEmail)
//   const existEmailMessage = 'O endereço de e-mail fornecido já está registrado em nossa fila de espera.';
//   await page.toast.containText(existEmailMessage)

//   // await page.waitForTimeout(1000);
// });

// test('não deve cadastrar um lead na fila de espera e-mail incorreto', async ({ page }) => {

//   await page.leads.visit()
//   await page.leads.openLeadModal()
//   await page.leads.submitLeadForm('Math', 'math')
//   await page.leads.alertHaveText('Email incorreto')
// });

// test('não deve cadastrar com o nome em branco', async ({ page }) => {

//   await page.leads.visit()
//   await page.leads.openLeadModal()
//   await page.leads.submitLeadForm('', 'math@math.com')
//   await page.leads.alertHaveText('Campo obrigatório')
// });

// test('não deve cadastrar com o email em branco', async ({ page }) => {

//   await page.leads.visit()
//   await page.leads.openLeadModal()
//   await page.leads.submitLeadForm('Math', '')
//   await page.leads.alertHaveText('Campo obrigatório')
// });

// test('não deve cadastrar com o email e nome em branco', async ({ page }) => {

//   await page.leads.visit()
//   await page.leads.openLeadModal()
//   await page.leads.submitLeadForm('', '')
//   await page.leads.alertHaveText([
//     'Campo obrigatório',
//     'Campo obrigatório'])
// });