//VARIABLES
//  newItem
//  textValue


//FUNCTIONS
//  Add Item
//  Delete Item

//FUNCTION ADD ITEM
//  button is clicked
//  create a new item - form type="check" value="input from new createNew"
//  add text to item 
//  add item to list




//ADD ITEM
var list = document.getElementById('list');
var addButton = document.getElementById('addButton');
addButton.addEventListener('click', function(){
    inputText = document.getElementById('itemInput').value;
    newItem = document.createElement('li');
    newItemContent = document.createTextNode(inputText);
    newItem.appendChild(newItemContent);
    document.getElementById('list').appendChild(newItem);
})

//DELETE ITEM
var item = document.getElementsByTagName('li');
while (item>0){
    item.addEventListener('click', function(){
            item.remove();
})}

//I can only delete on item. I need the function to continue to run
//Options:
//  while it is greater than 0

//Add a function to enable to function to delete