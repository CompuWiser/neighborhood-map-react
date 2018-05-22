# Neighborhood Map Tips
I was challenged to developer a Map app using **ReactJS**, so a took the minimum requirements for this project and I read and made some draws of the components in a piece of paper.

All I needed to do is to take a least 5 places in my neighborhood and show them on the map.

After I made a kind of prototype I start the [create-react-app](https://github.com/facebook/create-react-app) to build my initial structure/sources to my local project.

Before I start coding I read some articles about the best way to using **Google Maps API** with ReactJS, follow below:
- first I found this package [google-maps-react](https://www.npmjs.com/package/google-maps-react)
- I read this full article: [How to Write a Google Maps React Component](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/)
- and this another one [Implement Google Maps in ReactJs](https://getpocket.com/a/read/1918096586)
- and some StackOverflow :)

So, after this I got some skills to start my coding, I split my App in small parts or in React as we call  **Components**. 

Put a Nav with an input search to filter locations in a unique component called **NavSearch** and I putted the **Map** component and the **List** component of my favorite locations on a **MapContainer** component.

Into the Map component I put the **Marker** component and in the List component, I rendered the list of my favorites locations as soon as they are filtered in the **NavSearch** component.

Using my 5 favorites places like a constant I interated the Markers components using them, so in the Marker component, I instantiated a **google.maps.Marker** to put them on the map and populate the infoWindow with a 3rd part **Foursquare API** bringing tips and Likes to each place.

To finish my project, I collected this Markers Objects in an Array and took him to a List component to be iterate and filtered by the NavSearch input using the state attribute in the higher parent.

## Getting Started
To test this App in your machine, just follow the steps below:
- Clone this repo in your local ```git clone https://github.com/elfiservice/neighborhood-map-react```
- Now into your folder project in the terminal exec ```npm install``` to install all dependencies
- After install all dependencies just execute ```npm start``` on the terminal to launching the App in the browser.
### Offline First
- The service worker is only enabled in the production environment. It's recommended that you do not enable an offline-first service worker in a development environment.
- If you need to **test your offline-first** service worker locally, build the application (using `npm run build`) and run a simple http server from your build directory.
- More information [Here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#offline-first-considerations)


## Technology
- ReactJs
- HTML
- CSS
- Foursquare API
- Google Maps API