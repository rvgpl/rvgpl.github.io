---
title: Handle conflicting props
path: /handle-conflicting-props/
date: 2019-12-01T20:00:00.530Z
intro: Tips on how to handle conflicting props in React
---

When building components for design systems, we want to have an API which is easy to guess by devs who are consuming it. Having similar named props can consume devs on what it does, which can create hindrance in using the component. Let me show you the code so I can assert it better.

Consider the famous `Button` component as one of the examples,

```jsx
const Button = ({ label, onClick }) => (
  <button className="btn" onClick={onClick}>
    {label}
  </button>
);
```

It is a simple Button component which accepts two props, label and a onClick handler. Now in a library there will be multiple buttons, say you want a button to signify primary action, so you would create a prop for it and if the prop exists turn it into a primary button else render a normal one.

```jsx
const Button = ({ label, onClick, primary }) => {
  const buttonClasses = primary ? "btn btn--primary" : "btn";
  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};
```

Great, now we have button component that can render and primary and normal button. After a while you decide to add a delete button and use `danger` prop to render it.

Now the public API for the Button component to render a danger button would be

```jsx
<Button danger onClick={handleClick} label="Delete" />
```

Now looking at the props we can't say whether it renders a primary danger button or a normal danger button. Granted we can guess that it renders a normal button because we didn't pass `primary` prop. After a while there will be conflicting props for rendering a button where the developer can't guess what will be the appearance of it.

Say we want a danger button, success button, warning button, button as a link, primary button and a secondary button. It is really difficult to visualize the button appearance if we use all the available props. As it will depend on the order of props that are passed in.

```jsx
<Button
  success
  warning
  danger
  primary
  secondary
  link
  onClick={handleClick}
  label="Press Me"
/>
```

## Solution

When building components for developers we should make sure it is easy to reason to props and provide feedback when something is not supported.

Lets refactor our Button component to accept two new props, now the total props would be four. `onClick`, `label`, `appearance` and `variant`

The `appearance` prop can take string values such as `primary`, `secondary` and `link`. The variant prop can take string values like `success`, `warning` and `danger`.

This way we can make sure there are no conflicting props and devs can easily reason about what to pass to the component when they want to render a secondary warning button

```jsx
<Button
  appearance="secondary"
  variant="warning"
  onClick={handleClick}
  label="Press Me"
/>
```

Now if you are using Typescript we can add types so devs can only pass the strings we defined in our interface and throw error when it is something else.

```ts
interface ButtonProps {
  appearance: "primary" | "secondary" | "link";
  variant: "success" | "warning" | "danger";
}
```

You can use `prop-types` also to assert the dev sends only proper strings to our component.

```jsx
Button.PropTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary', 'link'])
	variant: PropTypes.oneOf(['success', 'warning', 'danger'])
}
```
