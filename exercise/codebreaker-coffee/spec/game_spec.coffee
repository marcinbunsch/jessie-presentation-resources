Game = require("./../lib/codebreaker").Game

describe "Codebreaker", ->

  describe "Game", ->
    game = new Game()

    describe "#start", ->
      it "sends a welcome message"
      it "prompts for first guess"

    describe "#guess", ->
      describe "with a full match", ->
        it "sends a mark with 'Correct!'"

      describe "with no matches", ->
        it "sends a mark with ''"

      describe "with 1 number match", ->
        it "sends a mark with '-'"

      describe "with 1 exact match", ->
        it "sends a mark with '+'"

      describe "with 2 number matches", ->
        it "sends a mark with '--'"

      describe "with 1 number match and 1 exact match -in that order", ->
        it "sends a mark with '+-'"
