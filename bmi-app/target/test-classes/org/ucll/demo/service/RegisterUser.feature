Feature: As a user I can register so I can buy products

  Scenario: From the home page I can go to the sign up form page
    Given I am on the home page with title "Home"
    And there is a button with id "signUp"
    When the button is clicked
    Then I go to the person form with title "Sign Up"

  Scenario Outline: I can fill in my information
    Given I enter correct values for <userid>, <firstname>, <lastname>, <email>, and <password>
    When I submit the form
    Then The home page with title "Home" is shown
    Examples:
      | userid      | firstname | lastname         | email     | password|
      | 1sdjfnskjgh | sdhfkjsg  | sdjdg@kjghsdh.be | djslkgjsg |sdjfkdhgkjsgj|
      | 2sdjfnskjgh | slhfkjsg  | sdjlg@kjghsdh.be | djslkgjsg |sdjfkdhgkjsgj|
      | 3sdjfnskjgh | sdhlkjsg  | sdjdg@kjghsdh.be | djslkgjsg |sdjfkdhgkjsgj|
      | 4sdjfnskjgh | sdhlkjsg  | sljdg@kjghsdh.be | djslkgjsg |sdjfkdhgkjsgj|
      | 5sdjfnskjgh | ldhfkjsg  | sdjdg@kjghsdh.be | djslkgjsg |sdjfkdhgkjsgj|
      | 6sdjfnskjgh | sdhfklsg  | sljdg@kjghsdh.be | djslkgjsg |sdjfkdhgkjsgj|

  Scenario Outline: When i leave fields blank I get an error
    Given I leave any of <userid>, <firstname>, <lastname>, <email>, and <password> blank.
    When I submit the form
    Then the following error is shown: "Missing fields"
    Examples:
      | userid      | firstname | lastname         | email     | password
      | 1sdjfnskjgh | sdhfkjsg  | sdjdg@kjghsdh.be |           |sjfkdhkjsgj|
      | 2sdjfnskjgh | slhfkjsg  | sdjlg@kjghsdh.be |           |sjfkdhkjsgj|
      |             | sdhlkjsg  | sdjdg@kjghsdh.be |           |sjfkdhkjsgj|
      |             | sdhlkjsg  | sljdg@kjghsdh.be | djslkgjsg |sjfkdhkjsgj|
      | 5sdjfnskjgh |           | sdjdg@kjghsdh.be | djslkgjsg |sjfkdhkjsgj|
      | 6sdjfnskjgh |           | sljdg@kjghsdh.be | djslkgjsg |sjfkdhkjsgj|
