//your code here
var addButton = document.getElementById('add');
var itemName = document.getElementById('item-name-input')
var itemPrice = document.getElementById('item-price-input')
var table = document.getElementById('table')
var sum = document.getElementById('sum')

addButton.innerText = 'Add';

function addToTable(){
    // 1. get the values entered by a user
    var userDataName = itemName.value;
    var userDataPrice = itemPrice.value;
    
    // 2. check whether values are entered or not
    if(userDataName != '' && userDataPrice != '' ){

        // 3. Create a new Row at the top
        var row = table.insertRow(0);

        // 4. Create the cells
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);

        // Set attribute "ID" as per te question
        td1.setAttribute("id", "item");
        td2.setAttribute("id", "price");

        // 5. put the values inside the empty cells
        td1.innerText = userDataName;
        td2.innerText = userDataPrice;

        // 6. print the grand total
        sum.innerText =  Number(sum.innerText) + Number(td2.innerText);

        // 7. Clear the text field
        itemName.value = '' ;
        itemPrice.value = '' ;
    }
}

addButton.onclick = addToTable;