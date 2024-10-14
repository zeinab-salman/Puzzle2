var btn1 = document.querySelector('.btn-1');
var btn2 = document.querySelector('.btn-2');
var btn3 = document.querySelector('.btn-3');
var btn4 = document.querySelector('.btn-6');
var btn5 = document.querySelector('.btn-7');
var btn6 = document.querySelector('.btn-8');
var btn7 = document.querySelector('.btn-11');
var btn8 = document.querySelector('.btn-12');
var btn9 = document.querySelector('.btn-13');

//span
var span1 = document.querySelector('.span1');
var span2 = document.querySelector('.span2');
var span3 = document.querySelector('.span3');
var span4 = document.querySelector('.span6');
var span5 = document.querySelector('.span7');
var span6 = document.querySelector('.span8');
var span7 = document.querySelector('.span11');
var span8 = document.querySelector('.span12');
var span9 = document.querySelector('.span13');
//////
var result = document.querySelector('.result');
var mood = document.querySelector('.mood');
var click = document.querySelector('.click');
var click1=document.querySelector('.click1');
var sum = 0;
////////
btn1.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span2.innerHTML == '') {
        span2.innerHTML = span1.innerHTML;
        span1.innerHTML = '';
    }
    if (span4.innerHTML == '') {
        span4.innerHTML = span1.innerHTML;
        span1.innerHTML = '';

    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)

///
btn2.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span1.innerHTML == '') {
        span1.innerHTML = span2.innerHTML;
        span2.innerHTML = '';
    }
    if (span3.innerHTML == '') {
        span3.innerHTML = span2.innerHTML;
        span2.innerHTML = '';

    }
    if (span5.innerHTML == '') {
        span5.innerHTML = span2.innerHTML;
        span2.innerHTML = '';
    }

    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)
///////
btn3.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span2.innerHTML == '') {
        span2.innerHTML = span3.innerHTML;
        span3.innerHTML = '';
    }
    if (span6.innerHTML == '') {
        span6.innerHTML = span3.innerHTML;
        span3.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)
//////
btn4.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span1.innerHTML == '') {
        span1.innerHTML = span4.innerHTML;
        span4.innerHTML = '';
    }
    if (span5.innerHTML == '') {
        span5.innerHTML = span4.innerHTML;
        span4.innerHTML = '';
    }
    if (span7.innerHTML == '') {
        span7.innerHTML = span4.innerHTML;
        span4.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)
///////
btn5.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span2.innerHTML == '') {
        span2.innerHTML = span5.innerHTML;
        span5.innerHTML = '';
    }
    if (span4.innerHTML == '') {
        span4.innerHTML = span5.innerHTML;
        span5.innerHTML = '';
    }
    if (span6.innerHTML == '') {
        span6.innerHTML = span5.innerHTML;
        span5.innerHTML = '';
    }
    if (span8.innerHTML == '') {
        span8.innerHTML = span5.innerHTML;
        span5.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)
/////////
btn6.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span3.innerHTML == '') {
        span3.innerHTML = span6.innerHTML;
        span6.innerHTML = '';
    }

    if (span5.innerHTML == '') {
        span5.innerHTML = span6.innerHTML;
        span6.innerHTML = '';
    }

    if (span9.innerHTML == '') {
        span9.innerHTML = span6.innerHTML;
        span6.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)
/////////
btn7.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span4.innerHTML == '') {
        span4.innerHTML = span7.innerHTML;
        span7.innerHTML = '';
    }

    if (span8.innerHTML == '') {
        span8.innerHTML = span7.innerHTML;
        span7.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)
///////////
btn8.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span5.innerHTML == '') {
        span5.innerHTML = span8.innerHTML;
        span8.innerHTML = '';
    }

    if (span7.innerHTML == '') {
        span7.innerHTML = span8.innerHTML;
        span8.innerHTML = '';
    }
    if (span9.innerHTML == '') {
        span9.innerHTML = span8.innerHTML;
        span8.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }

}
)
/////////
btn9.addEventListener('click', function () {
    sum++;
    click.innerHTML = sum;
    if (span6.innerHTML == '') {
        span6.innerHTML = span9.innerHTML;
        span9.innerHTML = '';
    }
    if (span8.innerHTML == '') {
        span8.innerHTML = span9.innerHTML;
        span9.innerHTML = '';
    }
    if (
        span1.innerHTML == 1 &&
        span2.innerHTML == 2 &&
        span3.innerHTML == 3 &&
        span4.innerHTML == 4 &&
        span5.innerHTML == 5 &&
        span6.innerHTML == 6 &&
        span7.innerHTML == 7 &&
        span8.innerHTML == 8 &&
        span9.innerHTML == ''
    ) {
        result.innerHTML = 'Excellent!';
    }
}
)

//////////////shuffle
function refresh() {
    sum=0;
    click.innerHTML = sum;
    function uniqueNumber(array, count) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    const arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, ''];
    var arraySpan=[span1,span2,span3,span4,span5,span6,span7,span8,span9];
    const uniqueNn = uniqueNumber(arrayValue, 9);
    console.log(uniqueNn);
    for (let index = 0; index < uniqueNn.length; index++) {
        arraySpan[index].innerHTML = uniqueNn[index];
    }
}
//////////////
var board = document.querySelector('.board');
var btn=document.querySelector('.btn');
mood.addEventListener("click", function () {
    

board.style.backgroundColor=
board.style.backgroundColor=== 'black' ? 'rgb(226, 208, 242)':'black ';

click.style.color=
click.style.color=== 'white' ? '  rgb(71, 12, 71)':'white';

click1.style.color=
click1.style.color=== 'white' ? '  rgb(71, 12, 71)':'white';

result.style.color=
result.style.color=== 'white' ? '  rgb(71, 12, 71)':'white';


}  
)



