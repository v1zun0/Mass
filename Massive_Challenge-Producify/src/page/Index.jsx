import Footer from "../component/Footer";
import "../component/style.css";

const Index = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark navbar fixed-top" style={{ backgroundColor: "#0496C7" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Producify
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link pe-4 active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link pe-4" href="/PricingMonthly">
                Pricing
              </a>
              <a className="nav-link pe-4" href="/aboutus">
                About Us
              </a>
              <a type="button" className="btn warna-bt" style={{color: "white"}} href="/Login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Akhir Navigation Bar */}
      <body style={{ backgroundColor: "#e7f9ff" }}>
        {/* Jumbotron */}
        <section className="warna-bg">
          <div className="container mb-5 pt-5 pb-5">
            <div className="row justify-content-evenly fs-5">
              <div className="col-sm mt-5">
                <img src="img/jumbo.png" alt="Jumbotron" />
              </div>
              <div className="col mt-5 ms-5">
                <h4 className="card-title" style={{ color: "023c50" }}>
                  Welcome
                </h4>
                <h3 className="card-title" style={{ color: "023c50" }}>
                  <b>Manage your daily activities and work</b>
                </h3>
                <p align="justify" className="card-title" style={{ color: "023c50" }}>
                  Managing your daily activities and work is an essential skill for achieving productivity and a healthy life balance, because with good planning, setting appropriate priorities, effective time management, wise task
                  delegation, maintaining a balance between work and rest, and regularly conducting evaluations and reflections, you can increase work efficiency, achieve goals more quickly, and reduce stress levels that can affect overall
                  quality of life.
                </p>
                <a href="/href" type="button" className="btn btn-primary warna-bt">
                  Start for free
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Akhir Jumbotron */}

        {/* Konten Slide */}
        <section>
          <div id="carouselExampleCaptions" className="carousel slide ms-5">
            <div>
              <a type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1" className="artikel-active m-3">
                New project
              </a>
              <a type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="artikel-active m-3">
                Tips & Guide
              </a>
              <a type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="artikel-active m-3">
                Chat with your friend
              </a>
            </div>
            <div className="carousel-inner mb-5">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-5 ms-5">
                    <h5>New project</h5>
                    <p>You can create a project that contains your daily activities that can be managed, so you can still be productive when you are busy</p>
                  </div>
                  <div className="col-6">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                      <video controls className="d-block w-100">
                        <source src="../../public/video/NewProject.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-5 ms-5">
                    <h5>Tips & Guide</h5>
                    <p>You can see tips and guides about productivity so that your daily activities can be more productive</p>
                  </div>
                  <div className="col-6">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                      <video controls className="d-block w-100">
                        <source src="../../public/video/tips.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-5 ms-5">
                    <h5>Chat with your Friend</h5>
                    <p>You can contact friends you already follow so you can discuss productivity with your friends</p>
                  </div>
                  <div className="col-6">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                      <video controls className="d-block w-100">
                        <source src="../../public/video/Chat.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Akhir Konten Slide */}

        {/* Konten 2 */}
        <section className="warna-bg">
          <div className="container mb-5 pb-5">
            <div className="row justify-content-evenly fs-5">
              <div className="col-sm mt-5">
                <img src="img/AboutUSDesc.png" alt="" />
              </div>
              <div className="col mt-5 ms-5">
                <h4>Producify</h4>
                <h3>
                  <b>Activity management platform</b>
                </h3>
                <p align="justify">
                  This platform provides tools and features that enable users to schedule, assign tasks and monitor activity progress efficiently. By using this activity management platform, organizations can increase efficiency, reduce the
                  risk of errors, and ensure that all activities proceed as planned. It is highly beneficial for companies, educational institutions, non-profit organizations, and even individuals who need tools to manage projects and daily
                  activities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Akhir Konten 2 */}

        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </>
  );
};
export default Index;
