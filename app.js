var list =document.getElementById('list')
function add(){
    var todo=document.getElementById('todo')
    var li =document.createElement("li")
    var lit=document.createTextNode(todo.value)
    li.appendChild(lit) 

    var delt=document.createTextNode("DELETE")
 var delb=document.createElement('button')
delb.appendChild(delt)
 delb.setAttribute('class','delb')
 delb.setAttribute('onclick','delb(this)') 



var edtb=document.createElement('button')
var edtt=document.createTextNode("Edit")
edtb.appendChild(edtt)
edtb.setAttribute('onclick','edtlb(this)')
li.appendChild(delb)
li.appendChild(edtb)  
   list.appendChild(li)
    todo.value=""
}
function delb(e){
e.parentNode.remove()
}
function edtlb(w){
   var val= w.parentNode.firstChild.nodeValue;
var edtv=prompt('enter new value',val)
w.parentNode.firstChild.nodeValue=edtv}
function dela(){
    list.innerHTML= ""
}