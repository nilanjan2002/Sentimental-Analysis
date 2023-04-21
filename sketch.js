
var table;
var afinn;


function preload() {
    afinn = loadJSON('./afinn-111.json');
}


function setup() {
    noCanvas();
    var words ;
    var txt = select('#txt');
    txt.input(typing);
    
    var score = 0;
    function typing(e){
        let textValue = txt.value()
        //regEX to split the sentence into array of words
        words = textValue.split(/\W/);
        var wordsToDisplay = [];
        var score =0;

        for(let i =0; i< words.length; i++){
            var word = words[i].toLowerCase();

            if(afinn[word]) //ideally should use hasOWnProperty
            {
                score+= Number( afinn[word]);
                wordsToDisplay.push(word+" : "+ Number( afinn[word]))
            }
        }
        console.log(score);

        var scoreP = select('#score');
        var comp = select('#comp');
        var wordsP= select('#words');
        scoreP.html('Score : '+ score)
        comp.html('Comparative : '+ score/(words.length));
        wordsP.html( wordsToDisplay)
    }

}


function draw() {

}   