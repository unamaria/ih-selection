# Day 4
## Shopping cart
We’ve already made a shopping cart in Ruby, if you recall. As we’ve learned, Ruby and JavaScript vary in many ways, including how to write object oriented code. Let’s make a shopping cart, but this time in JavaScript, dare I say, Object Oriented Javascript?
In Ruby we used inheritance to solve this problem. Since in JavaScript inheritance works very differently, we’re going to forgo using it for this exercise.
### Iteration 1
Our store is going to have 5 different items like our first shopping cart.
* apple: 10€ / $10
* orange: 5€ / $5
* grapes: 15€ / $15
* banana: 20€ / $20
* watermelon: 50€ / $50

Trust me, the prices are steep but it will be the best watermelon you’ve ever had. Base this exercise off of our previous shopping cart, and translate it into JavaScript.
Create a shopping cart “class” and an item “class” with the same attributes as our original shopping cart. The shopping cart should be contain an empty list of items when we initialize, with the ability to add items to the cart. An item is the same as before, with name and price attributes. Construct the add item function for the shopping cart in a way so that it outputs “Adding item to the cart at a price of item price” every time we call it.

### Iteration 2
Let's create a total function now. Remember that in JavaScript that functions are values. Don’t forget this when calling total. Keep in mind that when we actually call the function, we have to say total(), since parentheses aren’t optional for function calls.
Also, if there are more than 5 items in the cart as before, make sure our user gets a 10% discount.

### Iteration 3
Let’s create item based discounts.
* Apples are going to be buy one, get one free.
* If we have more than 5 oranges to the cart, we can add another 5 at 50% off each.

### Iteration 4 - Challenge mode
Hmm it looks like some of the bananas aren’t as ripe as we originally thought...Lets create a function for the ShoppingCart that allows us to remove items if we want.
I should be able to call the function like this:
```
joshsCart.removeItem(“Banana”, 3)
If I don’t pass a number to the function, I want to remove all of the items.
```
If the amount selected to be removed is greater than what is currently in the cart, just remove all items of that type from the cart.

## Game of rooms
Remember a game of rooms? If not, it’s alright, we will go back over the directions. Anyways, let’s create it in JavaScript. The mechanics are going to stay the same, but our execution is going to be different. A quick reminder of the mechanics of the game:

* Your character starts in a “room”.
* The description of the room is printed. The description should give the user a hint about what to do next.
* A > symbol is shown to prompt the user for input.
* There are 4 options for movement input: N for north, S for south, E for east and W for west.
* If the character moves in a direction that is allowed, the description of the new room is printed and the prompt is shown again for inputting additional movement commands or special room-specific commands.
* If the command inputted makes no sense in the context of the current room, a game-appropriate error message must be shown and the description of the current room along with the prompt must be repeated.
* A room's special commands can trigger any behavior desired. Use your imagination!

### Iteration 1
Create the above mentioned game in JavaScript with all of the basic rules implemented, and a room for north, south, east, and west. Let's take a moment to talk about how we should structure our Game and Room classes.

Our Room class should have attributes that hold a room’s correct answer, the rooms incorrect answer(its hint), and a description (what is prompted when the room appears)

Our Game class should hold the current game’s state. This means that our game should hold a list of room objects, and the room number that we’re currently on...and probably some more stuff later down the road :).

A game should contain many rooms, and now it’s your job to move our user from room to room, based on their answers.

### Iteration 2: Inventory
Add usable objects and an inventory to the game. This means: You can pick up and drop objects in different rooms. 