# JavaScript 代码规范

## Idiomatic Style Manifesto

### 空白及缩进
- 空白永远用space
- 用`两个空格`的缩进！

### 单引号
- 在js中永远用单引号`'`


### 禁止！
- comment禁止写end of xxx
- 禁止逗号先行

### if / while / for
```javascript

  if (condition && ddfd) {
    // statements
  }
  if (condition &&
      very_long_condition ||
      another
  ) {
    // statements
  }

  while (condition) {
    // statements
  }

  var
    i,
    length = 100;

  for (i = 0; i < length; i++) {
    // statements
  }

  var prop;

  for (prop in object) {
    // statements
  }

  if (true) {
    // statements
  } else {
    // statements
  }

```

### 赋值，声明
```javascript

  // Variables
  var
    foo = 'bar',
    num = 1,
    undef;

  // Literal notations:
  var
    n = 100,
    array = ['a', 'b', 'c'],
    object = {};

  //很长怎么办
  var array = [
    {
      id: 1,
      name: 'Jack Bower'
    },
    {
      id: 2,
      name: 'Lorence'
    }
  ];
  var object = {
    prop1: 1,
    prop2: 'test',
    func: function (res) {
      //todo
    }
  };
```
### function
```javascript

  // Named Function Declaration
  function foo(arg1, argN) {

  }

  // Usage
  foo(arg1, argN);


  // Really contrived continuation passing style
  function square(number, callback) {
    callback(number * number);
  }

  square(10, function (square) {
    // callback statements
  });


  // Function Expression
  var square = function (number) {
    // Return something valuable and relevant
    return number * number;
  };

  // Function Expression with Identifier
  // This preferred form has the added value of being
  // able to call itself and have an identity in stack traces:
  var factorial = function factorial(number) {
    if (number < 2) {
      return 1;
    }

    return number * factorial(number - 1);
  };

```

### Exceptions, Slight Deviations
```javascript

    // Functions with callbacks
    foo(function () {

    });

    // Function accepting an array, no space
    foo(['alpha', 'beta']);

    // Function accepting an object, no space
    foo({
      a: 'alpha',
      b: 'beta'
    });

    // Single argument string literal, no space
    foo('bar');

    // Inner grouping parens, no space
    if (!('foo' in obj)) {

    }

```





### Type Checking 类型检查
  String:

      typeof variable === 'string'

  Number:

      typeof variable === 'number'

  Boolean:

      typeof variable === 'boolean'

  Object:

      typeof variable === 'object'

  Array:

      Array.isArray( arrayLikeObject )
      (wherever possible)

  Node:

      elem.nodeType === 1

  null:

      variable === null

  null or undefined:

      variable == null

  undefined:

    Global Variables:

      typeof variable === 'undefined'

    Local Variables:

      variable === undefined

    Properties:

      object.prop === undefined
      object.hasOwnProperty( prop )
      'prop' in object

### 转换
```javascript

  var number = 1,
    string = '1',
    bool = false;

  number;
  // 1

  number + '';
  // '1'

  string;
  // '1'

  +string;
  // 1

  +string++;
  // 1

  string;
  // 2

  bool;
  // false

  +bool;
  // 0

  bool + '';
  // 'false'

```


```javascript

  var
    number = 1,
    string = '1',
    bool = true;

  string === number;
  // false

  string === number + '';
  // true

  +string === number;
  // true

  bool === number;
  // false

  +bool === number;
  // true

  bool === string;
  // false

  bool === !!string;
  // true

```

```javascript

  var array = [ 'a', 'b', 'c' ];

  !!~array.indexOf('a');
  // true

  !!~array.indexOf("b");
  // true

  !!~array.indexOf("c");
  // true

  !!~array.indexOf("d");
  // false

  // Note that the above should be considered "unnecessarily clever"
  // Prefer the obvious approach of comparing the returned value of
  // indexOf, like:

  if ( array.indexOf( "a" ) >= 0 ) {
    // ...
  }

```

```javascript

  var num = 2.5;

  parseInt( num, 10 );

  // is the same as...

  ~~num;

  num >> 0;

  num >>> 0;

  // All result in 2


  // Keep in mind however, that negative numbers will be treated differently...

  var neg = -2.5;

  parseInt( neg, 10 );

  // is the same as...

  ~~neg;

  neg >> 0;

  // All result in -2
  // However...

  neg >>> 0;

  // Will result in 4294967294

```



### Conditional Evaluation 条件求值

```javascript

  // When only evaluating that an array has length,
  // instead of this:
  if ( array.length > 0 ) ...

  // ...evaluate truthiness, like this:
  if ( array.length ) ...


  // When only evaluating that an array is empty,
  // instead of this:
  if ( array.length === 0 ) ...

  // ...evaluate truthiness, like this:
  if ( !array.length ) ...


  // When only evaluating that a string is not empty,
  // instead of this:
  if ( string !== '' ) ...

  // ...evaluate truthiness, like this:
  if ( string ) ...


  // When only evaluating that a string _is_ empty,
  // instead of this:
  if ( string === "" ) ...

  // ...evaluate falsy-ness, like this:
  if ( !string ) ...


  // When only evaluating that a reference is true,
  // instead of this:
  if ( foo === true ) ...

  // ...evaluate like you mean it, take advantage of built in capabilities:
  if ( foo ) ...


  // 4.1.6
  // When evaluating that a reference is false,
  // instead of this:
  if ( foo === false ) ...

  // ...use negation to coerce a true evaluation
  if ( !foo ) ...

  // ...Be careful, this will also match: 0, "", null, undefined, NaN
  // If you _MUST_ test for a boolean false, then use
  if ( foo === false ) ...


  // 4.1.7
  // When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
  // instead of this:
  if ( foo === null || foo === undefined ) ...

  // ...take advantage of == type coercion, like this:
  if ( foo == null ) ...

  // Remember, using == will match a `null` to BOTH `null` and `undefined`
  // but not `false`, "" or 0
  null == undefined

```

