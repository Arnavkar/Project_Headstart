# Project_Headstart - GreenBean

GreenBean is our first attempt at mobile barcode scanning application that will aims to provide users with information about how sustainable and eco-friendly their daily purchases are - everything from varying food items to household cleaning agents and personal care products. Users can also send requests to our database if certain items have yet to be added, or if they feel certain information should be changed. Verified users who are active in the field of sustainability can add information directly to the database!

![HomepageMock]
(/mockups/1.png)

GreenBean was built using Quasar and VueJS with the temporary implementation of the google sheets API as our backend (New-coder friendly!). We deployed using netlify for our showcase. The scanning technology used was built from Scandit - we successfully applied and were granted their community SDK for startups. Here are some mockups:

![pg1]
(/mockups/2.png)

![pg2]
(/mockups/3.png)

![pg3]
(/mockups/4.png)

![pg4]
(/mockups/5.png)

This project was done over 3 months with Praxium, Singapore. We are now continuing of our own accord!

## Next Steps: 
- Migrating our database from google sheets to firebase (authentication, easy data management, MLkit) 
- Since our App is built as hybrid native, work towards dropping in cordova into our application to build the native box around our html, css and js code. 
- Growing our database: reaching our to local grocery suppliers + searching for open product databases to source information with respect to product manufacturing/ingredients

## Future Features: 
- Recommendation feature for individual users (based on scanned item info as well as a pre-defined budget set by the user)
- Call to action -> setting up an email proxy with multiple templates so that users can send call-to-actions to various conglomerates to release information about their manufacturing processes 
- Gamification -> Creating a gamification interface so that Users can build their own virtual garden as they scan items and redeem points
- Cashback -> Scanning items will accrue points which will be added to a users account upon purchase verification. These can be used to redeem cashback for future users as an incentive
- Community builiding -> allowing users to leave their own reviews on certains items and allow them to share that with friends and family 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
