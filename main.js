var num = document.getElementById('num');
var btn = document.querySelector('#button');
var result = document.getElementById('result');

btn.addEventListener("click",()=>{
    var number = parseInt(num.value);

        result.innerText= output(number)
});

function output(number) {
 let temp = number;
let rem = 0;
let reverse;
let words = '';
while(temp!=0){

        lastdigit = temp % 10;
         switch (lastdigit) {
            case 1:
                reverse = 'one';
                break;
            case 2:
                reverse = 'two';
                break;
            case 3:
                reverse = 'three';
                break;
            case 4:
                reverse = 'four';
                break;
            case 5:
                reverse = 'five';
                break;
            case 6:
                reverse = 'six';
                break;
            case 7:
                reverse = 'seven';
                break;
            case 8:
                reverse = 'eight';
                break;
            case 9:
                reverse='nine';
                break;
            case 0:
                reverse = 'zero';
              break;
        }
        words = words +" "+ reverse;
        temp = (temp-lastdigit)/10;
        
    }
    return words;

}
