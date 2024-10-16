import {test,expect} from '@playwright/test';


test.beforeEach(async ({page})=>{
await page.goto("https://www.insurancedekho.com/",{waitUntil: 'domcontentloaded'});
await expect.soft(page).toHaveURL("https://www.insurancedekho.com/");
});

test.describe("insurancedekho",async()=>{
    
});

test("hovering on business insurance",async({page})=>{
    await test.step("hover and click on business insurance",async()=>{
        await page.locator("//a[text()='Insurance']").hover();
        await page.locator("//a[text()='Business Insurance']").click();
        });


    await test.step("hover and click on property",async()=>{    
        await page.getByText("Property").first().hover();
        await page.click("[href='/officepackage-insurance']");

        });
    // await page.waitForTimeout(2000);
    await page.fill('input[type=TextField]','Hynie');
    await page.locator('#businessName').fill('Catherine'); 
    await page.locator('[name="mobile"]').fill('9876543210');
    await page.fill('#email','hyniecatherine40@gmail.com');

    await page.locator("//button[@class='getQoute']").click();
    await page.locator("css=.getQoute:has-text('Login')").click();



});

test.afterEach(async ({page},testInfo)=>{
    await page.screenshot({path: `screenshot/${testInfo.title.trim()}.png`});
});

