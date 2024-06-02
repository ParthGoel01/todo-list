document.addEventListener('DOMContentLoaded',()=>{
    const searchBox=document.querySelector(".container__input input");
    const searchBtn=document.querySelector("#add");
    const clear = document.querySelector('#clear');

    const content = document.querySelector(".container__content");
    searchBtn.addEventListener('click',()=>{
        if(searchBox.value===""){
            alert("Enter a Task");
        }
        else{
            let check = ['./images/unchecked.png','./images/checked.png'];
            var i=0;
            const inputval = searchBox.value;
            searchBox.value="";

            let item=document.createElement("img");
            item.src=check[i];
            item.classList.add('uncheck');

            let li=document.createElement("p");
            li.innerHTML=inputval;

            let span  = document.createElement("span");
            span.classList.add('list_item');
            span.appendChild(item);
            span.appendChild(li);
            content.appendChild(span);

            span.addEventListener('click',()=>{
                i=(i+1)%2;
                item.src=check[i];
            })
        }
    })
    searchBox.addEventListener('keypress',(event)=>{
        if(event.key==='Enter'){
            searchBtn.click();
        }
    })
    clear.addEventListener('click',()=>{
        content.innerHTML="";
    })
})