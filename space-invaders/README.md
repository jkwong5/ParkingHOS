## Space Invaders: A platform to shame those who park poorly ##
(also known as Parking-Hall-of-Shame due to copyright concerns)

### Desktop View

![image of main UI](https://i.imgur.com/lVDEJHV.png)

### Mobile View
![image of main UI](https://i.imgur.com/0MkLkss.png)

### Current User capabilities (as of August 24, 2017):
 - Submit a space invader with picture evidence
 - look through the library of space invaders
 - Add shame to any individual space invader
 - search and filter for specific invaders
 - Register and login as a user with basic authentication

### *Coming soon* ###
- Oauth2 user authentication

### *Coming eventually* ###
- Google Maps API integration to determine space invader hotspots

---

# Documentation

## Models

- #### User Model
  -   Username (unique)
  -   Password
  -   Email (unique)
  -   Posts (array of unique IDs)


- #### Driver Model
  - Unique ID
  - Plate and State (unique, i.e. ABC123Colorado)
  - Poor Parking jobs (Array of unique IDs- one to many connection to Invader model)


- #### Invader Model
  - Unique ID
  - Date reported
  - Image URL
  - License plate
  - License State
  - Make (refers to cars model)
  - Model (refers to cars model)
  - Shame

- #### Car Model
  - Make
  - Model (array)
