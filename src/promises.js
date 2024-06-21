function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(confirm('Dog was walked?'))
                resolve('<span>You walked the dog.</span>');
            else reject('<span class="alert">You didn\'t walk the dog!</span>');
        }, 2000);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(confirm('Kitchen was cleaned?'))
                resolve('<br><span>You cleaned the kitchen.</span>');
            else reject('<br><span class="alert">You didn\'t clean the kitchen!</span>');
        }, 5000);
    });
}

function removeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(confirm('Trash taken out?'))
                resolve('<br><span>You took out the trash.</span>');
            else reject('<br><span class="alert">You didn\'t take out the trash!</span>')
        }, 500);
    });
}

export function execute() {
    const container = document.getElementsByClassName('container')[0];
    const node = document.createElement('p');
    node.setAttribute('id', 'result');
    container.removeChild(container.lastChild);
    document.getElementById('demo').innerHTML = '';
    
    walkDog().then((value) => {
        demo.innerHTML = value;
        return cleanKitchen();
    }).then((value) => {
        demo.innerHTML += value;
        return removeTrash();
    }).then((value) => {
        demo.innerHTML += value;
        setTimeout(() => {
            node.innerHTML = 'All tasks complete.';
            node.setAttribute('class', 'success');
            container.appendChild(node);
            document.getElementById('callback').disabled = false;
            document.getElementById('promise').disabled = false;
        }, 50);
    }).catch((error) => {
        demo.innerHTML += error;
        setTimeout(() => {
            node.innerHTML = 'Tasks not completed!';
            node.setAttribute('class', 'alert');
            container.appendChild(node);
            document.getElementById('callback').disabled = false;
            document.getElementById('promise').disabled = false;
        }, 50);
    });
}