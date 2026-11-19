
import{test,expect,Locator}from'@playwright/test';

test("Xpath demo in playwrite", async({page}) =>{

    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Absolute Xpath
     const alogo:Locator = page.locator("//html/body/div[4]/div[1]/div[1]/div[1]/a/img");
    //  const alogo:Locator = page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img");
     await expect(alogo).toBeVisible();

     // 2. Relative Xpath
     const rlogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
     await expect(rlogo).toBeVisible();

     // 3. Xpath with contains
     const products:Locator = page.locator("//h2/a[contains(@href,'computer')]");
     const productCount:number = await products.count();
     console.log("Total computer products are: "+productCount);
     expect(productCount).toBeGreaterThan(0);

    //  console.log(products.textContent()); // Error: Strict Mode Violation: Locator.textContent() can only be called on a single element. Use Locator.nth(index) to access a specific element.

    console.log("First product name: ", await products.first().textContent());
    console.log("Last product name: ", await products.last().textContent());
    console.log("Nth product name:", await products.nth(2).textContent()); // Index starts from 0.

    let productNames:string[] = await products.allTextContents(); // Returns an array of strings
    console.log("All product names: ", productNames); // Returns an array of strings
    // to get all product names in a loop
    for (let pt of productNames) {
        console.log("Product name: ", pt);
    }


    // 4. Xpath with text() or .
    // //a[text()='Register']  //a[.='Register']  //a[normalize-space()='Register']
    const registerLink:Locator = page.locator("//a[text()='Register']");
    await expect(registerLink).toBeVisible();

    const message:Locator = page.locator("//h2[contains(text(),'Welcome to our store')]");
    await expect(message).toBeVisible();
    console.log("Message is: ", await message.textContent());


    // 5. Xpath with starts-with()
    const startsWithLink:Locator = page.locator("//h2/a[starts-with(@href,'/build')]"); 
    const count:number = await startsWithLink.count();
    expect(count).toBeGreaterThan(0);

    // 6. Xpath Last() function
    const lastItem:Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastItem).toBeVisible();
    console.log("Last item is: ", await lastItem.textContent());

    // 7. Xpath position() function
    const positionItem:Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionItem).toBeVisible();
    console.log("Position item is: ", await positionItem.textContent());



})

