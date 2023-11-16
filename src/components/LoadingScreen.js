const LoadingScreen = () => {
    return (
        <>
            <img
                src={require("../assets/loading-gif.gif")}
                className="d-block m-auto p-4 loading-screen"
                style={{width: "100px"}}
                alt="loading"
            />
        </>
    );
};

export default LoadingScreen;