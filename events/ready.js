const chalk = require('chalk');
const moment = require('moment');

module.exports = client => {
   
    const games = [
        'Developer egeadam1337',
        'Revengers Ticket Bot',
        'Developed BY egeadam1337',
        'Revengers Bot'
    ];

    let currentIndex = 0;

  
    setInterval(() => {
        client.user.setActivity(games[currentIndex]);
        currentIndex = (currentIndex + 1) % games.length;
    }, 10 * 1000); 
    
    
    client.user.setStatus("idle");
};
