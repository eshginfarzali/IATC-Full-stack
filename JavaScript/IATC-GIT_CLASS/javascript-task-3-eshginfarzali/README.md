[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EUY7dRlf)
# Tasks

## Greatest letter

Find next greatest letter among given letters after target letter
Return the smallest character in letters that is lexicographically greater than target.
If such a character does not exist, return the first character in letters.

```typescript
let letters = ['s', 'z', 'k'];
let target = 'a';
// result: 'k'

let letters2 = ['s', 'z', 'k', 'a'];
let target2 = 'k';
// result: 's'
```

## Find out if the object is empty or not

```typescript
let obj1 = {};
// result: object is empty

let obj2 = {
	key: 'value',
};
// result: object is not empty
```

## Clean nullish values from object

```typescript
let obj = {
	key1: null,
	key2: 0,
	key3: 'string',
};
// result: {
//   key2: 0,
//   key3: 'string'
// }
//
```

## Clean falsy values from object

```typescript
let obj = {
	key1: null,
	key2: 0,
	key3: 'string',
};
// result: {
//   key3: 'string'
// }
//
```
