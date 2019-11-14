// ADD NEW ITEM TO END OF LIST
var endListItem = document.createElement("li");
var listNode = document.createTextNode("cream");
endListItem.appendChild(listNode);

var element = document.getElementById("page");
element.appendChild(endListItem);

// ADD NEW ITEM START OF LIST
var elements = document.getElementsByTagName("ul");
var i;
for (i of elements){
    i.setAttribute("id", "list");
}

var startListItem = document.createElement("li");
listNode = document.createTextNode("kale");
startListItem.appendChild(listNode);

element = document.getElementById("list");
var child = document.getElementById("one");
element.insertBefore(startListItem, child);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
elements = document.getElementsByTagName("li");
for (i of elements) {
    i.setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var items = elements.length;

document.getElementsByTagName("h2")[0].innerHTML = "Buy groceries " + items;
