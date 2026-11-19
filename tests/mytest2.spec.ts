import{test,expect} from '@playwright/test';

// Syntax for a test in Playwright
/*
test("My First Test", () => {
//Step 1: Navigate to the URL
//Step 2: Perform actions on the page
//Step 3: Assert the expected outcome
    

})
*/

// fixture - global variable : page, browser
test("Verify the URL of the page",async({page}) =>{
    await page.goto("https://adactinhotelapp.com/");

    let url: string = await page.url();
    console.log("The url of the page is " + url);

    await expect(page).toHaveURL("https://adactinhotelapp.com/");
    
    
});