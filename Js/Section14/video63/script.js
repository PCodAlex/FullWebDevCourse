//Example 6


// document.getElementById("clickMeButton").addEventListener("click",function(){
//     alert("hii! Akash Samanta");
// });

// document.getElementById("clickMeButton").addEventListener("mouseover",function(){
//     alert("hii! Akash Samanta");
// });

document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("hii! Akash Samanta");
});


//Example 7


document.getElementById("teaList").addEventListener("click",function(event){
    //console.log(event.target);//pointer event
    if(event.target && event.target.matches('.teaItem')){
        alert(`you selected: ${event.target.textContent}`)
    }
});


//Example 8


document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback=document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent=`FeedBack: ${feedback}`;
});


//Example 9


document.addEventListener("DOMContentLoaded",function(){
    this.getElementById('domStatus').textContent=`dom fully loaded`;
});


//Example 10


document.getElementById("toggleHighlight").addEventListener('click',function(){
    let desText=document.getElementById('descriptionText');
    desText.classList.add("highlight");
    // document.getElementById('descriptionText').classList.toggle("highlight");
})