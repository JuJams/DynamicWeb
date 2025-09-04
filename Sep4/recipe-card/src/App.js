// Declare our app component function which returns JSX
const App = () => {
    return (
        // We cannot have two divs as two siblings seperately
        // we need to wrap them in one parent div
        <>
            <div> 
                Hello <span>JSX</span>
            </div>
            <div>This is my first React App</div>
        </>
    );
    }

export default App;