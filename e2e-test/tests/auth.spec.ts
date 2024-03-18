import { test, expect } from '@playwright/test';

const UI_URL = 'http://localhost:5173/'
test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Sign In" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  await page.locator("[name=email]").fill("Abc@gmail.com")
  await page.locator("[name=password]").fill("123456")
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Sign in Success")).toBeVisible();
  await expect(page.getByRole("link", {name:"My Bookings"})).toBeVisible()
  await expect(page.getByRole("link", {name:"My Hotels"})).toBeVisible()
  await expect(page.getByRole("button", {name:"Sign Out"})).toBeVisible()

});


test("should allow user to register", async ({ page }) => { 
  const testEmail=`test_register${Math.floor(Math.random()*9000)+10000}@gmail.com`
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Create a new account" }).click();
  await expect(page.getByRole("heading", { name: "Create an Account" })).toBeVisible();
  await page.locator("[name=firstName]").fill("test_firstname")
  await page.locator("[name=lastName]").fill("test_lastname")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("test_register132")
  await page.locator("[name=confirmPassword]").fill("test_register132")
  await page.getByRole("button", { name: "Create Account" }).click(); 

  await expect(page.getByText("Registration Success!")).toBeVisible();
  await expect(page.getByRole("link", {name:"My Bookings"})).toBeVisible()
  await expect(page.getByRole("link", {name:"My Hotels"})).toBeVisible()
  await expect(page.getByRole("button", {name:"Sign Out"})).toBeVisible()

})