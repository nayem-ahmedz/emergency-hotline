# Answers to the given Questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
All of this methods are DOM methods used to capture one or multiple html elements from a webpage. First one, getElementById is used to get a element using specific ID selector while getElementsByClassName is used to get multiple elements using same class name, selector.
On the other hand, querySelector and querySelectorAll perform similiar tasks. querySelector return first matched element or null if not found while querySelectorAll selects multiple elements and return it. If nothing is found the querySelectorAll returns empty object.
One major defference between getElementsByClassName and querySelectorAll is that, first one return a html collection, and querySelectorAll return nodelist

## 2. How do you create and insert a new element into the DOM?
By using document.createElement() method, I can create a element. Then set inner contents using innerText or innerHTML. Then simply select the parent element where I wanna insert it, and then append the new element using appendChild.
Example :
    `const p = document.createElement('p');
    p.innerText = 'set text value';
    document.querySelector('body').appendChild(p)`

## 3. What is Event Bubbling and how does it work?
Event bubling is the process of events triggered by a element captured up to the root element. Once a button is clicked it trigger the event, and this event react to the ancestors one by one through bubling. So when you click on a button
- button is the clicked
- button container is clicked
- body is clicked and so on

## 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a modern approach to bind a event function such as click, in the parent/container element rather than setting in individual buttons of that container. This technique is very useful because, you dont need to manually add event listeners in individual element. Beside, dynamically added elements, later, in this container will get the same event listener function, while they added later, after page loads or anytime.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
PreventDefault() method is used to prevent the default behaviour of a event. However, stopPropagation is used to terminate event bubling. So this two method are completely different. One simple example of preventDefault(), is used in form to avoid page reloads. On the other hand, stopPropagation() is used in buttons to stop all other clicks that happens due to Event Bubling.