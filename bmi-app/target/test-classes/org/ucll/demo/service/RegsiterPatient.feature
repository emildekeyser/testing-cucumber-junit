Feature: Add a patient
  In order to monitor a person
  As a caretaker
  I can register a new patient
  Scenario Outline: I can register the social security number, birthdate and gender
    Given A social security number <number>, birthdate <date> and gender <gender>
    When I register the patient
    Then no errors are given
    Examples:
      |number     |date        |gender    |
      |93051822361|"1993-05-10"|"male"    |
      |93051822362|"1994-04-11"|"female"  |
      |93051822363|"1995-03-09"|"male"    |
      |93051822364|"1996-02-12"|"female"  |
      |93051822365|"1997-01-20"|"male"    |
  Scenario Outline: I can register the length, weight and date of the first examination
    Given: A patient who is registered without a first examination
    And a length <length>, weight <weight> and date <date>
    When i register the examination
    Then no errors are given
    Examples:
      |length|date        |weight |
      |180   |"2000-05-10"|60000    |
      |173   |"2001-04-11"|70000    |
      |179   |"2002-03-09"|80000  |
      |205   |"2003-02-12"|90000    |
      |160   |"2004-01-20"|100000 |
  Scenario: An error message is given if not all fields are provided
    Given: A length of 180 and an examination date on "2002-05-11"
    When i register the examination
    Then an error is thrown
  Scenario Outline: An error message is given if invalid data is provided
    Given A social security number <number>, birthdate <birthdate> and gender <gender>
    And a length <length>, weight <weight> and date <date>
    When i register the patient and first examination
    Then an error gets thrown
    Examples:
      |number     |birthdate   |gender    |length|weight|date        |
      |93051822361|"1993-05-10"|"male"    |400   |80000 |"2010-06-10"|
      |93051822362|"1994-04-11"|"female"  |150   |800000|"2011-04-22"|
      |93051822363|"1995-03-09"|"male"    |160   |75000 |"2020-07-15"|
      |93051822364|"2080-02-12"|"female"  |160   |80000 |"2005-06-10"|

