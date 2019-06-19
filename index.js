console.log('Hello World!');
//let name = prompt('What is your name?');

const introPrompt = function() { 
    if(name === ''){
        name = prompt('Really? gonna leave me like this? One last time...');
        if(name === ''){
            alert('Well Hello anyways stranger.');
        }
        else{
            alert('Hello ' + name);
        }
    }
    else{
        alert('Hello ' + name);
    }
};

//introPrompt();