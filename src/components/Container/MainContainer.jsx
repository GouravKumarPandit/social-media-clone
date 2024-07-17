const MainContainer = ({ children }) => {
    return <div className="vw-100 vh-100">
        <div className="row vh-100">
            <div className="col-12">
                {children}
            </div>
        </div>
    </div>;
}

export default MainContainer;