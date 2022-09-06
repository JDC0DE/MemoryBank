export default class DataManager {
    //Class responsible for manipulating user/image data
    static myInstance = null;
    userID = "";
    images = [
        //User1
        {
            userid: "user1",
            imageid: 1,
            tag: "Sea Castle",
            date: "Aug 15, 2019, 4:43 am",
            location: "Mont Saint-Michel, France",
            image:require("../assets/pexels-riccardo-bertolo-4245826.jpg"),
            category:"Travel",

        },

        {
            userid: "user1",
            imageid: 2,
            tag: "Single Rose",
            date: "July 02, 2016 8:40 pm",
            location: "London, England",
            image:require("../assets/pexels-kristina-paukshtite-704752.jpg"),
            category:"Romance",

        },

        {
            userid: "user1",
            imageid: 3,
            tag: "Proper Italian Pizza",
            date: "Jan 19, 2017 5:58 pm",
            location: "Milan, Italy",
            image:require("../assets/pexels-pixabay-315755.jpg"),
            category:"Food",

        },
        //User2
        {
            userid: "user2",
            imageid: 4,
            tag: "Lonely Forest",
            date: "Nov 12, 2016, 12:15 pm",
            location: "Snowy Forest, Belgium",
            image:require("../assets/pexels-pixabay-235621.jpg"),
            category:"Travel",

        },

        {
            userid: "user2",
            imageid: 5,
            tag: "Bunch of Roses",
            date: "Dec 16, 2015, 12:43 pm",
            location: "Paris, France",
            image:require("../assets/pexels-picjumbocom-196664.jpg"),
            category:"Romance",

        },

        {
            userid: "user2",
            imageid: 6,
            tag: "Smash Avo",
            date: "Nov 16, 2017 12:47 pm",
            location: "Byron Bay, Australia",
            image:require("../assets/pexels-daria-shevtsova-704569.jpg"),
            category:"Food",

        },
        //User 3
        {
            userid: "user3",
            imageid: 7,
            tag: "Up, Up and Away",
            date: "Aug 07, 2010, 5:08 am",
            location: "Cappadocia, Turkey",
            image:require("../assets/pexels-francesco-ungaro-2325446.jpg"),
            category:"Travel",

        },

        {
            userid: "user3",
            imageid: 8,
            tag: "Love is in the Air",
            date: "Aug 26, 2016, 7:33 am",
            location: "Rio de Janeiro, Brazil",
            image:require("../assets/pexels-luizclas-556662.jpg"),
            category:"Romance",

        },

        {
            userid: "user3",
            imageid: 9,
            tag: "Pasta for One",
            date: "July 29, 2018 12:48 pm",
            location: "Rome, Italy",
            image:require("../assets/pexels-lisa-fotios-1279330.jpg"),
            category:"Food",

        },
    ]

    static getInstance(){
        if(DataManager.myInstance ==null){
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    static setInstanceNull(){
        if(DataManager.myInstance !=null){
            DataManager.myInstance = null;
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID =id;
    }

    getImages(id){
        return this.images.filter((image) => image.userid === id);
    }

    addImage(image){
        this.images.push(image);
    }
}