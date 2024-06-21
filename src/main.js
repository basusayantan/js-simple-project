import * as callback from "./callbacks.js";
import * as promise from "./promises.js";

export function action(parameter) {
    document.getElementById('callback').disabled = true;
    document.getElementById('promise').disabled = true;
    if(parameter === 'callback')
        callback.execute();
    else if(parameter === 'promise')
        promise.execute();
}

document.getElementById('callback').addEventListener('click', () => action('callback'));
document.getElementById('promise').addEventListener('click', () => action('promise'));