<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sentimental Analysis</title>
  </head>
  <body>
    <h1>Sentimental Analysis</h1>
    <p>This project performs sentiment analysis on user input text using the AFINN-111 dataset. It is built using the p5.js library.</p>
    <h2>Dependencies</h2>
    <ul>
      <li>p5.js (<a href="https://p5js.org/">https://p5js.org/</a>)</li>
      <li>AFINN-111 dataset (<a href="http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010">http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010</a>)</li>
    </ul>
    <h2>Usage</h2>
    <p>To run the project, open <code>index.html</code> in a web browser. Type in any text in the input field and press enter to see the sentiment score displayed in the console.</p>
    <h2>How it Works</h2>
    <p>The project uses the AFINN-111 dataset, which is a list of English words rated for valence with an integer between -5 (negative) and 5 (positive). Each word in the user input text is looked up in the dataset, and its valence score is added to the overall score. The final score represents the sentiment of the text, with higher scores indicating more positive sentiment and lower scores indicating more negative sentiment.</p>
    <h2>Acknowledgments</h2>
    <p>AFINN-111 dataset was created by Finn Årup Nielsen, Technical University of Denmark (DTU).</p>
  </body>
</html>
