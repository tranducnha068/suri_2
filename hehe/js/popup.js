
status="Suri"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='S';
a[12]='u';
a[13]='r';
a[14]='i';
a[15]=' ';
a[16]='l';
a[17]='à';
a[18]=' ';
a[19]='n';
a[20]='g';
a[21]='ư';
a[22]='ờ';
a[23]='i';
a[24]=' ';
a[25]='c';
a[26]='u';
a[27]='t';
a[28]='e';
a[29]=' ';
a[30]='n';
a[31]='h';
a[32]='ấ';
a[33]='t';
a[34]=' ';
a[35]='v';
a[36]='ũ';
a[37]=' ';
a[38]='t';
a[39]='r';
a[40]='ụ';
a[41]='!';
a[42]=' ';
a[43]='♥';
a[44]='♥';
a[45]='♥';
a[46]='♥';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2> Ai cũng nói vậy hết á <img src='http://vozforums.com/images/smilies/Off/adore.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p> Suri mãi là công chúa xinh nhất và cute nhất làng <img src='http://vozforums.com/images/smilies/Off/angry.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p> Chúc Công Chúa Suri một sinh nhật vui vẻ và tràn đầy hạnh phúc bên viu ơ <p> ♥ Mãi iu ♥<img src='http://vozforums.com/images/smilies/Off/sure.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				