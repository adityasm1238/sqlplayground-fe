const PageLoading = () => {
    return (
        <div id="page-top">
                <div className="d-flex flex-column" id="content-wrapper">
                    <div className="container-fluid">
                        <div className="text-center mt-5">
                            <div className="error mx-5" data-text="Loading...">
                                <p className="m-0">Loading...</p>
                            </div>
                            <p className="text-black-50 mb-0">Please wait we are setting up the page for you</p></div>
                    </div>
                </div>
        </div>
    )
}

export default PageLoading;