# 1.7.0 (2015-12-30)

Expose the `slide` event through the `onSlide` prop.

# 1.6.0 (2015-11-19)

Stop heavy cloning of options since we are now recreating the slider on props update.

This also solves a bad thing: webpack was inserting the whole nodejs Buffer polyfill for the clone option inserted in nouislider.

# 1.5.2 (2015-11-06)

Change the way we update the options, we cannot update pips using the sole updateOption API sadly.
So we create/destroy everytime for now.

# 1.5.1 (2015-11-02)

Add pips support

# 1.5.0 (2015-10-26)

# 1.4.3 (2015-10-09)

# 1.4.2 (2015-10-09)

# 1.4.1 (2015-10-09)

# 1.4.0 (2015-10-09)

  * avoid mutating option objects by upgrading nouislider

# 1.3.0 (2015-10-09)

  * update react to 0.14.0

# 1.2.1 (2015-09-25)

  * update algolia/noUiSlider, fixes tap/click event on handles

# 1.2.0 (2015-09-15)

  * use JSX
  * add cssPrefix proptype

# 1.1.0 (2015-09-15)

  * add the package to npm, the right way

# 1.0.1 (2015-09-12)

  * do not use JSX inside the reusable components, only React.DOM

# 1.0.0 (2015-09-12)

  * initial

