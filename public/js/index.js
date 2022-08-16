
//IIFE - self evaluating function
(() => {
    // local variables
    let button = document.getElementById('button');
    let searchQuery = document.getElementById('input');

    // Event listeners
    button.addEventListener('click', apiRequest);

    // ability to submit with enter for preference/ web accessibility
    input.addEventListener('keypress', (e)=> {
        if(e.key == 'Enter'){
            e.preventDefault()
            document.getElementById('button').click()
        }
    });


    // Functions
   function apiRequest() {
        let searchQueryValue = searchQuery.value.split(' ').join('').trim();
        

        if (!searchQueryValue.length) {
            // TODO implement something visually nicer
            alert('Please input value');
        }

       if (searchQueryValue.length) { // either 0 or greater; if 0 = false if +1 true
            return fetch(`https://powerpuff-app.herokuapp.com/api/${searchQueryValue}`)
                .then(res => res.json())
                .then(data => updateDOMList(data))
                .catch(err => {
                    console.error('ERROR: ', err);
                });
        }
    };

    function updateDOMList(data) {
        if (!data) {
            console.error('No data to update the dom');
            return; // exit out of the function
        }
        if (data) {
// grabs each characteristic and displays them within the DOM
            const elements = [
                {
                    id: 'charName',
                    label: 'Name',
                    value: data.name
                },
                {
                    id: 'charAnime',
                    label: 'Anime Name',
                    value: data.animeName
                },
                {
                    id: 'charAcces',
                    label: 'Accessories',
                    value: data.accessories
                },
                {
                    id: 'charHair',
                    label: 'Hair Color',
                    value: data.hairColor
                },
                {
                    id: 'charSuper',
                    label: 'Super Power(s)',
                    value: data.superPowers
                },
                {
                    id: 'charNemesis',
                    label: 'Nemesis',
                    value: data.archNemesis
                },
                {
                    id: 'charPhrase',
                    label: 'Phrase Said',
                    value: data.phraseSaid
                },
                {
                    id: 'charVoice',
                    label: 'Voiced By',
                    value: data.voicedBy
                }
            ];

            elements.forEach(value => {
                if (value.id, value.label, value.value) {
                    document.getElementById(value.id).innerText = `${value.label}: ${value.value}`;
                }
            });
        }
    }
})();
