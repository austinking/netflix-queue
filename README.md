# Netflix Queue CLI Code Kata

## Code Kata

Create a command-line interface (CLI) style application which is similar
to the netflix queue.

You will be able to:
* Add a movie to a user
* Move a movie to the top of a user's queue
* Remove a movie from a user's queue
* List all the movies for a user with each movie's priority

To get started, don't worry about rich data for the user or the movies.

## Development

This repo provides `netflix.js`, `test/netflix-test.js`, `lib/storage.js`, and various tooling.

`storage.js` is your persistance layer between runs of the CLI.

To run the CLI

    $ ./netflix.js add 'jane doe' 'frozen'
    $ ./netflix.js add 'jane doe' 'toy story'
    $ ./netflix.js show 'jane doe'
    1) frozen
    2) toy story
    $ ./netflix.js add 'jane doe' 'monsters inc'
    $ ./netflix.js top 'jane doe' 'monsters inc'
    $ ./netflix.js show 'jane doe'
    1) monsters inc
    1) frozen
    2) toy story
    $ ./netflix.js remove 'jane doe' 'frozen'
    $ ./netflix.js show 'jane doe'
    1) monsters inc
    2) toy story

To run tests

    $ npm test

To automatically run tests after each code change

    $ npm run-script watch
