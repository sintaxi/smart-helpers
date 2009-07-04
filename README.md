# Smart Helpers

an extension for the [smart platform](http://smart.joyent.com/) that gives you the ability to render your templates with layouts and partials, datetime helpers, and form helpers.

## Install

add smart-layouts as a git submodule in the js directory of your your smart project:

    git submodule add git://github.com/sintaxi/smart-helpers.git js/smart-helpers
    
Or if you would like to contribute back to smart-helpers, fork the project and then install the submodule with your remote repo location:

    git submodule add git@github.com:<username>/smart-helpers.git js/smart-helpers
    
## Usage

in your `bootstrap.js` file tell your smart application to use smart-helpers:
    
    system.use("smart-helpers.init")
    
or only require the helpers you want to use:
    
    system.use("smart-helpers.lib.layouts")
    system.use("smart-helpers.lib.datetime")
    system.use("smart-helpers.lib.forms")


### Layouts

smart-layouts defaults to `layouts/application.html`. This file may look something like this (catch_content is where your template will be rendered):

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">
        <title>My Application</title>
        <link rel="stylesheet" href="/master.css" type="text/css" media="screen" charset="utf-8">
      </head>
      <body>
        <div id="wrap">
          <h1 class="domain"><a href="/">My Application</a></h1>
          <div id="box">
            [% catch_content %]
          </div>
        </div>
      </body>
    </html>
    
in your Sammy application, replace your instances of `template("foobar.html");` with:
  
    render(this, "foobar.html");
    
or if you would like to explicitly specify a layout to use:
    
    render(this, "foobar.html", { layout:"tasks.html" })
    
### Forms

### Datetime


The MIT License
----------------------------------------------------------------------------
Copyright (c) 2009, Brock Whitten, Rob Ellis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

    
