import {test} from '@playwright/test';
test('tab switch',async({page,context})=>{
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    await page.locator('#newTabBtn').click();
    const newtab=await context.waitForEvent('page');
    newtab.on('dialog',(my)=>{
        my.accept();
    })
    await newtab.locator("#confirmBox").click();
    await newtab.close();
    // await newtab.goBack();
    await page.locator('#newTabBtn').click();
    await page.waitForTimeout(4000);
    await page.close();
   
 
})