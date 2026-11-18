import type { Page, Locator } from '@playwright/test'

export class LoginPage {
    private readonly page: Page;
    private readonly userName : Locator;
    private readonly password : Locator;
    private readonly submit : Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Username')
        this.submit = page.getByRole('button', { name : 'login'})
    }

    async goto()
    {
        this.page.goto('https://saucedemo.com');
    }

    async login()
    {
        await this.userName.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.submit.click()
    }
} 