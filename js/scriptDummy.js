const key = config.SECRET_API_KEY;
console.log(key)

/////functional part of page

const $joke = $('#joke');
const $getJoke = $('#get-joke');
const $punchline = $('#punch-line')
const $getPunchline = $('#get-punchline')

const body = [
    {
        setup: 'This is the joke',
        punchline: 'This is the punchline'},
    {
        setup: 'This is the second joke',
        punchline: 'This is the second punchline'},
    {
        setup: 'This is the third joke',
        punchline: 'This is the third punchline'
    }   
]

const getRandomJoke = () => {
    setBg();
    const jokeSetup = (body[0].setup);
 //add/fix in script.js ========================================   
    $joke.text(`Dad says: ${jokeSetup}`);  
    $('#get-punchline').click(()=> getRandomPunchline())

}

const getRandomPunchline = () => {
    const jokePunchline = (body[0].punchline);
    $punchline.text(`${jokePunchline}`);
}

// create working button to retrieve joke
$('#get-joke').click(()=> getRandomJoke())


// function myFunction() {
//     console.log('working')
// }
// function myFunction2() {
//     console.log('test')
// }


const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    $('div').innerHTML = "#" + randomColor;
  }