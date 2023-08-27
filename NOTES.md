For this project I have used TypeScript and Express.js

Please find a sample architecture diagram in the files.

I am thinking of a microservice based architecture for the overall scenario

1. API Gateway: This is used to route the user to the respective microservices, we can implement the authorization of the user in this microservice
2. External Data Fetching Microservice: This microservice will be responsible to directly query the data from the external source and publish the data in the queue for the consumer to consume
3. Queue: We can use a queue [Kafka] to store the data we got from the external source for the consumer service to consume. We can have different "topics" in kafka to store the specific data
4. Consumer Service: Consumer service is responsible to consume the data from the queue and store it in the database
5. Database: It stores the data permanently for further processing and analytics
6. Cache: Since there is a huge amount of data in the database, we can use the cache to cache the important data and make it readly available for the user
7. Query Service: Query service will be responsible for querying the data and proving to the UI

Folder structure

controller: It checks for the API parameter validation
interfaces: Interfaces of data objects used in this project
router: APIs
services: contains the business logic
utils: This has the helper functions

APIs:

1.  Filter based on startDate & endDate
    I have implemented the filter API with startDate and endDate.
    API: http://localhost:3000/filter?startDate=2020-01-01T00:00:00Z&endDate=2020-09-01T00:00:00Z

2.  Filter based on Average
    I have also added the average to the filter if average value
    API: http://localhost:3000/filter?startDate=2020-01-01T00:00:00Z&endDate=2020-09-01T00:00:00Z&average=0.0002

3.  I have also implemented the calculation of the mean average based on the filtered data

    I have also added the postman collection

Improvements:

Due to the lack of time, I haven't done the full implementation of this project.

Below are the steps, I want to add to the project.

1. Authentication: I want to secure my APIs using JWT tokens
2. Parameter validation: I want to validate the API parameter using the [joi,zod] to validate the inputs provided to the API
3. Unit Testing: Currently I have implemented unit testing for only one function, I need to do it for ther functions as well.
4. APIs: APIs to create / update and delete data

Task 3:
output will be the error message 'BOOOM'

Due to time constraints I have used ChatGPT to improve my results
