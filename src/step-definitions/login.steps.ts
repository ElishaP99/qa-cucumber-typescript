import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the login page', function () {
  console.log('Opening the login page');
});

When('I enter a valid username and password', function () {
  console.log('Entering valid login details');
});

When('I click the login button', function () {
  console.log('Clicking the login button');
});

Then('I should be logged in successfully', function () {
  console.log('Checking that the user is logged in');
});