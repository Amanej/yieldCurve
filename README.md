## YieldCurve App

A simple application to view the yield curve for US Treasury bonds.

### To Dos 

### Setup
* Set up a backend
Create backend that properly fetches, and stores treasury as I want them
* * Data directory - created
* * Database name - yieldCurve
* * Switch to strapi instead
* Set up a frontend webpack project
Create a good structure for the webpack project, with an understandable folder structure

### Data
* CronJob to fetch rates
* * Set up function that atleast stores/updates 2017 every day
* Routes to fetch rates
* * Appropriate routes for rates with queries and filters
* Create a calculated yield
* * (3 month - 30 year)
* * (1 month - 10 year)
* Add norwegian bank rates - 'https://data.norges-bank.no/api/data/IR/B.TBIL.3M.R'

### Chart
* Label lines clearly
* Show data point by hovering
* Choose date to display

### Frontend
* Create better explanation of site
* Create an alert function