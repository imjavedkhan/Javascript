// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//if(x === 23) console.log(23);


const temp = [3, -2, -6, -1, 'error', 9, 13, 17];


const calcTempAmplitude = function (temps){
    let max = temp[0];
    let min = temp[0];
    for(let i=0; i<temp.length; i++){
        if(temp[i]>max){
            max = temp[i];
        }else if(temp[i]<min){
            min = temp[i];
        }
    };
    console.log(max, min);
    console.log(max-min);
};

calcTempAmplitude(temp);


const celciusTemp = function(){
    const measurement = {
        type : 'temp',
        unit : 'celsius',
        value : prompt('Enter number')
    };

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(celciusTemp());
