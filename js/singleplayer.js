
//if IE4/NS6, apply style
/*if (document.all||document.getElementById){
    document.write('<style>.tictac{');
    document.write('width:50px;height:50px;');
    document.write('}</style>');
}
*/
var sqr1;
var sqr2;
var sqr3;
var sqr4;
var sqr5;
var sqr6;
var sqr7;
var sqr8;
var sqr9;
var sqr1T = 0;
var sqr2T = 0;
var sqr3T = 0;
var sqr4T = 0;
var sqr5T = 0;
var sqr6T = 0;
var sqr7T = 0;
var sqr8T = 0;
var sqr9T = 0;
var moveCount = 0;
var turn = 0;
var mode = 1;
var field_content = '<img src="images/trans_squarefield.png" class="ttt_square_img">';

function onclick_event(id) {
    //console.log("ID: "+id);
    console.log("HTML: "+document.getElementById('ttt_square'+id).innerHTML);
    console.log("FIELD: "+field_content);
    if(document.getElementById('ttt_square'+id).innerHTML == field_content && turn == 0 && mode == 1) {
        document.getElementById('ttt_square'+id).innerHTML = 'X';
        sqr1T = 1;
        turn = 1;
        vari();
        check();
    } else if(document.getElementById('ttt_square'+id).innerHTML == field_content && turn == 1 && mode == 2) {
        document.getElementById('ttt_square'+id).innerHTML = 'X';
        sqr1T = 1;
        turn = 0;
        vari();
        player1Check();
    } else if(document.getElementById('ttt_square'+id).innerHTML == field_content && turn == 0 && mode == 2) {
        document.getElementById('ttt_square'+id).innerHTML = 'O';
        sqr1T = 1;
        turn = 1;
        vari();
        player1Check();
    }
    drawCheck();
}

function vari() {
    sqr1 = document.getElementById('ttt_square1');
    sqr2 = document.getElementById('ttt_square2');
    sqr3 = document.getElementById('ttt_square3');
    sqr4 = document.getElementById('ttt_square4');
    sqr5 = document.getElementById('ttt_square5');
    sqr6 = document.getElementById('ttt_square6');
    sqr7 = document.getElementById('ttt_square7');
    sqr8 = document.getElementById('ttt_square8');
    sqr9 = document.getElementById('ttt_square9');
}

