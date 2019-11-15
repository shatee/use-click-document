# use-click-document

## install

```
npm install use-click-document
```

## usage basis

```typescript
import React, { useCallback } from 'react';
import { useClickDocument } from 'use-click-document';
 
const SomeComponent = () => {
  const onAnythingClick = useCallback((event: MouseEvent) => {
    console.log('clicked anything', event.target);
  }, []);

  useClickDocument(onAnythingClick);
 
  return <div>something</div>;
};
```

## usage ignored target refs

```typescript
import React, { useCallback, useRef } from 'react';
import { useClickDocument } from 'use-click-document';
 
const SomeComponent = () => {
  const refA = useRef<HTMLElement>(null);
  const refB = useRef<HTMLElement>(null);

  const onClickIgnoredAB = useCallback((event: MouseEvent) => {
    console.log('clicked not a and b', event.target);
  }, []);

  useClickDocument(onClickIgnoredAB, [refA, refB]);

  return (
  <div>
    <div ref={refA}>A</div>
    <div ref={refB}>B</div>
    <div>C</div>
  </div>
  );
};
```
