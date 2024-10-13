 
# Simple Auto Reload Page

A tool for simple page reloading browser.

## Install

```sh
    npm install 
```

Add this code to your browser, for example in `main.js`:

```js
if (import.meta.env.MODE == "development") { 
    simplePageReload(5050); 
}
```

Run `spr_exe` as a socket server with the following command:

```sh
spr_exe -p 5050
```

To reload the page, you can use the command:

```sh
spr_exe -r -p 5050
```

Or if you have installed it locally, you can add it to the scripts in your `package.json`.

For example, like this:

```json
"scripts": { 
    "spr_exe": "spr_exe -p 9090",
    "spr_exe_reload": "spr_exe -r -p 9090"
},
```

# Example usage

[example](https://github.com/nnttoo/spr_exe/tree/master/example)