$(document).ready(function() {
  var quotes = [
    {"quote": "Every man is born as many men and dies as a single one. ", "author": "Martin Heidegger"},
    {"quote": "Language is the house of the truth of Being. ", "author": "Martin Heidegger"},
    {"quote": "Man acts as though he were the shaper and master of language, while in fact language remains the master of man. ", "author": "Martin Heidegger"},
    {"quote": "The most thought-provoking thing in our thought-provoking time is that we are still not thinking. ", "author": "Martin Heidegger"},
    {"quote": "The possible ranks higher than the actual. ", "author": "Martin Heidegger"},
    {"quote": "Unless you change how you are, you will always have what you've got. ", "author": "Jim Rohn"},
    {"quote": "A stumble may prevent a fall. ", "author": "English Proverb"},
    {"quote": "There's no limit to what a man can achieve, if he doesn't care who gets the credit. ", "author": "Laing Burns, Jr."},
    {"quote": "Don't waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.", "author": "Ralph Waldo Emerson"},
    {"quote": "The most practical, beautiful, workable philosophy in the world won't work - if you won't. ", "author": "Zig Ziglar"},
    {"quote": "I believe the greater the handicap, the greater the triumph. ", "author": "John H. Johnson"},
    {"quote": "Life shrinks or expands in proportion to one's courage. ", "author": "Anais Nin"},
    {"quote": "We don’t see things as they are we see them as we are. ", "author": "Anais Nin"},
    {"quote": "You can't build a reputation on what you are going to do. ", "author": "Henry Ford"},
    {"quote": "The greatest form of maturity is at harvest time. That is when we must learn how to reap without complaint if the amounts are small and how to to reap without apology if the amounts are big. ", "author": "Jim Rohn"},
    {"quote": "People seem not to see that their opinion of the world is also a confession of character.  ", "author": "Ralph Waldo Emerson"},
    {"quote": "The most successful people are those who are good at plan B. ", "author": "James Yorke"},
    {"quote": "Opportunity is missed by most because it is dressed in overalls and looks like work. ", "author": "Thomas Alva Edison"},
    {"quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper. ", "author": "Eden Phillpotts"},
    {"quote": "Experience is not what happens to a man, it is what a man does with what happens to him. ", "author": "Aldous Huxley"},
    {"quote": "Imagination rules the world. ", "author": "Napoleon Bonaparte"},
    {"quote": "Adversity has the effect of eliciting talents which, in prosperous circumstances, would have lain dormant. ", "author": "Horace"},
    {"quote": "It isn't that they can't see the solution, it's that they can't see the problem. ", "author": "G.K. Chesterton"},
    {"quote": "Facts are stubborn, but statistics are more pliable. ", "author": "Mark Twain"},
    {"quote": "All truth goes through three steps:  First, it is ridiculed. Second, it is violently opposed.  Finally, it is accepted as self-evident. ", "author": "Arthur Schopenhauer"},
    {"quote": "An invasion of armies can be resisted; an invasion of ideas cannot be resisted. ", "author": "Victor Hugo"},
    {"quote": "Pain is inevitable but misery is optional. ", "author": "Barbara Johnson"},
    {"quote": "Beware of defining as intelligent only those who share your opinions. ", "author": "Ugo Ojetti"},
    {"quote": "If we knew what it was we were doing, it would not be called research, would it? ", "author": "Albert Einstein"},
    {"quote": "To believe a thing is impossible is to make it so. ", "author": "French proverb"},
    {"quote": "Simplicity is the ultimate sophistication. ", "author": "Leonardo da Vinci"},
    {"quote": "To be simple is to be great. ", "author": "Ralph Waldo Emerson"},
    {"quote": "The trouble about man is twofold.  He cannot learn truths which are too complicated; he forgets truths which are too simple. ", "author": "Dame Rebecca West"},
    {"quote": "Everything should be as simple as it is, but not simpler. ", "author": "Albert Einstein"},
    {"quote": "That you may retain your self-respect, it is better to displease the people by doing what you know is right, than to temporarily please them by doing what you know is wrong. ", "author": "William J. H. Boetcker"},
    {"quote": "Many of life's failures are people who did not realize how close they were to success when they gave up. ", "author": "Thomas Edison"},
    {"quote": "Hitch your wagon to a star. ", "author": "Ralph Waldo Emerson"},
    {"quote": "If you knew how much work went into it, you wouldn't call it genius. ", "author": "Michelangelo"},
    {"quote": "I know God will not give me anything I can't handle. I just wish that He didn't trust me so much. ", "author": "Mother Teresa"},
    {"quote": "If we did the things we are capable of, we would astound ourselves. ", "author": "Thomas Edison"}
  ];

  $("#generate").click(function() {
    this.quotes = quotes;
    var rand = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rand];

    $("#quote").html(quote.quote);
    $("#author").html(quote.author);
  });
});
