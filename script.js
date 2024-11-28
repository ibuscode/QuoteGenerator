let btn = document.querySelector('.btn');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{ quote:"Pain and suffering are always inevitable for a large intelligence and a deep heart.",
                  author:"FYODOR DOSTOEVSKY"},

               { quote:"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
                  author:"ALBERT CAMUS"},
               { quote:"In the middle of difficulty lies opportunity.",
                 author:"ALBERT EINSTIEN"
               },
               {quote:"The waves broke and spread their waters swiftly over the shore. One after another, they massed themselves and fell; the spray tossed itself back with the energy of their fall.",
                author:"VIRGINIA WOOLF"
               },
               {quote:"The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy." ,
                author:"ALBERT CAMUS"
               },
               {quote:"The only way out of the labyrinth of suffering is to forgive.",
                author:"JOHN GREEN"

               }
];
btn.addEventListener('click',function(){

    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
   author.innerText = quotes[random].author;
})