import axios from "axios";
import * as cheerio from "cheerio";

const scrapeWebsite = async (url) => {

  try {

    if (!url.startsWith("http")) {
      url = `https://${url}`;
    }

    const { data } = await axios.get(url, {
      timeout: 10000,

      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    const $ = cheerio.load(data);

    const title = $("title").text();

    const metaDescription =
      $('meta[name="description"]').attr(
        "content"
      );

    const headings = [];

    $("h1").each((i, el) => {

      headings.push(
        $(el).text().trim()
      );
    });

    const paragraphs = [];

    $("p").each((i, el) => {

      if (i < 5) {

        paragraphs.push(
          $(el).text().trim()
        );
      }
    });

    return {
      title,
      metaDescription,
      headings,
      paragraphs,
    };

  } catch (error) {

    console.log(
      "Website scraping failed"
    );

    return {
      error: "Website scraping failed",
      title: "Unavailable",
      metaDescription: "Unavailable",
      headings: [],
      paragraphs: [],
    };
  }
};

export default scrapeWebsite;