ALWAYS evaluate for the best, most accurate result - the above is a guideline, not a dogma.

```javascript

  // 4.2.2
  // Booleans, Truthies & Falsies

  // Booleans:
  true, false

  // Truthy:
  'foo', 1

  // Falsy:
  '', 0, null, undefined, NaN, void 0

```


###Practical Style

```javascript
  (function (global) {
    var Module = (function () {

      var data = 'secret';

      return {
        // This is some boolean property
        bool: true,
        // Some string value
        string: 'a string',
        // An array property
        array: [ 1, 2, 3, 4 ],
        // An object property
        object: {
          lang: 'en-Us'
        },
        getData: function () {
          // get the current value of `data`
          return data;
        },
        setData: function (value) {
          // set the value of `data` and return it
          return (data = value);
        }
      };
    })();

    // Other things might happen here

    // expose our module to the global object
    global.Module = Module;

  })(this);

```

```javascript

  // 5.2.1
  // A Practical Constructor

  (function ( global ) {

    function Ctor(foo) {

      this.foo = foo;

      return this;
    }

    Ctor.prototype.getFoo = function () {
      return this.foo;
    };

    Ctor.prototype.setFoo = function (val) {
      return (this.foo = val);
    };


    // To call constructor's without `new`, you might do this:
    var ctor = function ( foo ) {
      return new Ctor( foo );
    };


    // expose our constructor to the global object
    global.ctor = ctor;

  })( this );

```



### Naming
```javascript

  // 6.A.1.1
  // Example of code with poor names

  function q(s) {
    return document.querySelectorAll(s);
  }
  var i,a=[],els=q("#foo");
  for(i=0;i<els.length;i++){a.push(els[i]);}
  ```

  Without a doubt, you've written code like this - hopefully that ends today.

  Here's the same piece of logic, but with kinder, more thoughtful naming (and a readable structure):

  ```javascript

  // 6.A.2.1
  // Example of code with improved names

  function query(selector) {
    return document.querySelectorAll(selector);
  }

  var idx = 0,
    elements = [],
    matches = query("#foo"),
    length = matches.length;

  for (; idx < length; idx++) {
    elements.push(matches[idx]);
  }

```

A few additional naming pointers:

```javascript

  // 6.A.3.1
  // Naming strings

  `dog` is a string


  // 6.A.3.2
  // Naming arrays

  `dogs` is an array of `dog` strings


  // 6.A.3.3
  // Naming functions, objects, instances, etc

  camelCase; function and var declarations


  // 6.A.3.4
  // Naming constructors, prototypes, etc.

  PascalCase; constructor function


  // 6.A.3.5
  // Naming regular expressions

  rDesc = //;


  // 6.A.3.6
  // From the Google Closure Library Style Guide

  functionNamesLikeThis;
  variableNamesLikeThis;
  ConstructorNamesLikeThis;
  EnumNamesLikeThis;
  methodNamesLikeThis;
  SYMBOLIC_CONSTANTS_LIKE_THIS;

```

### MISC 杂碎

  This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

  A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch statements

  There seems to be drastic improvements to the execution of `switch` statements in latest releases of Firefox and Chrome.
  http://jsperf.com/switch-vs-object-literal-vs-module

  Notable improvements can be witnessed here as well:
  https://github.com/rwldrn/idiomatic.js/issues/13

  ```javascript

    // 7.A.1.1
    // An example switch statement

    switch(foo) {
      case 'alpha':
        alpha();
        break;
      case 'beta':
        beta();
        break;
      default:
        // something to default to
        break;
    }

    // 7.A.1.2
    // A alternate approach that supports composability and reusability is to
    // use an object to store 'cases' and a function to delegate:

    var cases, delegator;

    // Example returns for illustration only.
    cases = {
      alpha: function () {
        // statements
        // a return
        return ['Alpha', arguments.length];
      },
      beta: function () {
        // statements
        // a return
        return ['Beta', arguments.length];
      },
      _default: function () {
        // statements
        // a return
        return ['Default', arguments.length];
      }
    };

    delegator = function () {
      var args, key, delegate;

      // Transform arguments list into an array
      args = [].slice.call(arguments);

      // shift the case key from the arguments
      key = args.shift();

      // Assign the default case handler
      delegate = cases._default;

      // Derive the method to delegate operation to
      if (cases.hasOwnProperty(key)) {
        delegate = cases[key];
      }

      // The scope arg could be set to something specific,
      // in this case, |null| will suffice
      return delegate.apply(null, args);
    };

  ```

  B. Early returns promote code readability with negligible performance difference

  ```javascript

    // 7.B.1.1
    // Bad:
    function returnLate(foo) {
      var ret;

      if (foo) {
        ret = 'foo';
      } else {
        ret = 'quux';
      }
      return ret;
    }

    // Good:

    function returnEarly(foo) {

      if (foo) {
        return 'foo';
      }
      return 'quux';
    }

  ```
