# material-loading
Vanilla JavaScript Google's MaterialDesign-like loading modal

## Installation
```html
<!-- include material lite libs -->
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/fechanique/material-loading/master/material-loading.css">
<script src="https://cdn.rawgit.com/fechanique/material-loading/master/material-loading.js"></script>
```
## Functions
### Open loading modal
```javscript
materialLoading(true)
```

### Close loading modal
```javscript
materialLoading(false)
```

## Example
```html
<html>
  <head>
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/fechanique/material-loading/master/material-loading.css">
    <script src="https://cdn.rawgit.com/fechanique/material-loading/master/material-loading.js"></script>
  </head>
  <body>
    <button onclick="materialLoading(true);setTimeout(function(){materialLoading(false)},3000)">Open loading modal</button>
  </body>
</html>
```
