const key = config.SECRET_API_KEY;
console.log(key)

/////functional part of page
const $joke = $('#joke');
const $getJoke = $('#get-joke');
const $punchline = $('#punchline')
const $getPunchline = $('#get-punchline')

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
        setBg();
        $punchline.text('');
        const jokeSetup = (data.body[0].setup);
        const jokePunchline = (data.body[0].punchline)
        $joke.text(`Dad says: ${jokeSetup}`);
        $('#get-punchline').click(()=> getRandomPunchline(jokePunchline))
        // render(data);
    });
}
const getRandomPunchline = (jokePunchline) => {
    $punchline.text(`${jokePunchline}`);
}
 
// create working button to retrieve joke
$('#get-joke').click(()=> getRandomJoke())
    
/////styling part of page
//random color when clicking get joke button
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    $('body').innerHTML = "#" + randomColor;
}
    
/////// working as two separate buttons
// const getJoke = document.querySelector('#get-joke');
// const getPunchline = document.querySelector('#get-punchline');
// getJoke.onclick = () => console.log('working');
// getPunchline.onclick = () => console.log('test');