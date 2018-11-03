# Week 6

## Dom Wrap-up
- show how to add a new item
- Add a listener to the button
```
    var add = document.getElementById('add')
    add.addEventListener('click', addItem);
```
- write the function to add a new item, use debugger a lot
```javascript
function addItem() {
  debugger;
  var input = document.getElementById('newItem').value;

  //create a new li
  var newItem = document.createElement('li');
  newItem.innerHTML = input;
  newItem.classList.add('todoItem');
  document.getElementsByTagName('ul')[0].appendChild(newItem);
}
```

### You Do (5 minutes)
- Return to the playlist exercise.
- Add a click event to the ul, when a song title is click, change the class name of that item to 'now-playing'. (challenge) only one song can be playing at a time
- Create a text input and a button. When the button is clicked, add songs to the playlist.
- Create a new song, try to click it to get it to 'play', what happens?

### Delegated Click Events
- Show a delegated click event

```javascript
//better
  document.getElementsByTagName("ul")[0].addEventListener("click", function(e) {
    e.target.classList.add('done')
  });

```

## Practice 
- meme generator
