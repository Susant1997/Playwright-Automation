
import { test, expect, Locator } from "@playwright/test";

test("Dynamic elements in Playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/")

  //button[@name='start' or @name='stop']
  //button[contains(@name,'st')]
  //button[start-with(@name,'st')]
/*
  // 1. Dynamic element with OR operator using Xpath
  // loop to clisk the button 5 times
    for (let i = 0; i < 5; i++) {
        
        const button: Locator = page.locator("//button[@name='start' or @name='stop']");
        // const button: Locator = page.locator("//button[contains(@name,'st')]");
        // const button: Locator = page.locator("//button[starts-with(@name,'st')]");

        await button.click();
        await page.waitForTimeout(2000);

    }

    // 2. Dynamic element with OR operator using CSS
    // loop to clisk the button 5 times
    for (let i = 0; i < 5; i++) {   

        const button: Locator = page.locator("button[name='start'], button[name='stop']");
        await button.click();
        await page.waitForTimeout(2000);

    }
    */


    // 3. Dynamic element with OR operator using Playwright's built-in methods
    // loop to clisk the button 5 times
    for (let i = 0; i < 5; i++) {
        const button: Locator = page.getByRole('button', { name: /start|stop/i });
        await button.click();
        await page.waitForTimeout(2000);

    }
})