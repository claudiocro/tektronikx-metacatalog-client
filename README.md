# Tektroniks Metacatalog Client [![Build Status](https://travis-ci.org/claudiocro/tektronix-metacatalog-client.svg?branch=develop)](https://travis-ci.org/claudiocro/tektronix-metacatalog-client)

Tektronix Metacatalog Client

For more infos checkout out: https://github.com/claudiocro/tektronix-metacatalog-sane


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/claudiocro/tektronix-metacatalog-client.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

Make shure your local server is running
* `ember serve --proxy http://127.0.0.1:1337`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* `ember deploy:activate --revision tektronix-metacatalog-client:<revision> --environment=production` (production)

### Release

This app follows the `semantc-release`
* `commit` to master branch

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* [semantic-release](https://github.com/semantic-release/semantic-release/)
