// function onClick(){
//     console.log("Button Clicked from onclick attribute!");
// }
let myLeads= [];
let listItems = ""
const inputEl= document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const ulEL= document.querySelector("#ul-el");

localStorage('input'){
    myLeads = JSON.parse(localStorage.getItem('input'));
    renderLead();
}

// function addLead() {
//     const lead = inputEl.value;
//     if (lead) {
//         myLeads.push(lead); 
//         inputEl.value = ''; 
//         console.log(myLeads); 
//     }
// }
inputBtn.addEventListener('click', function(){
    // addLead();
    const lead = inputEl.value;
    if (lead) {
        myLeads.push(lead);
        inputEl.value = '';
        console.log(myLeads);
        
    }
    renderLead();
});

inputEl.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        let lead=inputEl.value;
        myLeads.push(lead);
        console.log(myLeads);
        renderLead();

    }
    
});

function renderLead(){
    let leads
    let i
    for(i=0; i<myLeads.length; i++) {
        leads =  myLeads[i];
    }
    // listItems += "<li><a target = '_blank' href='"+ leads +"'>"+ leads +"</a></li>";
    listItems += 
    `<li>
        <a target = '_blank' href=' ${leads}' >
            ${leads}
        </a>
    </li>`
    // const li = document.createElement('li');
    // li.textContent = leads;
    // ulEL.append(li);

    // myLeads.push(inputEl.value);
    ulEL.innerHTML = listItems
    inputEl.value = '';
}
