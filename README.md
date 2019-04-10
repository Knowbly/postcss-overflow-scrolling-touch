# PostCSS Overflow Scrolling Touch

[PostCSS] plugin

Put native-feeling elastic/inertia scrolling whenever we have an element with overflow: scroll (or overflow-x / overflow-y).

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  overflow-x: hidden;
  overflow-y: auto;
}
```

```css
.foo {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
```

## Usage

```js
postcss([ require('@knowbly/postcss-overflow-scrolling-touch') ])
```

See [PostCSS] docs for examples for your environment.
