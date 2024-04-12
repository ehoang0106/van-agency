const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container">
                <div className="navbar navbar-expand-md fixed-top shadow p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor: '#fff'}} >
                    <div className="container-xxl">
                        <a href="/" className="navbar-brand ml-3 ">
                            <img src="https://locations.meetsoci.com/farmerssites/images/local-page/farmers-logo-hd.56570851.svg" alt="Farmers Logo" width="100px" />
                        </a>
                        {/* Toggle button for mobile */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center align-center" id="main-nav">
                            <ul className="navbar-nav">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle custom-hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Insurance
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Auto</a></li>
                                        <li><a class="dropdown-item" href="#">Home</a></li>
                                        <li><a class="dropdown-item" href="#">Business</a></li>
                                        <li><a class="dropdown-item" href="#">Life</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link custom-hover">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link custom-hover">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link custom-hover">Claims</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link custom-hover">Contact</a>
                                </li>
                                <li className="nav-item d-md-none">
                                    <a href="#" className="nav-link">Get A Quote</a>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-outline-primary d-none d-md-inline mx-5">Get A Quote!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;