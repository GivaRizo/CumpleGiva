const art = require('ascii-art');


art.font('Eres la mejor hermana del mundo!', 'Doom', (err, renderer) => {
    console.log(err || renderer);
})