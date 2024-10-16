// import {test,expect} from 'playwright/test';

// const data = require("C:/Users/10742844/Desktop/playwright practice/tests/testdata.json");
// test.beforeEach(async ({page})=>{
// await page.goto("https://www.fabindia.com/",{waitUntil: 'domcontentloaded'});
// await expect.soft(page).toHaveURL("https://www.fabindia.com/");
// });

// test('login',async({page})=>{
//     await page.locator('//button[@class="border-0 bg-transparent"]').click();
//     await page.waitForTimeout(3000);
//     await page.locator('//nav[@class="d-none d-sm-block"]//a[text()=" Franchise Enquiry Form "]').scrollIntoViewIfNeeded();
//     await page.waitForTimeout(3000);
//     await page.locator('//nav[@class="d-none d-sm-block"]//a[text()=" Franchise Enquiry Form "]').click();
//     await page.waitForTimeout(3000);
    
//     await page.getByLabel('Full Name*').scrollIntoViewIfNeeded();
//     await page.waitForTimeout(2000);
//     // await page.locator('[class="p-1 form-control ng-pristine ng-invalid ng-touched"]').fill('Hynie');
//     await page.getByLabel('Full Name*').fill(data.username);
//     await page.waitForTimeout(2000);

//     await page.getByLabel('Date of Birth*').click()
//     await page.locator('//input[@id="enq-name"]').nth(2).click()
    
// });