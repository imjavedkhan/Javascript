const colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan",
"DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", 
"SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];

let i =0;

document.querySelector('.submit').addEventListener('click',
    () => {
        console.log('inside function: ' + i);
        if(i>colors.length-1){
            console.log('inside if block: ' + i);
            i=0;
        }
        document.body.style.backgroundColor= colors[i++];
        console.log('after background color: ' + i);
    }
);