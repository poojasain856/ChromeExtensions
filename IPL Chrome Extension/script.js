fetch('http://127.0.0.1:5500/IPL%20Chrome%20Extension/cricketapi.js')
    .then(data => data.json())
    .then(matchData => {
        const matchText = matchData[0].match;
        const matchElement = document.getElementById('matchElement');

        matchElement.innerHTML = matchText;
    })