function check()
{
    if(sqr1 == field_content+"X" && sqr2 == field_content+"X" && sqr3 == field_content+"X") {
        alert("You Win!");
        reset();
    }
    else if(sqr4 == field_content+"X" && sqr5 == field_content+"X" && sqr6 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr7 == field_content+"X" && sqr8 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr1 == field_content+"X" && sqr5 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr1 == field_content+"X" && sqr4 == field_content+"X" && sqr7 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr2 == field_content+"X" && sqr5 == field_content+"X" && sqr8 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr3 == field_content+"X" && sqr6 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr1 == field_content+"X" && sqr5 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else if(sqr3 == field_content+"X" && sqr5 == field_content+"X" && sqr7 == field_content+"X")
    {
        alert("You Win!");
        reset();
    }
    else
    {
        winCheck();
        check2();
        drawCheck();
    }
}

function check2()
{
    vari();
    drawCheck();
    if(sqr1 == field_content+"O" && sqr2 == field_content+"O" && sqr3 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr4 == field_content+"O" && sqr5 == field_content+"O" && sqr6 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr7 == field_content+"O" && sqr8 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr1 == field_content+"O" && sqr5 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr1 == field_content+"O" && sqr4 == field_content+"O" && sqr7 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr2 == field_content+"O" && sqr5 == field_content+"O" && sqr8 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr3 == field_content+"O" && sqr6 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr1 == field_content+"O" && sqr5 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
    else if(sqr3 == field_content+"O" && sqr5 == field_content+"O" && sqr7 == field_content+"O")
    {
        alert("You Lose!");
        reset();
    }
}

function player1Check()
{
    if(sqr1 == field_content+"X" && sqr2 == field_content+"X" && sqr3 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr4 == field_content+"X" && sqr5 == field_content+"X" && sqr6 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr7 == field_content+"X" && sqr8 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr1 == field_content+"X" && sqr5 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr1 == field_content+"X" && sqr4 == field_content+"X" && sqr7 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr2 == field_content+"X" && sqr5 == field_content+"X" && sqr8 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr3 == field_content+"X" && sqr6 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr1 == field_content+"X" && sqr5 == field_content+"X" && sqr9 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else if(sqr3 == field_content+"X" && sqr5 == field_content+"X" && sqr7 == field_content+"X")
    {
        alert("Player 1 wins!");
        reset();
    }
    else
    {
        player2Check();
        drawCheck();
    }
}

function player2Check()
{
    vari();
    drawCheck();
    if(sqr1 == field_content+"O" && sqr2 == field_content+"O" && sqr3 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr4 == field_content+"O" && sqr5 == field_content+"O" && sqr6 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr7 == field_content+"O" && sqr8 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr1 == field_content+"O" && sqr5 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr1 == field_content+"O" && sqr4 == field_content+"O" && sqr7 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr2 == field_content+"O" && sqr5 == field_content+"O" && sqr8 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr3 == field_content+"O" && sqr6 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr1 == field_content+"O" && sqr5 == field_content+"O" && sqr9 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
    else if(sqr3 == field_content+"O" && sqr5 == field_content+"O" && sqr7 == field_content+"O")
    {
        alert("Player 2 wins!");
        reset();
    }
}

function drawCheck()
{
    vari();
    moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T;
    if(moveCount == 9)
    {
        reset();
        alert("Draw");
    }
}

function winCheck()
{
    check2();
    if(sqr1 == field_content+"O" && sqr2 == field_content+"O" && sqr3T == 0 && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr2 == field_content+"O" && sqr3 == field_content+"O" && sqr1T == 0 && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr4 == field_content+"O" && sqr5 == field_content+"O" && sqr6T == 0 && turn == 1)
    {
        document.getElementById('ttt_square6').innerHTML = field_content+"O";
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr5 == field_content+"O" && sqr6 == field_content+"O" && sqr4T == 0 && turn == 1)
    {
        document.getElementById('ttt_square4').innerHTML = field_content+"O";
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr7 == field_content+"O" && sqr8 == field_content+"O" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr8 == field_content+"O" && sqr9 == field_content+"O" && sqr7T == 0 && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"O" && sqr5 == field_content+"O" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr5 == field_content+"O" && sqr9 == field_content+"O" && sqr1T == 0 && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"O" && sqr5 == field_content+"O" && sqr7T == 0 && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr7 == field_content+"O" && sqr5 == field_content+"O" && sqr3T == 0 && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"O" && sqr3 == field_content+"O" && sqr2T == 0 && turn == 1)
    {
        document.getElementById('ttt_square2').innerHTML = field_content+"O";
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr4 == field_content+"O" && sqr6 == field_content+"O" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr7 == field_content+"O" && sqr9 == field_content+"O" && sqr8T == 0 && turn == 1)
    {
        document.getElementById('ttt_square8').innerHTML = field_content+"O";
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"O" && sqr7 == field_content+"O" && sqr4T == 0 && turn == 1)
    {
        document.getElementById('ttt_square4').innerHTML = field_content+"O";
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr2 == field_content+"O" && sqr8 == field_content+"O" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"O" && sqr9 == field_content+"O" && sqr6T == 0 && turn == 1)
    {
        document.getElementById('ttt_square6').innerHTML = field_content+"O";
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"O" && sqr5 == field_content+"O" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr4 == field_content+"O" && sqr7 == field_content+"O" && sqr1T == 0 && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr5 == field_content+"O" && sqr8 == field_content+"O" && sqr2T == 0 && turn == 1)
    {
        document.getElementById('ttt_square2').innerHTML = field_content+"O";
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr6 == field_content+"O" && sqr9 == field_content+"O" && sqr3T == 0 && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"O" && sqr4 == field_content+"O" && sqr7T == 0 && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr2 == field_content+"O" && sqr5 == field_content+"O" && sqr8T == 0 && turn == 1)
    {
        document.getElementById('ttt_square8').innerHTML = field_content+"O";
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"O" && sqr6 == field_content+"O" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"O" && sqr9 == field_content+"O" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"O" && sqr7 == field_content+"O" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else
    {
        computer();
    }
    check2();
}
function computer()
{
    check2();
    if(sqr1 == field_content+"X" && sqr2 == field_content+"X" && sqr3T == 0 && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr2 == field_content+"X" && sqr3 == field_content+"X" && sqr1T == 0 && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr4 == field_content+"X" && sqr5 == field_content+"X" && sqr6T == 0 && turn == 1)
    {
        document.getElementById('ttt_square6').innerHTML = field_content+"O";
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr5 == field_content+"X" && sqr6 == field_content+"X" && sqr4T == 0 && turn == 1)
    {
        document.getElementById('ttt_square4').innerHTML = field_content+"O";
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr7 == field_content+"X" && sqr8 == field_content+"X" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr8 == field_content+"X" && sqr9 == field_content+"X" && sqr7T == 0 && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"X" && sqr5 == field_content+"X" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr5 == field_content+"X" && sqr9 == field_content+"X" && sqr1T == 0 && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"X" && sqr5 == field_content+"X" && sqr7T == 0 && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr7 == field_content+"X" && sqr5 == field_content+"X" && sqr3T == 0 && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"X" && sqr3 == field_content+"X" && sqr2T == 0 && turn == 1)
    {
        document.getElementById('ttt_square2').innerHTML = field_content+"O";
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr4 == field_content+"X" && sqr6 == field_content+"X" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr7 == field_content+"X" && sqr9 == field_content+"X" && sqr8T == 0 && turn == 1)
    {
        document.getElementById('ttt_square8').innerHTML = field_content+"O";
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"X" && sqr7 == field_content+"X" && sqr4T == 0 && turn == 1)
    {
        document.getElementById('ttt_square4').innerHTML = field_content+"O";
        sqr4T = 1;
        turn = 0;
    }
    else if(sqr2 == field_content+"X" && sqr8 == field_content+"X" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"X" && sqr9 == field_content+"X" && sqr6T == 0 && turn == 1)
    {
        document.getElementById('ttt_square6').innerHTML = field_content+"O";
        sqr6T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"X" && sqr5 == field_content+"X" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr4 == field_content+"X" && sqr7 == field_content+"X" && sqr1T == 0 && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        sqr1T = 1;
        turn = 0;
    }
    else if(sqr5 == field_content+"X" && sqr8 == field_content+"X" && sqr2T == 0 && turn == 1)
    {
        document.getElementById('ttt_square2').innerHTML = field_content+"O";
        sqr2T = 1;
        turn = 0;
    }
    else if(sqr6 == field_content+"X" && sqr9 == field_content+"X" && sqr3T == 0 && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        sqr3T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"X" && sqr4 == field_content+"X" && sqr7T == 0 && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        sqr7T = 1;
        turn = 0;
    }
    else if(sqr2 == field_content+"X" && sqr5 == field_content+"X" && sqr8T == 0 && turn == 1)
    {
        document.getElementById('ttt_square8').innerHTML = field_content+"O";
        sqr8T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"X" && sqr6 == field_content+"X" && sqr9T == 0 && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        sqr9T = 1;
        turn = 0;
    }
    else if(sqr1 == field_content+"X" && sqr9 == field_content+"X" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else if(sqr3 == field_content+"X" && sqr7 == field_content+"X" && sqr5T == 0 && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        sqr5T = 1;
        turn = 0;
    }
    else
    {
        AI();
    }
    check2();
}

function AI()
{
    vari();
    if(document.getElementById('ttt_square5').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square5').innerHTML = field_content+"O";
        turn = 0;
        sqr5T = 1;
    }
    else if( document.getElementById('ttt_square1').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square1').innerHTML = field_content+"O";
        turn = 0;
        sqr1T = 1;
    }
    else if( document.getElementById('ttt_square9').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square9').innerHTML = field_content+"O";
        turn = 0;
        sqr9T = 1;
    }
    else if( document.getElementById('ttt_square6').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square6').innerHTML = field_content+"O";
        turn = 0;
        sqr6T = 1;
    }
    else if( document.getElementById('ttt_square2').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square2').innerHTML = field_content+"O";
        turn = 0;
        sqr2T = 1;
    }
    else if( document.getElementById('ttt_square8').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square8').value = field_content+"O";
        turn = 0;
        sqr8T = 1;
    }
    else if( document.getElementById('ttt_square3').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square3').innerHTML = field_content+"O";
        turn = 0;
        sqr3T = 1;
    }
    else if( document.getElementById('ttt_square7').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square7').innerHTML = field_content+"O";
        turn = 0;
        sqr7T = 1;
    }
    else if( document.getElementById('ttt_square4').innerHTML == field_content && turn == 1)
    {
        document.getElementById('ttt_square4').innerHTML = field_content+"O";
        turn = 0;
        sqr4T = 1;
    }
    check2();
}

function reset()
{
    /*document.tic.sqr1.value = field_content;
    document.tic.sqr2.value = field_content;
    document.tic.sqr3.value = field_content;
    document.tic.sqr4.value = field_content;
    document.tic.sqr5.value = field_content;
    document.tic.sqr6.value = field_content;
    document.tic.sqr7.value = field_content;
    document.tic.sqr8.value = field_content;
    document.tic.sqr9.value = field_content;*/
    sqr1T = 0;
    sqr2T = 0;
    sqr3T = 0;
    sqr5T = 0;
    sqr6T = 0;
    sqr7T = 0;
    sqr8T = 0;
    sqr9T = 0;
    vari();
    turn = 0;
    moveCount = 0;
}

function resetter()
{
    reset();
}

/*
<FORM NAME="tic" method="post">
    <INPUT TYPE="button" NAME="sqr1" class="tictac" value=field_content onClick="if(document.tic.sqr1.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr1.value = ' X '; sqr1T = 1; turn = 1; vari(); check();} else if(document.tic.sqr1.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr1.value = ' X '; sqr1T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr1.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr1.value = ' O '; sqr1T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    <INPUT TYPE="button" NAME="sqr2" class="tictac" value=field_content onClick="if(document.tic.sqr2.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr2.value = ' X '; sqr2T = 1; turn = 1; vari(); check();} else if(document.tic.sqr2.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr2.value = ' X '; sqr2T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr2.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr2.value = ' O '; sqr2T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    <INPUT TYPE="button" NAME="sqr3" class="tictac" value=field_content onClick="if(document.tic.sqr3.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr3.value = ' X '; sqr3T = 1; turn = 1; vari(); check();} else if(document.tic.sqr3.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr3.value = ' X '; sqr3T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr3.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr3.value = ' O '; sqr3T = 1; turn = 1; vari(); player1Check()} drawCheck()"><br />
    <INPUT TYPE="button" NAME="sqr4" class="tictac" value=field_content onClick="if(document.tic.sqr4.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr4.value = ' X '; sqr4T = 1; turn = 1; vari(); check();} else if(document.tic.sqr4.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr4.value = ' X '; sqr4T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr4.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr4.value = ' O '; sqr4T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    <INPUT TYPE="button" NAME="sqr5" class="tictac" value=field_content onClick="if(document.tic.sqr5.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr5.value = ' X '; sqr5T = 1; turn = 1; vari(); check();} else if(document.tic.sqr5.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr5.value = ' X '; sqr5T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr5.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr5.value = ' O '; sqr5T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    <INPUT TYPE="button" NAME="sqr6" class="tictac" value=field_content onClick="if(document.tic.sqr6.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr6.value = ' X '; sqr6T = 1; turn = 1; vari(); check();} else if(document.tic.sqr6.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr6.value = ' X '; sqr6T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr6.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr6.value = ' O '; sqr6T = 1; turn = 1; vari(); player1Check()} drawCheck()"><br />
    <INPUT TYPE="button" NAME="sqr7" class="tictac" value=field_content onClick="if(document.tic.sqr7.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr7.value = ' X '; sqr7T = 1; turn = 1; vari(); check();} else if(document.tic.sqr7.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr7.value = ' X '; sqr7T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr7.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr7.value = ' O '; sqr7T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    <INPUT TYPE="button" NAME="sqr8" class="tictac" value=field_content onClick="if(document.tic.sqr8.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr8.value = ' X '; sqr8T = 1; turn = 1; vari(); check();} else if(document.tic.sqr8.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr8.value = ' X '; sqr8T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr8.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr8.value = ' O '; sqr8T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    <INPUT TYPE="button" NAME="sqr9" class="tictac" value=field_content onClick="if(document.tic.sqr9.value == '     ' && turn == 0 && mode == 1) {document.tic.sqr9.value = ' X '; sqr9T = 1; turn = 1; vari(); check();} else if(document.tic.sqr9.value == '     ' && turn == 1 && mode == 2) {document.tic.sqr9.value = ' X '; sqr9T = 1; turn = 0; vari(); player1Check()} else if(document.tic.sqr9.value == '     ' && turn == 0 && mode == 2) {document.tic.sqr9.value = ' O '; sqr9T = 1; turn = 1; vari(); player1Check()} drawCheck()">
    </form>
*/
