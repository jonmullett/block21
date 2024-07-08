fetch ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events")
.then (response => response.json())
.then (events => console.log (events))
.catch (err => console.error(err));

const partyContainer = document.querySelector ("#party-container");
const partyForm = document.querySelector ("#add-party-form");
const partyName = document.querySelector ("#party-name");
const partyDescription = document.querySelector ("#party-description");
const partyDate= document.querySelector ("#party-date");
const partyLocation = document.querySelector ("#party-location");

async function getEvents () {
try {

   

const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events");
const json = await response.json();
return json.data;
// if (!response.true)
} catch (err) {
    console.log (err);
}

}












    // container.forEach (container => renderContainer(container));


// render();

// async function renderEvents ()

function createEventsHTML (events, container) {
    const eventsHTML = events.map ((event) => {
   
    
// const containerDiv = document.querySelector (`div`);
// const container = document.createElement (`div`);
const eventContainer = document.createElement ("div");
// containerDescription.innerText = party.container;
const eventParagraph = document.createElement ("p");

// const containerName = document.createElement (`party-name`);
// // containerName.innerText = container.name;
// const containerDate= document.createElement (`party-date`);
// // containerDate.innerText = container.date;
// const containerLocation = document.createElement (`party-location`);
// containerLocation.innerText = container.location;
const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.addEventListener ("click", async function () {
    try {
    const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events`,
    {
        method: "Delete",
    }
    );
    console.log(response);
    if (response.status === 204) {
      alert("deleted successfully");
      render();
    }
  } catch (err) {
    console.log(err);
  }
});
    // console.log (response);





// eventContainer.appendChild (eventDiv);
// eventContainer.appendChild (eventParagraph);
// eventParagraph.innerText = `${event.name} ${event.description} ${event.location} ${event.date}`;

eventContainer.appendChild (eventParagraph);
eventContainer.appendChild (deleteButton); 
return eventContainer;

});


container.replaceChildren (...eventsHTML);
}

// async function createEvent (event) {
//     try {
//         const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events`,
//         // {
        
//         // }
    
    
//     }



    



async function render () {
    const events = await getEvents ();
    createEventsHTML (events, partyContainer);

}
render();


// async function getData () {
//     const res = await fetch ("container");
//     const container = await response.json();
//     console.log (container);

//     return container;
// }






// const partyContainer = document.querySelector("#party-container");
// const newPartyForm = document.querySelector("#add-party-form");
// const partyName = document.querySelector("#party-name");
// const partyDescription = document.querySelector("#party-description");
// const partyLocation= document.querySelector("#party-location");
// const partyDate = document.querySelector("#party-date");
// const partyTime = document.querySelector("#party-time");



// async function getEvents(){
//     try{

//     const res = await fetch ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-ftb-et-WEB-am/events");
//     const json = await res.json();
//     return json.data;

// }
// catch (err) {
//     console.log(err);
// }
// }

// function createEventsHTML(events, container) {
//     const eventsHTML = events.map((event) => {
//     const eventContainer = document.createElement("div");
//     const eventParagraph = document.createElement("p");
//     eventParagraph.innerText = `${event.name} ${event.description} ${event.location} ${event.date} ${event.time}`;
//     const deleteButton = document.createElement ("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.addEventListener ("click", async function (){
//        try {
//         const res = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-ftb-et-WEB-am/events/${event.id}`),
//        {
//             method: "DELETE",
//         }
// );
// console.log(res);
// if (res.status === 204) {
//     alert("deleted successfully");
//     render();

// }
//     } catch (err) {
//         console.log(err);
//     }
// });

// async function render() {
//     const events = await getEvents();
//     createEventsHTML (events, partyContainer);
// }
