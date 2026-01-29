//Example 1


document.getElementById("changeTextButton").addEventListener('click',function(){
    //console.log(this)//--> html element or dom element  
    let paragraph=document.getElementById("myParagraph");
    //console.log(paragraph);//print the full tag of the paragraph element
    //console.log(paragraph.textContent);// This is a paragraph. Click the button to change me!
    paragraph.textContent="the paragraph is changed";
});
// console.log(hold);

// addEventListener('click',()=>{
//     console.log(this)//--> global context  for 
// });


//Example 2


document.getElementById("highlightFirstCity").addEventListener('click',function(){
    let citilist=document.getElementById("citiesList");
    //console.log(citilist.firstElementChild);//newyork list item
    //console.log(citilist.firstElementChild.classList);//DOMTokenList['chai',value:'chai']
    citilist.firstElementChild.classList.add("highlight");
});

//Example 3

document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent="Espresso";
    coffeeType.style.backgroundColor="brown";
    coffeeType.style.padding="5px";

});

//Example 4

document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    let shoppingList=document.getElementById("shoppingList");
    shoppingList.appendChild(newItem);
});

//Example 5

document.getElementById("removeLastTask").addEventListener("click",function(){
    document.getElementById("taskList").lastElementChild.remove();
})