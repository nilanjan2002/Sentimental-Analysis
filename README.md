Sentimental Analysis

This project performs sentiment analysis on user input text using the AFINN-111 dataset. It is built using the p5.js library.
Dependencies

    p5.js (https://p5js.org/)
    AFINN-111 dataset (http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010)

Usage

To run the project, open index.html in a web browser. Type in any text in the input field and press enter to see the sentiment score displayed in the console.
How it Works

The project uses the AFINN-111 dataset, which is a list of English words rated for valence with an integer between -5 (negative) and 5 (positive). Each word in the user input text is looked up in the dataset, and its valence score is added to the overall score. The final score represents the sentiment of the text, with higher scores indicating more positive sentiment and lower scores indicating more negative sentiment.
Acknowledgments

    AFINN-111 dataset was created by Finn Årup Nielsen, Technical University of Denmark (DTU).
