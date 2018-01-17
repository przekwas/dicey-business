let diceContainer = $("#die-container");
let dieArray = [];
let idNumber = 0;

class Die {
    constructor() {
        //one class die property
        this.value;
        //auto rolls the dice for a value
        this.roll();
        //sets up the div w/ class dice containing an h1, and setting the div with an updating id number
        this.div = $("<div class=dice></div>");
        this.h1 = $("<h1></h1>");
        this.id = idNumber;
        this.div.attr("id", this.id);
        this.div.append(this.h1);
        diceContainer.append(this.div);
        this.h1.text(this.value);
        //makes the die clickable to reroll individually
        this.div.click(() => {
            this.roll();
            this.h1.text(this.value);
        })
        //makes the die remove themselves when dbl clicked
        this.div.dblclick(() => {
            this.removeDie();
        })
    }
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }

    removeDie() {
        $(`#${this.id}`).remove();
        let index = dieArray.findIndex(dice => dice.id === this.id)
        dieArray.splice(index, 1);
        console.log(index);
    }

}

//runs through the array of dice and adds the sum of its .value property
function sumDice() {
    let total = 0;
    for (let i = 0; i < dieArray.length; i++) {
        total += dieArray[i].value;
    }
    alert(`Total sum of the die on page is: ${total}`);
};

//click button to make new die and add them to a global array
$("#generate-die").click(function () {
    let d = new Die();
    dieArray.push(d);
    idNumber++;
});

//roll the die and replace their h1 with their new rolled value
$("#roll-die").click(function () {
    for (let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
        $("#" + i + " h1").html(dieArray[i].value);
    }
});

//button to add all the dice on screen
$("#sum-die").click(sumDice);

