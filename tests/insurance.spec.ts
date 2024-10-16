import {test,expect} from 'playwright/test';


test.beforeEach(async ({page})=>{
await page.goto("https://www.insurancedekho.com/",{waitUntil: 'domcontentloaded'});
await expect.soft(page).toHaveURL("https://www.insurancedekho.com/");
});

test('insurancedekho',async({page})=>{
    await page.locator("//a[text()='Insurance']").hover();
    await page.locator("//a[text()='Business Insurance']").click();

    await page.getByText("Property").first().hover();

    await page.click("[href='/officepackage-insurance']");
    // await page.waitForTimeout(2000);
    await page.fill('input[type=TextField]','Hynie');
    await page.locator('#businessName').fill('Catherine');
    await page.locator('[name="mobile"]').fill('9876543210');
    await page.fill('#email','hyniecatherine40@gmail.com');

    await page.locator("//button[@class='getQoute']").click();


});

test.afterEach(async ({page})=>{
    await page.screenshot({path: 'screenshot/insurance.png'});
});

