## HW Due Tuesday Week10

### What I built
- I created a new Todo app in `Homework/v4` by starting from the v1 code.
- I moved the shared todos state and CRUD functions into a React Context `Provider`.
- Components now read and update todos through Context (no more prop drilling).
- The app keeps data in local state only (no API/json-server needed).

The UI and behavior match v1, but the state is shared via Context instead of props.