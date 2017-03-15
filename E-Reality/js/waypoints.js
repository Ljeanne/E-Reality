
var $way1 =$('.way1')
var $A1 =$('.A1')
var $A2 =$('.A2')
var $A3 =$('.A3')
var $A4 =$('.A4')
var $A5 =$('.A5')



$way1.waypoint(function(direction){
if (direction =='down'){
$A1.addClass('js-anim1-animate')
$A2.addClass('js-anim2-animate')
$A3.addClass('js-anim3-animate')
$A4.addClass('js-anim4-animate')
$A5.addClass('js-anim5-animate')
console.log('triger way1')}
else{
$A1.removeClass('js-anim1-animate')
$A2.removeClass('js-anim2-animate')
$A3.removeClass('js-anim3-animate')
$A4.removeClass('js-anim4-animate')
$A5.removeClass('js-anim5-animate')

}},{offset:'20%' });

$pepe.waypoint(function (direction){
	if (direction == 'down'){
	$hell.addClass('js-hell-animate')
	$titre.addClass('js-titre-animate')
	$pepe.addClass('js-pepe-animate')
	console.log('triger!');}
	else {
	$hell.removeClass('js-hell-animate')
	$titre.removeClass('js-titre-animate')
	$pepe.removeClass('js-pepe-animate') }}, {offset:'50%' });



