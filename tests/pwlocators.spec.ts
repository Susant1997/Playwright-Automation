/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test, expect, Locator} from "@playwright/test"

test.skip("Verify Playwright Locators", async ({page}) =>{

    await page.goto("https://adactinhotelapp.com/");
    // page.getByAltText() to locate an element, usually image, by its text alternative.
    // Use the getByAltText() method to locate an image and area element by its alt text.

    const logo:Locator = page.getByAltText("AdactIn Group" ,{exact: true});
    await expect(logo).toBeVisible();

    // page.getByText() to locate by text content.
    // Use the getByText() method to locate an element by its text content.
    // Use this locator to find non interactive elements, such as headings, paragraphs, and spans.
    // For interactive elements, such as buttons, inputes and links, use getByRole() instead.

    // const text:Locator =page.getByText("Adactin Launches The Adactin Hotel App!")
    // await expect(text).toBeVisible();
    // into single line
    // await expect(page.getByText("Adactin Launches The Adactin Hotel App")).toBeVisible(); // exact text match
    // await expect(page.getByText("Adactin Launches")).toBeVisible(); // partial text match
    await expect(page.getByText(/adactin\s+launches/i)).toBeVisible(); // case-insensitive match

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    // Use the getByRole() method to locate an element by its ARIA role.
    // Use this locator to find interactive elements, such as buttons, inputes and links.

    await page.getByRole("link",{name: "New User Register Here"}).click();
    await expect(page.getByText( "New User Registration Form")).toBeVisible(); 

  


})

test("Verify Playwright Locators 2", async ({page}) =>{
      await page.goto("https://www.opencart.com/index.php?route=account/register");

        //page.getByLabel() to locate a form control by associated label's text.
        // Use the getByLabel() method to locate a form control by its associated label's text.

        await page.getByLabel("First Name").fill("Susant");
        await page.getByLabel("Last Name").fill("Bhandu");
        await page.getByLabel("E-Mail").fill("susant@example.com");

        // page.getByPlaceholder() to locate an input by placeholder.
        // Use the getByPlaceholder() method to locate an input by its placeholder text when the input does not have an associated label.

        await page.getByPlaceholder("Username").fill("susantbhandu");

        // page.getByTitle() to locate an element by its title attribute.
        // Use the getByTitle() method to locate an element by its title attribute.

        await page.goto("http://127.0.0.1:5500/tests/app.html");

        // const clickButton:Locator = page.getByTitle("Click this button")
        // expect(clickButton).toHaveText("Click this button");
        await expect(page.getByTitle("Click this button")).toHaveText("Click Me");
        await expect(page.getByTitle("Practice logo image")).toBeVisible();

        // page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
        // Use the getByTestId() method to locate an element based on its data-testid attribute.
        // Use this locator to find elements that have a data-testid attribute, which is often used for testing purposes.

        await expect(page.getByTestId("save-button")).toHaveText("Save Details");
        await expect(page.getByTestId('registration-form')).toBeVisible();



})