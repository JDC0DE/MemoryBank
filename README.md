COMP3130 MemoryBank App:

TargetOS: Android

Steps to run App:

1. Login Screen - User information which will allow you to login, specifically you only need the email and password to login:
   {
   id: "user1",
   name: "Joshua Devine",
   email: "jd@gmail.com",
   password: "1234"
   },

   {
   id: "user2",
   name: "Barry Barn",
   email: "bb@gmail.com",
   password: "2345"
   },

   {
   id: "user3",
   name: "Chiba",
   email: "cd@gmail.com",
   password: "9092"
   },

2. Register screen creates a new user with name, email, password however cannot login
3. Using the navigation to access other areas of app - the drawer navigation requires you to click on the hamburger menu to open it and click off the drawer view to close it
4. The memoriesScreen allows you to press the image to access the moreInfoScreen, swiping left on a image will allow you to delete the image however due to a bug which could not be solved in time deletes all images - if you pull down to refresh it will load the page with the imageList, pressing the plus icon will allow you to add a new image which can only be seen on the memoriesScreen if a refresh is done however can be seen on the moreInfoScreen as soon as its added, a filter tab which unfortunately could not be correctly implemneted in time
5. The logout button in the drawer navigation will take you to the welcomScreen
6. The moreInfoScreen uses Carousel-"react-native-snap-carousel" a third party API which is similar to a FlatList in rendering multiple images, but allows for a different layout which aligns closer to my design
