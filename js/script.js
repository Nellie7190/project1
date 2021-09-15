const key = config.SECRET_API_KEY;
console.log(key)

/////functional part of page

const $joke = $('#joke');

const getRandomJoke = () => {
//connect api with AJAX
    $.ajax({
        method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
    'x-rapidapi-key': key
},
        
    }).then(
        (data) => {
        console.log(data);
        const jokeSetup = (data.body[0].setup);
        const jokePunchline = (data.body[0].punchline)
        $joke.text(`Dad says: ${jokeSetup} ; ${jokePunchline}`);
        // render(data);
    });
}

// function render() {
    
//}

//create working button to retrieve joke
$('#get-joke').on('click', getRandomJoke())









        //get joke setup
//         render(data);
//         //allow user to click punchline button
//     });
// }
// //joke setup function
// function render(data) {
//     $joke.text(`Dad says: ${data.body[0].setup}`)
    
// }

// //retrieving punchline
// function getPunchline(data) {
//     $joke.text(`${data.body[0].punchline}`);
// }
// //create working button to retrieve joke
// $('#get-joke').on('click', getRandomJoke(data));
// $('#get-punchline').on('click', getPunchline(data))

/////styling part of page


