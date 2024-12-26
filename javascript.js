function insert(num)
{
var number = document.getElementById('resulted').innerHTML;
document.getElementById('resulted').innerHTML = number + num;
}
function cleaar() {
    document.getElementById('resulted').innerHTML = ""
}
function back() {
    var result = document.getElementById('resulted').innerHTML;
    document.getElementById('resulted').innerHTML = resulted.substring(0, resulted.length -1)
}
function calcular() {
    var result = document.getElementById('resulted').innerHTML;
    if(resulted){
        document.getElementById('resulted').innerHTML = eval(result);
    }
}