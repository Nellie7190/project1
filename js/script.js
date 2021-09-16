//hidden key
const key = config.SECRET_API_KEY;
console.log(key)

/////functional part of page====================================
const $joke = $('#joke');
const $getJoke = $('#get-joke');
const $punchline = $('#punchline')
const $getPunchline = $('#get-punchline')

//hide punchline button on onload of page
$getPunchline.hide();

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
        $getPunchline.show(10);
        setBg();
        $punchline.text('');
        const jokeSetup = (data.body[0].setup);
        const jokePunchline = (data.body[0].punchline)
        $joke.text(`Dad says: ${jokeSetup}`);
        //now punchline button will work
        $('#get-punchline').click(()=> getRandomPunchline(jokePunchline))
    });
}
const getRandomPunchline = (jokePunchline) => {
    $getPunchline.hide(10);
    $punchline.text(`${jokePunchline}`);
}
 
// create button to retrieve joke
$('#get-joke').click(()=> getRandomJoke())
    
/////styling part of page================================================
//random backgroundcolor when clicking get joke button
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    $('body').innerHTML = "#" + randomColor;
}