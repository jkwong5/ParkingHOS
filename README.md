# ParkingHOS

A Codefellows 301n3 final project utilizing Postgres, Express, and Cloudinary.

Do you get annoyed with users who are inept with parking?  Need an outlet to shame those drivers passive aggressively?

## Problem Domain: 
I've seen too many people parking like assholes and want to shame then on a public forum.

## User Story: 
- I want to publish a bad parking job publicly. 
- I want to be able to query by collected data (make, model, state, license plate #) to see broad and narrow ranges of bad parking records.

## Overview:  We have developed a web app that allows user input and image upload and display or data

## Minimum Viable Product:
- Users can view other poorly parked drivers.
- Users can post records of poorly parked drivers.
- Users should be able to input License Plate Number, State, Make, and Model.
- Users can search for records by state and license plate numbers.

## Unrealized Stretch Goals:
- Leaderboard
- Google Maps API
- Search by Zip and Coordinates
- Catalog damage
- Shitty parking rating
- Gameficiation

## Dependencies
Postgres - Heroku database add-on for storing data.
Cloudinary - Heroku add-on for handling image upload, storage, and download.
Express - Middleware for handling routing of pages.

## Problems Encountered:
- Postgres posting
- Closing server connections
- Handling queries via URL strings
- Selecting Cloudinary Image Object
- Async firing of javascript functions
- Handling dependent dropdown filter
- Error handling on search




