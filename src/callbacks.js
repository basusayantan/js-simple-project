function walkDog(callback) {
    setTimeout(() => {
        document.getElementById('demo').innerHTML = '<span>You walked the dog.</span>';
        callback();
    }, 2000);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        document.getElementById('demo').innerHTML += '<br><span>You cleaned the kitchen.</span>';
        callback();
    }, 5000);
}

function removeTrash(callback) {
    setTimeout(() => {
        document.getElementById('demo').innerHTML += '<br><span>You took out the trash.</span>';
        callback();
    }, 500);
}

export function execute() {
    const container = document.getElementsByClassName('container')[0];
    container.removeChild(container.lastChild);
    document.getElementById('demo').innerHTML = '';
    walkDog(() => {
        cleanKitchen(() => {
            removeTrash(() => { 
                setTimeout(() => {
                    const node = document.createElement('p');
                    node.setAttribute('class', 'success')
                    node.setAttribute('id', 'result');
                    node.innerHTML = 'All tasks complete.';
                    container.appendChild(node);
                    document.getElementById('callback').disabled = false;
                    document.getElementById('promise').disabled = false;
                    }, 50);
            });
        });
    });
}
