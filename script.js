let diceContainer = $("#die-container");
let dieArray = [];


class Die {
    constructor() {
        //property
        this.value;
        //auto rolls the dice for a value
        this.roll();
        //sets up the div w/ class dice, its tag as an h1, and setting the div with an updating id number
        let diceDiv = $("<div class=dice></div>");
        let idNumber = $(".dice").length;
        let diceTag = $("<h1></h1>");
        //adds the dice div to the container, counts its id, and places the tag as its rolled value
        diceContainer.append(diceDiv);
        $(diceDiv).attr("id", idNumber);
        $(diceDiv).append(diceTag);
        diceTag.append(this.value);

    }
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }
}

$("#generate-die").click(function () {
    let d = new Die();
    dieArray.push(d);
});

$("#roll-die").click(function () {
    for (let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
        $("#" + i + " h1").html(dieArray[i].value);
    }
});

    // //gives each div with class box a blank h1 element named idTag w/ style
   // square.appendChild(idTag);
    // let idNumber = document.createTextNode(square.id);

    // //slaps the box to the page
    // body.appendChild(square);

    // //click button to make a box
    // squareButton.addEventListener("click", function () {
    //     squareAdder();
    // })

