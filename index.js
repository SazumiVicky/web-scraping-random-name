/*
* dev: Sazumi Viki
* ig: @moe.sazumiviki
* gh: github.com/sazumivicky
* site: sazumi.moe
*/

const express = require('express');
const { remote } = require('webdriverio');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 8080;

const options = {
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        }
    }
};

const scrapeRandomNames = async () => {
    const browser = await remote(options);
    await browser.url('https://www.randomlists.com/random-names');

    await browser.waitUntil(async () => {
        const button = await browser.$('.button[data-action="rerun"]');
        return button.isDisplayed();
    });

    await browser.$('.button[data-action="rerun"]').click();

    await browser.pause(2000);

    const html = await browser.getPageSource();

    await browser.deleteSession();

    const $ = cheerio.load(html);

    const names = [];
    $('.Rand-stage .rand_large').each((index, element) => {
        const name = $(element).text().trim();
        names.push({ [`name_${index + 1}`]: name });
    });

    return names;
};

app.get('/get/names/random', async (req, res) => {
    try {
        const randomNames = await scrapeRandomNames();
        const jsonResponse = randomNames;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(jsonResponse, null, 2));
    } catch (error) {
        console.error('Error occurred while scraping:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
