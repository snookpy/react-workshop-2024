---
sidebar_position: 5
---

# More about JSX

JSX not only show html or render props

we will re-used `MyName` Component for this section

```jsx
// MyName.tsx
type MyNameProps = {
	name: string,
	age: number,
}

export const MyName = (props: MyNameProps) => {
	const name = props.name
	const age = props.age
	return (
		<p>
			Hi {name} I am {age} years old.
		</p>
	)
}
```

## Fragment

Commonly, Root JSX in return of Component, should have one level.

```jsx
// BAD
return (
    <p>Name</p>
    <p>Age</p>
)

// GOOD
return (
    <div>
        <p>Name</p>
        <p>Age</p>
    </div>
)


// GOOD with reduce dow tree level with React Fragment
import { Fragment } from "react";

return (
    <Fragment>
        <p>Name</p>
        <p>Age</p>
    </Fragment>
)

// Shorter Version

return (
    <>
        <p>Name</p>
        <p>Age</p>
    </>
)
```

## Inline Style
Before this section we mention inline style, here we go

JSX can inline style with `object`only. Forgot it? back to Basic Typescript.

```jsx {4-7}
return (
	<>
		<p
		style={{
			color: "red",
			fontSize: '24px',
		}}
		>
			Name
		</p>
		<p>Age</p>
	</>
)
```

## Condition

JSX can do condition

### One IF

Example one if condition; if age greater than or equal 20, can go inside pub

Do condition inside expression `{}`

Use `&&` after condition

```jsx {6}
//MyName.tsx

return (
	<>
		<p>Name</p>
		{age >= 20 && <p>Can go inside pub</p>}
	</>
)
```

### If Else

if have more than one condition; if age >= 18 I can voted., else I am too young.

Use `short if` of JavaScript

`condition ? 'if true' : 'else'`

```jsx {4}
return (
	<>
		<p>Name</p>
		<p>{age >= 18 ? "I can voted." : "I am too young."}</p>
	</>
)
```

Now we warp expression to inside `<p>` instead, then it have to print string in both condition.
