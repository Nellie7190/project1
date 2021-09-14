const key = config.SECRET_API_KEY;
console.log(key)

/////functional part of page

const $p = $('#p');

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
        // render();
        const jokeSetup = (data.body[0].setup);
        const jokePunchline = (data.body[0].punchline)
    });
}

//create working button to retrieve joke
$('#get-joke').on('click', getRandomJoke())

// function render(data) {
//     $p.text(jokeSetup)
//     $p.text(jokePunchline)
// }



/////styling part of page


