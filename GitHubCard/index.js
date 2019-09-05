/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const entry = document.querySelector('.cards')

axios.get('https://api.github.com/users/primelos')
  .then(response =>{
    console.log('fingers crossed', response.data)
    
    const fellow = newFollowers(response.data)
    entry.appendChild(fellow)
    })
 
  .catch(error =>{
    console.log('I am lost, check back later', error)
  })
  

  const followersArray = [];

function newFollowers(data) {

  const card = document.createElement('div');
  const image = document.createElement('img');
  const cInfo = document.createElement('div')
  const name = document.createElement('h3');
  const logName = document.createElement('p');
  const loc = document.createElement('p');
  const  prof = document.createElement('p');
  const address = document.createElement('a');
  const uFollow = document.createElement('p');
  const iFollow = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card')
  cInfo.classList.add('card-info')
  name.classList.add('name')
  logName.classList.add('username')

  card.appendChild(image)
  card.appendChild(cInfo)
 

  cInfo.appendChild(name)
  cInfo.appendChild(logName)
  cInfo.appendChild(loc)
  cInfo.appendChild(prof)
  cInfo.appendChild(address)
  cInfo.appendChild(uFollow)
  cInfo.appendChild(iFollow)
  cInfo.appendChild(bio)

  image.src = `${data.avatar_url}`;
  name.textContent = `${data.name}`;
  logName.textContent = `${data.login}`;
  loc.textContent = ` ${data.location}`;
  prof.textContent = `Profile: `;
  address.href = `${data.html_url}`;
  address.textContent= `${data.html_url}`
  uFollow.textContent = `Following: ${data.followers}`;
  iFollow.textContent = `Followers:${data.following}`
  bio.textContent = `${data.bio}`


return card

};

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/