# Fetch-Excercise

## Run Project Locally

### Clone the repo from command prompt and cd into working folder

```
git clone https://github.com/EvanKiser/Fetch-Excercise
cd Fetch
```

### Install dependencies and run in development

```
npm install
npm run dev
```
## API Endpoints
### Transaction Controller
- GET /transactions/ - Get all transactions listed in the data.json file
- POST /transactions/ - Insert a single transaction
- DELETE /transactions/ - Deletes all transactions. Clears the data.json file
- POST /transactions/bulk - Insert a list of transactions

### Points Controller
- GET - /points/ - Returns the amount of points a user has by payer
- PATCH - /points/spend - Spend points

## API Workflow
In the root of the project folder there is a file called <i>data.json</i>
