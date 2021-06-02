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

|REQUEST   |ROUTE   |Body   |Return   |
|---|---|---|---|
|GET|/transactions/|None|[</br>&nbsp;&nbsp;&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"payer": "DANNON",</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"points": 300,</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timestamp": "2020-10-31T10:00:00Z"</br>&nbsp;&nbsp;&nbsp;}</br>]|
|POST|/transactions/|{</br>&nbsp;&nbsp;&nbsp;"payer": "DANNON",</br>&nbsp;&nbsp;&nbsp;"points": 300,</br>&nbsp;&nbsp;&nbsp;"timestamp": "2020-10-31T10:00:00Z"</br>}|{</br>&nbsp;&nbsp;&nbsp;"message": "The transaction has been created",</br>&nbsp;&nbsp;&nbsp;"content": {</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"payer": "DANNON",</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"points": 300,</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"timestamp":"2020-10-31T10:00:00Z"</br>&nbsp;&nbsp;&nbsp;}</br>}|
|DELETE|/transactions/|None|{</br>&nbsp;&nbsp;&nbsp;&nbsp;"message": "All transactions deleted"</br>}|
|POST|/transactions/bulk|[</br>{</br>&nbsp;&nbsp;&nbsp;"payer": "DANNON",</br>&nbsp;&nbsp;&nbsp;"points": 300,</br>&nbsp;&nbsp;&nbsp;"timestamp": "2020-10-31T10:00:00Z"</br>}</br>{</br>&nbsp;&nbsp;&nbsp;"payer": "UNILEVER",</br>&nbsp;&nbsp;&nbsp;"points": 10000,</br>&nbsp;&nbsp;&nbsp;"timestamp": "2020-10-31T10:00:00Z"</br>}</br>]|{</br>&nbsp;&nbsp;&nbsp;&nbsp;"message": "All transactions have been created"</br>}|
|GET|/points/|None|{</br>&nbsp;&nbsp;&nbsp;"DANNON": 300,</br>&nbsp;&nbsp;&nbsp;"UNILEVER": 0,</br>&nbsp;&nbsp;&nbsp;"MILLER COORS": 10000</br>}|
|PATCH|/points/spend|{</br>&nbsp;&nbsp;&nbsp;"points": 5000</br>}|{</br>&nbsp;&nbsp;&nbsp;"DANNON": -100,</br>&nbsp;&nbsp;&nbsp;"UNILEVER": -200,</br>&nbsp;&nbsp;&nbsp;"MILLER COORS": -4700</br>}

## API Workflow
In the root of the project folder there is a file called <i>data.json</i>. Transactions can be written to the data file using either POST calls (single insert or bulk insert) in the transaction controller. The data file can be cleared using the DELETE endpoint in the transaction controller. The GET endpoint in the post controller returns the amount of points for each unique payer. The PATCH endpoint in the points controller spends a user's points in chronological order they were recieved by timestamp.

## Design Decisions
- Data.json - I choose to have a data file instead of storing the transactions in memory in order to both have some level of persistent storage between runs as well as allow for multiple test cases in a single run by clearing the file.
- Transactions Bulk Load - Simplifies inputting test cases 
- Spending Points - When points for a specific transaction have been spent the transaction stays in the data.json file but the amount of points left for that transaction is now zero.
- Timestamps - Timestamps are inputted as strings.