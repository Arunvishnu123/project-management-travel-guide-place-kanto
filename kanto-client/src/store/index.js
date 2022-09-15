import { createStore } from "vuex";
import citydetails from "../Database/KantoCityDescription.json"
import landmarks from "../Database/landmarks.json"
import badgesDetials from "../Database/JsonKantoBadgeDesc.json"
import routeDetails from "../Database/KantoRoutesDesc.json"

export default createStore({
  state: {

    //edit world kanto description
    editCaption1: null,
    editCaption2: null,
    editDescription: null,
    editBadge: null,

    //update city descrition
    editcitydescription: null,
    test: {
      cityName: null,
      citytag: null,
      cityDescription: null,
      badges: null
    },

    //add city data
    cityName: null,
    cityDescription: null,

    //get city data
    city: null,

    //add tourist destination data
    touristName: null,
    touristDescription: null,

    //get tourist destination data from the server
    touristDestinations: null,

    //add badge name
    badgeName: null,
    badgeDescription: null,

    //get badge information
    badgeDescriptions: null,

    //route details
    routeDetails:null

  },
  mutations: {
    //update world kanto description
    updateeditCaption1(state, editCaption1) {
      state.editCaption1 = editCaption1
    },
    updateeditCaption2(state, editCaption2) {
      state.editCaption2 = editCaption2
    },
    updateeditDescription(state, editDescription) {
      state.editDescription = editDescription
    },
    updateeditBadge(state, editBadge) {
      state.editBadge = editBadge
    },

    //update add city name and city description

    updateAddCityName(state, cityName) {
      state.cityName = cityName
    },
    updateCityDescription(state, cityDescription) {
      state.cityDescription = cityDescription
    },

    //update tourist name and tourist destination

    updateAddtouristName(state, touristName) {
      state.touristName = touristName
    },
    updatetouristDescription(state, touristDescription) {
      state.touristDescription = touristDescription
    },

    //update badge name and badge description
    updateBadgeName(state, badgeName) {
      state.badgeName = badgeName
    },
    updateBadgeDescription(state, badgeDescription) {
      state.badgeDescription = badgeDescription
    },


  },
  actions: {


    ///add new city to the database

    //get the city details form the database
    getCityData() {
      this.state.city = citydetails
    },



    ///get the new tourist destinations
    getTouristDestinationData() {

      this.state.touristDestinations = landmarks

    },


    //get the badge details from the branch
    getBadgeDetails() {

      this.state.badgeDescriptions = badgesDetials

    },
  //get the route details from the branch
  getRouteDetails() {

    this.state.routeDetails = routeDetails

  },

  },
  modules: {},
});
