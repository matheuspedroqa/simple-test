
// import { expect, page } from '@playwright/test';

// export class Login {

//     constructor(page) {
//         this.page = page;
//     }

//     async visitLogin() {
//         await this.page.goto('localhost:3000/admin/login')
//     }

//     async checkpointLogin() {
//         const loginForm = this.page.locator('.login-form')
//         await expect(loginForm).toBeVisible
//     }

//     async submitLogin(email, password) {
//         await this.page.getByPlaceholder('E-mail').fill(email)
//         await this.page.getByPlaceholder('Senha').fill(password)
//         await this.page.getByText("Entrar").click()
//         // await this.page.waitForTimeout(1000);

//     }

//     async alertHaveText(target) {
//         await expect(this.page.locator('.login-form')).toHaveText(target)
//     }

//     async alertLoginHaveText(text) {
//         await expect(this.page.locator('span[class$=alert]')).toHaveText(text);
//     }

//     async isLoggedIn(username) {
//         const loggedUser = this.page.locator('.logged-user')
//         await expect(loggedUser).toHaveText(`Olá, ${username}`)
//     }
//     async login(email, password, username) {
//         await this.visitLogin()
//         await this.checkpointLogin()
//         await this.submitLogin(email, password)
//         await this.isLoggedIn(username)
//     }
// }
