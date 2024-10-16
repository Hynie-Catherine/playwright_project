import {test,expect} from '@playwright/test';

test('handling alerts',async({page})=>{


    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html",{waitUntil: 'domcontentloaded'});
    // await expect.soft(page).toHaveURL("https://www.hyrtutorials.com/p/alertsdemo.html")

    await page.click('[onclick="alertFunction()"]');

    page.on('dialog', (dialog) => {
        dialog.accept();

        
});
});

test('dismiss alert',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html",{waitUntil: 'domcontentloaded'});
    await expect.soft(page).toHaveURL("https://www.hyrtutorials.com/p/alertsdemo.html")

    await page.click("#confirmBox");

    page.on('dialog',(alert) => {
        alert.dismiss();

});
});

test ('enter value',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html",{waitUntil: 'domcontentloaded'});
    await expect.soft(page).toHaveURL("https://www.hyrtutorials.com/p/alertsdemo.html")

    await page.click("#promptBox");

    page.on('dialog',(alert) => {
        alert.accept("hiii hynn");
    })        


})


