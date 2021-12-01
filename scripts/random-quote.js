const randomQuote = () => {
    const quoteList = [
        "Meow!! <3",
        "Nyaa!! <3",
        "Ooooh! hello there!!",
        "uwu",
        "owo",
        "dogs bad /j",
        "<q>We are NOT calling it <q>magical death spit</q>!!</q>",
        "Snudoo"
    ]
    const randomQuoteEl = document.getElementById("random-quote");
    const chosenQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    return chosenQuote;
};