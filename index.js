function dwarfRollCall(dwarves) {
    var numberedDwarves = "";
    for (var i = 0; i < dwarves.length; ++i){
        //numbering the dwarves by adding them into an array with a number
        //numberedDwarves.push(`${i + 1}. ${dwarves[i]}`)
        numberedDwarves += (i + 1) + ". " + dwarves[i] + " ";

    }
    //removing commas from the array and returning it
    //return numberedDwarves.join(" ");

    return numberedDwarves;
}

function summonCaptainPlanet(planeteerCalls){
    var pc = [];
    for (var i = 0; i < planeteerCalls.length; ++i){
        pc.push(planeteerCalls[i].toUpperCase() + "!");
    }
    return pc;
}
/*
The longPlaneteerCalls method should accept an array of calls. The function
should tell us if any of the calls are longer than four characters.
*/
function longPlaneteerCalls(words) {
    for (var i = 0; i < words.length; ++i){
        if (words[i].length > 4){
            return true
        }
    }

    return false;

}

function findTheCheese (foods) {
    var toc = ["cheddar", "gouda", "camembert"]
    for (var i = 0; i < foods.length; ++i){
        for (var x = 0; x < toc.length; ++x){
            if (foods[i] == toc[x]){
                return foods[i];
            }
        }
    }

    return "no cheese!"
}
