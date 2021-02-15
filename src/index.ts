const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Your name',
    });

    console.log(response);
})();
