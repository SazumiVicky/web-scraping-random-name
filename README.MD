# Web Scraping Random Name

<p>This is a Node.js application that scrapes random names from a website and exposes an API endpoint to retrieve these names.</p>

## Installation

1. <p>Clone the repository:</p>

```bash
git clone https://github.com/SazumiVicky/web-scraping-random-name.git
```
1. <p>Navigate to the project directory:</p>

```bash
cd web-scraping-random-name
```
2. <p>Install dependencies:</p>

```bash
npm install
```
<h4>Usage</h4>
<p>Start the server</p>

```bash
node index.js
```
2. <p>Once the server is running, you can access the random names by making a GET request to:</p>
```bash
http://localhost:3000/get/names/random
```
3. <p>Example using cURL:</p>
```bash
curl http://localhost:3000/get/names/random
```
<h4>Example response:</h4>

```json
[
  {
    "name_1": "John Doe"
  },
  {
    "name_2": "Jane Smith"
  },
  ...
]

```
<h4>Dependencies</h4>

- [express - Web framework for Node.js](https://www.npmjs.com/package/express)
- [webdriverio - Library for browser automation](https://www.npmjs.com/package/webdriverio)
- [cheerio - Implementation of jQuery for the server-side](https://www.npmjs.com/package/cheerio)

<h4>Contributing</h4>
<p>Contributions are welcome! Feel free to open an issue or submit a pull request.</p>