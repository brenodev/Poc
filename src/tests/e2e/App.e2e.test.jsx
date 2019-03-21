// import * as faker from "faker";
import puppeteer from 'puppeteer'

// const person = {
//   name: faker.name.firstName() + " " + faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: faker.phone.phoneNumber(),
//   message: faker.random.words()
// };

describe('App Text', () => {
  test('App loads correctly', async () => {
    const browser = await puppeteer.launch({
      headless: false
    })
    const page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    })

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.home-title')

    const html = await page.$eval('.home-title', e => e.innerHTML)
    expect(html).toBe('Welcome to React')

    browser.close()
  }, 16000)
})
