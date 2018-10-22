var map = L.map('map').setView([28.0370823,-82.419490], 17);

//var map=L.map('map').fitBounds([[28.377,-81.553548],[28.3715485,-81.5816633]]);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var rides =[{'Rank': 8,
'Roller Coaster Rides': ' Sand Serpent',
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.0385309,
'lng': -82.42240780000002,
'rating': 4.0},
{'Rank': 7,
'Roller Coaster Rides': " Cobra's Curse",
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.0343683,
'lng': -82.4188559,
'rating': 4.4},
{'Rank': 6,
'Roller Coaster Rides': ' Kumba',
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.039545,
'lng': -82.42307129999998,
'rating': 4.6},
{'Rank': 5,
'Roller Coaster Rides': ' Scorpion',
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.0376348,
'lng': -82.423307,
'rating': 3.8},
{'Rank': 4,
'Roller Coaster Rides': ' Montu',
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.034368599999997,
'lng': -82.41817089999998,
'rating': 4.8},
{'Rank': 3,
'Roller Coaster Rides': ' Cheetah Hunt',
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.0340928,
'lng': -82.420025,
'rating': 4.8},
{'Rank': 2,
'Roller Coaster Rides': ' SheiKra',
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.0366678,
'lng': -82.42494549999998,
'rating': 4.8},
{'Rank': 1,
'Roller Coaster Rides': " Falcon's Fury",
'dataset': 'rides_Bush_gardens_Fl',
'lat': 28.037644300000004,
'lng': -82.42275149999998,
'rating': 4.7}];
  
  // Loop through the rides array and create one marker for each ride object
  for (var i = 0; i < rides.length; i++) {
      console.log(rides[i]["Roller Coaster Rides"])
      console.log(rides[i].rating)
      console.log(rides[i].lat+";"+rides[i].lng)
        // Add circles to map
    L.circle([rides[i].lat, rides[i].lng], {
      fillOpacity: 1- ((rides[i].Rank /rides.length)*.8),
      color: "white",
      fillColor: "purple",
      // Adjust radius
      radius: rides[i].rating*3
    }).bindPopup("<h3>" + rides[i]["Roller Coaster Rides"] + "</h3> <hr> <h5>Rank: " + rides[i].Rank +";   Rating:"+rides[i].rating +"</h5>")
    .addTo(map)
    .openPopup();
  
  }
  

