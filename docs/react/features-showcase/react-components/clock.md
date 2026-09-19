# Clock

```jsx live
function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}
```
