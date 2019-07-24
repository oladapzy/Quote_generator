$(document).ready(function() {

function getQuote() {
  var quotes=[{
  quote: "Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without the talking about the other",
    name: "Bill Gate"
  }, {
    quote: "Stupidity is a talent for misconception.",
    name: "Edgar Allan Poe"
  }, {
    quote: "It is dangerous to let the public behind the scenes. They are easily disillusioned and then they are angry with you, for it was the illusion they loved.",
    name: "W. Somerset Maugham"
  }, {
    quote: "There is no more lovely, friendly and charming relationship, communion or company than a good marriage.",
    name: "Marthin Luther"
  }, {
    quote: "If you wish for you and your family to have a happy, healthy, long life, then ignore conventional wisdom.",
    name: "Anonymous"
  }, {
    quote: "I have nightmares that I'm going to wake up, and everyone's driving a Prius and living in a condo, and we're all getting health insurance.",
    name: "Kid Rock"
  }, {
    quote: "Straight men just can't imagine the bliss of being in a relationship with someone who finds farting as funny as they do.",
    name: "Graham Norton"
  }, {
    quote: "Only you can control your future.",
    name: "Dr.seuss"
  }, {
    quote: "Music is the movement of sound to reach the soul for the education of its virtue.",
    name: "plato"
  }, {
    quote: "Did you know babies are nauseated by the smell of a clean shirt?",
    name: "Jeff Foxworthy"
  }, {
    quote: "If your working television sits on top of your non-working television, you might be a redneck.",
    name: "Jeff Foxworthy"
  }, {
    quote: "The past is a great place and I don't want to erase it or to regret it, but I don't want to be its prisoner either.",
    name: "Mick Jagger"
  }, {
    quote: "What we achieve inwardly will change outer reality.",
    name: "Plutarch"
  }, {
    quote: "The best remedy for those who are afraid, lonely or unhappy is to go outside, somewhere where they can be quiet, alone with the heavens, nature and God. Because only then does one feel that all is as it should be.",
    name: "Anne Frank"
  }, {
    quote: "Logic will get you from A to B. Imagination will take you everywhere.",
    name: "Albert Einstein"
  }, {
    quote: "From each according to his abilities, to each according to his needs.",
    name: "Karl Marx"
  }, {
    quote: "No one wants to quit when he's losing and no one wants to quit when he's winning.",
    name: "Richard Petty"
  }, {
    quote: "Get your facts first, then you can distort them as you please.",
    name: "Mark Twain"
  }, {
    quote: "Governing a great nation is like cooking a small fish - too much handling will spoil it.",
    name: "Lao Tzu"
  }, {
    quote: "Political language... is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind. George Orwell.",
    name: "George Orwell"
  }, {
    quote: "Power is not a means, it is an end. One does not establish a dictatorship in order to safeguard a revolution; one makes the revolution in order to establish the dictatorship.",
    name: "George Orwell"
  }, ];

    var quote = $('#quoteContainer').text();
    var quoteName = $('#quoteName').text();
    var sourceLength = quotes.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    for (i = 0; i <= sourceLength; i += 1) {
      var newQuoteText = quotes[randomNumber].quote;
      var newQuoteName = quotes[randomNumber].name;
    }
    
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteName">' + '-	' + newQuoteName + '</p>');
        quoteContainer.fadeIn(timeAnimation);
      }); //end of fadeOut
    } //end of getQuote
getQuote();
  
$('#quoteButton').click(getQuote);

}); //end of document.ready