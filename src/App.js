import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <header>
        <h2>Start Bootstrap</h2>
        <ol>
          <ul className="kulrang">Home</ul>
          <ul className="kulrang">About</ul>
          <ul className="kulrang">Contact</ul>
          <ul>Blog</ul>
        </ol>
      </header>

      <div className="section">
        <h1>Welcome to Blog Home!</h1>
        <p className="kattaroq">
          A Bootstrap 5 starter layout for your next blog homepage
        </p>
      </div>

      <div className="middle">
        <div className="ong">
          <div class="card mb-4">
            <img
              src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body ">
              <p class="card-text text-secondary m-0">January 1, 2022 </p>
              <h2 class="card-title fw-semibold">Featured Post Title</h2>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia nostrum, quisquam voluptate quos alias iusto nesciunt
                magni adipisci eum, cupiditate corporis perspiciatis repellat
                veniam voluptatum. A mollitia facilis consectetur doloremque?.
              </p>
              <a href="#" class="btn btn-primary">
                Read more ->
              </a>
            </div>
          </div>
          <span className="d-flex gap-4 mb-4">
            <div class="card ">
              <img
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-secondary m-0">January 1, 2022 </p>

                <h4 class="card-title fw-semibold">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more ->
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-secondary m-0">January 1, 2022 </p>

                <h4 class="card-title fw-semibold">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more ->
                </a>
              </div>
            </div>
          </span>
          <span className="d-flex gap-4">
            <div class="card ">
              <img
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-secondary m-0">January 1, 2022 </p>

                <h4 class="card-title fw-semibold">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more ->
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text text-secondary m-0">January 1, 2022 </p>

                <h4 class="card-title fw-semibold">Card title</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more ->
                </a>
              </div>
            </div>
          </span>
          <div className="forNav">
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Newer</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    15
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Older
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="chap">
          <div class="card">
            <div class="card-header">Search</div>
            <div class="card-body">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter search term..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  GO!
                </button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">Categories</div>
            <div class="card-body d-flex ">
              <ol>
                <ul>
                  <a href="#">Web Design</a>
                </ul>
                <ul>
                  <a href="#">HTML</a>
                </ul>
                <ul>
                  <a href="#">Frebies</a>
                </ul>
              </ol>
              <ol>
                <ul>
                  <a href="#">JavaScript</a>
                </ul>
                <ul>
                  <a href="#">CSS</a>
                </ul>
                <ul>
                  <a href="#">Tutorials</a>
                </ul>
              </ol>
            </div>
          </div>
          <div class="card">
            <div class="card-header">Side Widget</div>
            <div class="card-body">
              <p class="card-text">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the Bootstrap 5 card component!
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;
