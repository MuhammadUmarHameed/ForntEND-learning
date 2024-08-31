// function onClick(){
//     console.log("Button Clicked from onclick attribute!");
// }
let myLeads= [];
let tabs = [];
let listItems = ""
let leadsList = ""
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLead'));
const inputEl= document.querySelector("#input-el");
const inputBtn = document.querySelector('#input-btn');
const saveBtn = document.querySelector('#save-btn');
const deleteBtn = document.querySelector('#delete-btn');
const leadEl= document.querySelector("#lead-el");
const ulEl= document.querySelector("#ul-el");

// myLead();
if (leadsFromLocalStorage) { 
    myLeads = leadsFromLocalStorage;
    render(myLeads);
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
    render(myLeads);
    localStorage.setItem('myLead', JSON.stringify(myLeads));
});

inputEl.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        let lead=inputEl.value;
        myLeads.push(lead);
        console.log(myLeads);
        render(myLeads);
        localStorage.setItem('myLead', JSON.stringify(myLeads));
    }
    
    
});

saveBtn.addEventListener("click", function(){    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
        const currentTab = tabs[0].url;
        if(currentTab){
            myLeads.push(currentTab);
            localStorage.setItem("myLeads", JSON.stringify(myLeads) );
            render(myLeads);
        }
        })
    
})

deleteBtn.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
    
});
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

//*EXTRA*//
// function render(leads){
//     let leads
//     let i
//     for(i=0; i<myLeads.length; i++) {
//         leads =  myLeads[i];
    
//     // listItems += "<li><a target = '_blank' href='"+ leads +"'>"+ leads +"</a></li>";
//     listItems += 
//     `<li>
//         <a target = '_blank' href=' ${leads}' >
//             ${leads}
//         </a>
//     </li>`}
//     // const li = document.createElement('li');
//     // li.textContent = leads;
//     // ulEl.append(li);

//     // myLeads.push(inputEl.value);
//     ulEl.innerHTML = listItems
//     inputEl.value = '';
// }

// function myLead(){
//     let leads = leadsFromLocalStorage;
//     leadEl.innerHTML = '';
//     leadsList += 
//     `<li>
//         <a target = '_blank' href=' ${leads}' >
//             ${leads}
//         </a>
//     </li>`

//     leadEl.innerHTML = leadsList;
// }


// const welcomeEl= document.querySelector('#welcome-el');

// function welcomeUser(greeting, name, emoji) {
//     welcomeEl.innerHTML = `${greeting} ${name}, ${emoji}`;
// }


// welcomeUser('Welcome Back', 'Umar', 'Hello!');
    