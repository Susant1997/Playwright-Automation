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
test("Verify the title of the page",async({page}) =>{
    await page.goto("https://adactinhotelapp.com/");

    let title: string = await page.title();
    console.log("Title of the page is " + title);

    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
    
    
});