---
title: Using hooks to build design systems
path: /using-hooks-for-design-systems/
date: 2019-11-13T21:00:00.530Z
intro: Using React hooks to simplify and unify logic
---

As someone who has been working in building a design system using React for it, I see a few opportunities to simplify and unify logic.

Some of the use cases I have came across which helped in making my React code more simplified.

## Class Components

In the context of a design system, we don't require a lot of logic around components, it usually serves the view part.
Usually, the logic part comes as a part of performing some side effect, hiding/showing some part of DOM etc.

Let's build a `Modal` functional component.

```jsx
import React from "react";

const Modal = ({ isOpen, title, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    )
  );
};
```

This is a very basic Modal component which just renders `title` and `content`. Our component will show the Modal if `isOpen` prop is true and hides if it false.

The most common use case is we would want to prevent scrolling in the background every time the modal opens. We need to switch it to a class component to perform this side effect. We use the lifecycle methods to modify the style on the `body` to prevent scrolling.

```jsx
import React from "react";

class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = this.props.isOpen ? "hidden" : "visible";
  }

  componentDidUpdate() {
    document.body.style.overflow = this.props.isOpen ? "hidden" : "visible";
  }

  render() {
    const { isOpen, title, children } = this.props;
    return (
      isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{title}</h3>
            {children}
          </div>
        </div>
      )
    );
  }
}
```

We had to convert our functional component to class component and write the same code on two different life cycle methods. We can simplify this using `useEffect` hook.

```jsx
import React, { useEffect } from "react";

const Modal = ({ isOpen, title, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => (document.body.style.overflow = "visible");
  }, [isOpen]);

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    )
  );
};
```

Every time our Modal instance changes the useEffect hook will be called. We prevent scrolling on the body by modifying styles. We are returning a function that will be executed in case the component gets unmounted, to make sure we clean the body styles. In the second argument, we pass isOpen value as an array, so we the hook is executed only when the value of isOpen changes.

This way we can avoid using a class component to perform a side effect.

## Share Logic

There is a change where we have other components like drawers, overlays in our design system where we would want to prevent scroll on the body. We can't share lifecycle methods between class components, but we can isolate hooks into their own files and import them wherever necessary.

```jsx
import { useEffect } from "react";

function usePreventBodyScroll(toggle) {
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "visible";
    return () => (document.body.style.overflow = "visible");
  }, [toggle]);
}

export { usePreventBodyScroll };
```

We can add the hook and pass the property that will toggle the style. The prevent scroll is abstracted out and can be re-used in other components.

```jsx
import React from "react";
import { usePreventBodyScroll } from "./hooks/usePreventBodyScroll";

const Modal = ({ isOpen, title, children }) => {
  usePreventBodyScroll(isOpen);
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    )
  );
};
```

This also helps in writing unit tests, as we need not test the same behavior for every class component. Instead, with custom hooks we need to test the behavior once at the hook level.

## Local state

The most common use cases for converting a component to a class component is to maintain state. Take an example of a dropdown component. We want to toggle a menu based on a click.

```jsx
import React from "react";

class DropDown extends React.Component {
  state = { open: false };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.toggle}>Menu</button>
        {this.state.open && <div className="dropdown-content">{content}</div>}
      </div>
    );
  }
}
```

We can easily convert this to a functional component by using `useState` hook.

```jsx

import React, { useState } from 'react'

const DropDown = ({content}) => {
	const[open, setOpen] =  useState(false);

	return (
		<div className="dropdown">
        <button onClick={() => setOpen(!open))}>Menu</button>
        {this.state.open && <div className="dropdown-content">{content}</div>}
		</div>
		)
}
```

The value we pass to useState becomes the initial state, later each setOpen call will modify it, without the need of a class at all.

Hooks enable new patterns by empowering functional components and removing the need of lifecycles and states for simple use cases. The behavior inside hooks can be shared now within your design system, and less code to maintain could potentially translate into fewer bugs and avoid redundant unit tests.
