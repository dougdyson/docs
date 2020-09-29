# W7
## D2
### Lecture
- INPUT (PROPS + STATE) ======> OUTPUT (JSX)
-- Convention myFunc(variable, myFuncSetStateInReact)
-- Never directly alter state variable

### IMMUTABLE DATA PATTERN
Copy state variable into a new variable so that React can compare with the state it is storing
- i.e.
```reactInteralState = [1,2,3];
const currentState = reactInternalState

For reference objects,
- map, slice, spread, reduce, filter, concat
