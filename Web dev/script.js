function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let inputBx=document.querySelector('#inputBx'); 
let list=document.querySelector('#list');

inputBx.addEventListener("keyup",function(event){
   if(event.key=="Enter"){
        addItem(this.value)
        this.value = ""
    }
   
})

function reset(){
    alert("Sorry, Something wrong with this web page. It will be fixed soon.")
}

let addItem=(inputBx) => {
    let listItem=document.createElement("li");
    listItem.innerHTML=`${inputBx}<i></i>`;
    list.appendChild(listItem);

    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
}