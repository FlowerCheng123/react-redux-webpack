/**
 * Created by Flower on 07/03/2016.
 */
export default{
	APP_KEY : 'hfx6FZQcDCle4S45AINCs4yKpYDfUeAZIVKE1Jj+4g=',
	APP_SECRET : '45SGEcJUR+Readdh45ESss7IUM9nNir4ae1IDHhR5o=',
	HOST : 'http://120.55.113.220:4444',
	api:{
		trips: { url: '/trips', method: 'GET' },
		trip: { url: '/trip', method: 'GET' },
		addTrip: { url: '/trip', method: 'POST'},
		updateTrip: { url: '/trip', method: 'PUT'},
		deleteTrip: { url: '/trip', method: 'DELETE'},
		tags: {url: '/tags', method: 'GET'},
		searchTrip: { url: '/this api is not exist ', method: 'POST'}
	}
}