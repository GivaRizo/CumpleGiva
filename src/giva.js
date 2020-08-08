const art = require('ascii-art');


art.font('Feliz Cumple Giva', 'Doom', (err, renderer) => {
    console.log(err || renderer);
})