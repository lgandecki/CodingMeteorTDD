Feature: One-liner description of this feature

  As a [role]
  I want [feature]
  So that [benefit]

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  Scenario:
    Given I am a new user
    When I navigate to "/"
    Then I should see the title "TestDriven History.TheBrain.Pro"

Feature: Showing Crash Course intro video

    Scenario:
      Given I am a new user
      When I navigate to "/"
      Then I should see first Crash Course youtube video

Feature: Showing helpers to start studying
      Scenario:
        Given I am a new user
        When I navigate to "/"
        Then I should not see button "Start memorizing"

#      Scenario:
#        Given I am a new user
#        When I navigate to "/"
#        And Video finished
#        Then I should see button "Start memorizing"

Feature: Going to add Flashcard page
        Scenario:
          Given I am a new user
          And I am authenticated as admin
          And I click on "Add Flashcards" menu
          Then I should see button "Add Flashcard"
          And I should see a list of flashcards