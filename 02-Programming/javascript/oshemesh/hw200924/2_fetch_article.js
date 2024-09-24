const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Fetch the article and parse it with cheerio
async function fetchArticle(url) {
    try {
        // Fetch the article content from the given URL
        const response = await fetch(url);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Extract the raw HTML content
        const html = await response.text();
        console.log("Extract the raw HTML content:", html);  

        
        // Load the HTML into cheerio to extract text content
        const $ = cheerio.load(html);


        // Find the <script> tag containing the JSON-LD (structured data)
        let articleBody = null;
        
        
        // Iterate through each script tag to find the one containing the "NewsArticle" type
        // Find all <script> tags that contain JSON-LD data
        const scriptTags = $('script[type="application/ld+json"]');
        // Loop through each script tag to find the one containing the article body
        scriptTags.each((i, element) => {
        try {
                // Parse the script content as JSON
                const jsonData = JSON.parse($(element).html());

                // Check if the script contains a NewsArticle type
                if (jsonData['@type'] === 'NewsArticle') {
                    articleBody = jsonData.articleBody;
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        });
        // Log or use the extracted article body
        console.log("Extract text from articleBody:", articleBody);  

        // Split the article text into sentences by periods and trim spaces
        const sentencesArray = articleBody.split('.').map(sentence => sentence.trim());

        console.log("Split the article text into sentences by periods and trim space:", sentencesArray);  // Log the sentences array to the console
        return sentencesArray;

    } catch (error) {
        console.error("Failed to fetch the article:", error);
    }
}

// Run the code
const articleUrl = 'https://www.ynet.co.il/food/foodnews/article/bjbvisatc?tbref=hp';
fetchArticle(articleUrl);
