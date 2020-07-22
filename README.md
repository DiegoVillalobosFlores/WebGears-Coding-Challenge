WebGears Coding Challenge by Diego Villalobos 

## Made with React and it's context API + hooks

[Hosted on Firebase](https://webgearscodingchallenge.web.app/)

## Why the context API and not Redux?

This is in my opinion the most interesting aspect of the project.

Redux is probably the most used state management library for react, so, why not use it?

It all comes down to simplicity really.
Redux being a 3rd party dependency adds an unnecessary burden to the project, well, it was necessary.

But now there's a first party solution for state management:

### Context API

Starting from version 16.8 react added 2 new important improvements to the way the state is managed in React:

* Hooks
* Context API

Hooks help us remove the classes in our stateful components while the context api serves
 as a state provider to the whole application.

Both of them combined make working with state in React a breeze, since you can use the useReducer hook
together with useContext to basically replace redux or any other state management library (MobX).

### Final Thoughts about the context API as a Redux replacement

Before this I had never worked with the context API, mostly because it's hard to implement a new tech
in production, but also because it wasn't as tested as it is today, now you can safely try to implement
it in all your applications.

Overall it left me a really good first impression. I really enjoyed working with it and I see myself
usign it more in the future. Maybe not as a full replacement for Redux but, less Redux is alwasy better.


