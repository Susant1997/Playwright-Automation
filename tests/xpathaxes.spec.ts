
import { test, expect, Locator } from '@playwright/test';

test('XPath Axes in Playwright', async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // Self 
   const selfElement:Locator = page.locator("//td[text()='Germany']/self::td");
   expect(await selfElement.textContent()).toBe("Germany");

   // Parent - Get the parent row of the cell containing 'Germany'
   const parent:Locator = page.locator("//td[text()='Germany']/parent::tr");
   //await expect(parent).toContainText("Maria Anders");
   //await expect(parent).toContainText("Alfreds Futterkiste Maria Anders Germany");
   console.log(await parent.textContent());

   // Child - Get the child cells of the second row in the table
   const secondRowCell:Locator = page.locator("//table[@id='customers']//tr[2]/child::td"); 
   await expect(secondRowCell).toHaveCount(3);

   // Ancestor - Get the ancestor table of the cell containing 'Germany'
   const table:Locator = page.locator("//td[text()='Germany']/ancestor::table");
   await expect(table).toHaveAttribute("id", "customers");

   // Descendant - Get all descendant cells of the table
    const descendantCells:Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(descendantCells).toHaveCount(18);

    // Following - Get the following sibling row of the row containing 'Germany'
    const followingCells:Locator = page.locator("//td[text()='Germany']/following::td[1]");
    await expect(followingCells).toHaveText("Centro comercial Moctezuma");

    // Following-sibling - Get the following sibling row of the row containing 'Germany'
    const followingsibiling:Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td");
    await expect(followingsibiling).toHaveCount(1);

    // Preceding - Get the preceding sibling row of the row containing 'Germany'
    const preceding:Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
    await expect(preceding).toHaveText("Maria Anders");

    // Preceding-sibling - Get the preceding sibling row of the row containing 'Germany'
    const precedingSibling:Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
    await expect(precedingSibling).toHaveCount(2);
    await expect(precedingSibling.first()).toHaveText("Alfreds Futterkiste");
    await expect(precedingSibling.nth(1)).toHaveText("Maria Anders"); 

})