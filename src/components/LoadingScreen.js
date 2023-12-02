const LoadingScreen = () => {
    return (
        <>
            <div style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                backgroundColor: "rgba(255,255,251,.97)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center,",
                zIndex: "9999",
            }}>
                <img
                    src={require("../assets/images/loading-3.gif")}
                    className="d-block m-auto p-4"
                    style={{width: "100px"}}
                    alt="loading"
                />
            </div>
        </>
    );
};

export default LoadingScreen;