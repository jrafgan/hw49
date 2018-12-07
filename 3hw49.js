for (j = 0; j < 8; j++) {
    var block = "";
    for (i = 0; i < 8; i++) {
        var eve = (i + j) % 2 === 0;
        if (eve) {
            block += "██";
        } else {
            block += "  ";
        }
    }
    console.log(block);
}