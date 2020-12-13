# Amazing React hooks ⚓

Hi! This is useful hooks for your React app 👨‍💻. <br/>

[**See demo on CodeSandbox**](https://codesandbox.io/s/amazing-react-hooks-examples-qwj10 "See demo")
<br/>
<br/>
**Description**

## useBrowserTheme 🎨

Allows you to find out if a dark theme is activated in the system. It returns `true` if dark theme is activated.

**Example**

```javaScript
import { useBrowserTheme } from "./hooks/useBrowserTheme";

export default function App() {

  const darkTheme = useBrowserTheme();

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      <h2>System prefers {darkTheme ? "dark" : "light"} theme</h2>
    </div>
  );
}
```

## useDate 📅

Returns current date (year, mount, mount name, day, day name).

| Argument   |  Type   |             Description             |
| ---------- | :-----: | :---------------------------------: |
| shortNames | boolean | use short names for mounts and days |

**Example**

```javaScript
import { useDate } from "./hooks/useDate";

export default function App() {

  const date = useDate(false);

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      {date && (
        <h2>
          Year: {date.year},
          mount: {date.month}, {date.monthName},
          day: {date.day}, {date.dayName}
        </h2>
      )}
    </div>
  );
}
```

## useTime 🕕

Returns current time and the angle of analog clock arrows.

| Argument |  Type   |        Description         |
| -------- | :-----: | :------------------------: |
| interval | number  |    update interval (ms)    |
| string   | boolean | return data on string type |

**Example**

```javaScript
import { useTime } from "./hooks/useTime";

export default function App() {

  const time = useTime();

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      {time && (
        <h2>
          {time.hours}:{time.minutes}:{time.seconds}
        </h2>
      )}
    </div>
  );
}
```

## usePosition 📡

Sends a request to access the location and returns the latitude and longitude.

**Example**

```javaScript
import { usePosition } from "./hooks/usePosition";

export default function App() {

  const position = usePosition();

  return (
    <div className={`App ${darkTheme ? "dark" : "light"}`}>
      {position.location && (
        <>
          <h2>latitude: {position.location.latitude}</h2>
          <h2>longitude: {position.location.longitude}</h2>
        </>
      )}
    </div>
  );
}
```
