//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000
PHOTO_API = "https://api.nasa.gov/mars-photos/api/v1/";
API_KEY = "StNlCS93Xlj0xJVWSdFm27AdrCpMxr8HvlYrQub5";

/**
 * https://api.nasa.gov/mars-photos/api/v1/
 * 
 * var person= {
       firstName: "Jack",
       lastName: "Smith",
       fullName: function () {
          return this.firstName + "   " + this.lastName;        
       }
 };
 */
// Mission Manifiest

/**
 * Possible Input
 * date 
 */

function apiCall(target){
	return (PHOTO_API + )
}

const perseverance = {
	roverName: "Perseverance",

}

const MissionManifest{
	target: "manifests/",
	
	api_url = apiCall(this.target)
	// Make start of Manifest URL for API
	apiCall(target){
		// Returns //https://api.nasa.gov/mars-photos/api/v1/manifests/
		return (PHOTO_API + this.#manifest);
	}

// Rover
 Rover extends MissionManifest{
	target: 'rover',

	api_url = apiCall(this.target)
}

// Perseverance Rover
class Perseverance extends Rover{
	#roverName = 'Perseverance';
	cameras = {
		EDL_RUCAM: "EDL_RUCAM"
	}
}

class Curiosity extends Rover{
	#roverName = 'Curiosity';
	cameras = {

	}
}

class Oppurtunity extends Rover{
	#roverName = 'Oppurtunity';
	cameras = {

	}
}

class Spirit extends Rover{
	#roverName = 'Spirit';
	cameras = {

	}
}


// Date function objects

// function apiCall(rover, sol, earthDate,  camera){
// 	rover;
// 	sol;
// 	earthDate;
// 	camera;

// 	constructor()
// }


// Curiosity Rover



// Oppurtunity and Spirit Rovers
const list_items = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);