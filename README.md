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
In the root of the project folder there is a file called <i>data.json</i>
