const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"address": " 1234 main street St, Hollywood, FL, USA",
					"agenda_slug": "Wjerry",
					"email": "jerrydev32@gmail.com",
					"full_name": "Jerry Wood",
					"id": 5360670930,
					"phone": "7861234567"
				},
				{
					"address": "47568 NW 34ST, 33434 FL, USA",
					"agenda_slug": "Pamela",
					"email": "amaga677@gmail.com",
					"full_name": "Pamela",
					"id": 41555755647,
					"phone": "59175837666"
				},
				
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},
			fetchAllContacts: () => {
             /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch( "https://playground.4geeks.com/apis/fake/contact/agenda/Pamela")
				.then(response => response.json())
				.then(data => setStore({
					"address": data.address,
					"agenda_slug": data.agenda_slug,
					"email": data.email,
					"full_name": data.full_name,
					"id": data.id,
					"phone": data.phone
				}))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
