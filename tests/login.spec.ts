import { test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

test("login", async ({ page}) => {    
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
  await expect(page).toHaveTitle('Swag Labs');
})