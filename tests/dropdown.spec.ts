import{test,expect}from '@playwright/test';

test('dropdown',async ({page})=>{
await page.goto("https://practice.expandtesting.com/dropdown",{waitUntil:'domcontentloaded'});
// await expect(page).toHaveURL("https://practice.expandtesting.com/dropdown");

 const dropdown = "Select#country";
 await page.selectOption(dropdown,{label:'Germany'});

// to print the length of the dropdown
 const options=await page.$$(dropdown+'>option');
    console.log(options.length);
 
});
