### Questions:

- Q: What is .then() used for, and what is .catch() use for?
- A: .then() is a method that is used to handle promises that properly resolve. It is a method that "waits" for a response, and then does with that response what the developer wants. .catch(), however, is used for handling promises that do not appropriately resolve. This allows developers to account for errors or if things to pear-shaped where promises are concerned.

- Q: What are good use cases for Promises?
- A: I've been spending a lot of time over the break working on CSS animation for JavaScript-based games, and have consequently spent a lot of time working with and understanding the complexities of setTimeout(). Wrapping a setTimeout() in a Promise can help to make sure that things resolve appropriately since the event loop by itself doesn't necessarily allow things to resolve exactly in the sequence and manner that you want with asynchronus functions.

- Q: What other libraries/functions can you find that use Promises?
- A: async/await functions are effectively the ES7 version of .then(), which make Promise resolution and error handling a bit easier to read and easier to test. .json() is another method that returns a promise.
