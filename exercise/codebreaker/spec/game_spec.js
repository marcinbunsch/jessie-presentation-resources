var Game = require('./../lib/codebreaker').Game

describe('Codebreaker', function() {

  describe('Game', function() {

    var game = new Game()

    describe('#start', function() {

      it("sends a welcome message")

      it("prompts for first guess")

    })

    describe('#guess', function() {

      describe("with a full match", function() {

        it("sends a mark with 'Correct!'")

      })

      describe("with no matches", function() {

        it("sends a mark with ''")

      })

      describe("with 1 number match", function() {

        it("sends a mark with '-'")

      })

      describe("with 1 exact match", function() {

        it("sends a mark with '+'")

      })

      describe("with 2 number matches", function() {

        it("sends a mark with '--'")

      })

      describe("with 1 number match and 1 exact match -in that order", function() {

        it("sends a mark with '+-'")

      })

    })

  })

})
