Feature: Login

  As a user
  I want to log into the application
  So that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When I enter a valid username and password
    And I click the login button
    Then I should be logged in successfully