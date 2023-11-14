Feature: Login to UPB Portal

  Scenario: Successful login
    Given I am on the login page
    When I enter username "tu_username" and password "tu_contraseña"
    And I click the login button
    Then I should be redirected to the dashboard
