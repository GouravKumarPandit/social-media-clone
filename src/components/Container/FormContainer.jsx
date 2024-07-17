const FormContainer = ({ children }) => {
    return <form className="col-6 mx-auto my-5">
        <div className="row">
            {children}
        </div>
    </form>;
}

export default FormContainer;