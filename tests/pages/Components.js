import { expect, page } from '@playwright/test';


export class Toast {
    constructor(page){
        this.page = page
    }
    async containText(newLeadMessage) {
        const toast = this.page.locator('.toast')
        await expect(toast).toContainText(newLeadMessage);
        await expect(toast).not.toBeVisible({ timeout: 5000 });
    }
}