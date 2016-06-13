# Angular scrolled

Angular scrolled in an infinite scrolling directive which trigger a scope function when the user scroll to the end.

*Doesn't require jQuery.*

## Usage

Include in your HTML page

```html

<script src="angular-scrolled.min.js"></script>

```

Include it as app dependency

```javascript

angular.module('app', ['angular-scrolled'])

```

And use in your HTML template

```html

<div scrolled="more()">
    <div ng-repeat="item in items" class="item">
        {{item.name}}
    </div>
</div>

```

See the demo app for examples on how to use all options.

## Options

### scrolled-threshold (default: 0)

How far from the end of the scrolling area should the function be triggered. Can be changed dynamically.

### scrolled-enabled (default: true)

Should the function be triggered or not. Can be changed dynamically.

### scrolled-window (default: false)

Should the handler be attached to the window element. This is to allow the directive to be attached anywhere and still
listen to the window scroll event instead of the element it is attached to.

## Running the demo

To run the demo simply run ```npm start``` and visit [http://localhost:8000](http://localhost:8000)

## Running the tests

To run the tests have the demo up and running and then run the ```npm run protractor``` command.

## TODO

* Support horizontal scrolling
* More tests