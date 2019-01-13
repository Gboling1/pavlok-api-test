const pavlok = require('pavlok-beta-api-login');
const ClientID = "b0ddbf3c8340ebc4dc52ad669c34942b61db8170fb5d99f949f85a2702b700a9";
const Secret = "018755078fa7c99c35f7068dcbf683964932260986018ee501cee8ee44c8a542";

// Init your device
pavlok.init(ClientID, Secret, {
        verbose: true,
	message: 'kitty wants wuff!',
        port: 3000
});

//login
pavlok.login( (result, code) => {
    if(result){
        console.log('Code is', code);
    }
});

pavlok.vibrate();
