
// import { expect, page } from '@playwright/test';

// export class Movies {

//     constructor(page) {
//         this.page = page;
//     }

//     async goForm() {
//         // '$' significa que termina com, neste caso termina com 'register'
//         const addMovie = this.page.locator('a[href$="register"]')
//         await this.page.waitForTimeout(1000)
//         await expect(addMovie).toBeVisible()
//         await addMovie.click()
//     }
//     async submit() {
//         // Este abaixo ele vai pegar o botão que contém o texto 'Cadastrar'
//         await this.page.getByRole('button', { name: 'Cadastrar' }).click()
//     }

//     async addNewMovie(title, overview, company, release_year) {
//         await this.goForm()
//         await this.page.getByLabel('Titulo do filme').fill(title)
//         await this.page.getByLabel('Sinopse').fill(overview)
//         await this.page.locator('#select_company_id .react-select__indicators')
//             .click()
//         // esse código abaixo salva o html abaixo no momento após o click acima
//         // const html = await this.page.content()
//         // console.log(html)
//         // a linha debaixo vai localizar o select e filtrar apenas pela empresa que eu indicar
//         await this.page.locator('.react-select__option')
//             .filter({ hasText: company }).click()
//         await this.page.locator('#select_year .react-select__indicators')
//             .click()
//         await this.page.locator('.react-select__option')
//             .filter({ hasText: release_year }).click()
//         await this.submit()
//     }

//     async alertHaveText(target) {
//         await expect(this.page.locator('.alert')).toHaveText(target)
//     }

// }
