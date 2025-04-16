# Express- using POSTMAN

Kidney Health API
A simple API built using Express.js to manage kidney health data.

Table of Contents-

Introduction

Feature

Endpoints

Usage

Testing

Contributing

Introduction-
This API allows users to manage kidney health data, including adding, updating, and deleting kidneys. It uses Express.js as the web framework and can be tested using Postman.

Features-
Add new kidneys
Update existing kidneys
Delete kidneys
Get kidney health statistics
Endpoints

GET /
Returns the number of kidneys, healthy kidneys, and unhealthy kidneys

POST /
Adds a new kidney to the user's kidney list
Request Body:
isH: boolean indicating whether the kidney is healthy

PUT /
Updates all existing kidneys to be healthy

DELETE /
Deletes all existing kidneys
Returns a 411 status code if there are no unhealthy kidneys
