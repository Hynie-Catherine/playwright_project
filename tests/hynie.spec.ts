import {test,expect} from '@playwright/test';

test("open browser", async ({page})=>{
    // await page.goto('https://www.healthkart.com/');
    // await page.locator ("input[id='searchInput']").click();
 

    // //using XPATH
    // await page.locator("//button[@class='profile-login']");


    await page.goto('https://www.amazon.com/',{ waitUntil:'domcontentloaded'});
    await expect.soft(page).toHaveURL("https://www.amazon.com/")

    await page.locator("input[id='twotabsearchtextbox']").click()

    await page.locator("input[id='twotabsearchtextbox']").fill('toys')
    await page.locator("[value='Go']").click()
    
    let verify_result=await page.locator("//h2[text()='Results']").textContent();
    await expect.soft(verify_result).toBe("Results");

    //hover
    const hyna = "[class='nav-a nav-a-2 icp-link-style-2']";
    await page.locator(hyna).hover();
    await expect.soft(page.locator(hyna)).toBeVisible();

    await page.locator(hyna).click()

    // click on hy element
    await page.locator('[data-csa-c-slot-id="nav-link-accountList"]').click()
    await expect.soft(page.locator('[data-csa-c-slot-id="nav-link-accountList"]')).not.toBeVisible(); 



    // await page.locator('[data-csa-c-slot-id="nav-link-accountList"]').click()


    

    








})