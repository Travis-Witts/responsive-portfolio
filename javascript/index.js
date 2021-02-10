

let aboutElement = `    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand">Travis Witts</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link active">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="portfolio" href="">Portfolio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="contact" href="">Contact</a>
    </li>
  </ul>
</div>
</nav>
<div class="card">
<div class="card-body">
  <h5 class="card-title">Name: Travis Witts</h5>
  <img src="./images/profile.jpg" alt="semi-professional-photo" />
  <p class="card-text">
    <span class="bold">Phone number:</span> 0431 528 153
  </p>
  <p class="card-text">
    <span class="bold">Email:</span> travis.witts@outlook.com
  </p>
  <h5 class="card-text">My story</h5>
  <hr />
  <p class="card-text">
    I am a junior developer undergoing a bachelor's degree of Software
    Engineering at the University of South Australia and, a Web
    development bootcamp at the University of Adelaide. This portfolio
    is here to show potential clients and job prospects what I am
    capable of, I am very capable of working within a team with strong
    leadership skills and am able to follow instructions well. A list of
    languages and skills I have gained and maintain regularly are listed
    below.
  </p>
  <h5 class="card-text">Skills</h5>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">HTML and CSS</li>
    <li class="list-group-item">Javascript</li>
    <li class="list-group-item">NodeJS</li>
    <li class="list-group-item">JQuery</li>
    <li class="list-group-item">Python</li>
  </ul>

  <h5 class="card-text">Useful links are contained below:</h5>
  <hr />
  <a href="./resume/resume" download class="btn btn-primary">Resume</a>
  <hr />
  <div class="row">
    <div class="col-md-2">
    <a href="https://www.linkedin.com/in/travis-witts-95064912a/">
    <img src="./images/linkedin.png"/>
  </a>
    </div>
    <div class="col-md-2">
      <a href="https://github.com/Travis297">
        <img src="./images/github.png"/>
      </a>
    </div>
  </div>
</div>
</div>`

let portfolioElement = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand">Travis Witts</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" id="about" href="">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active">Portfolio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="contact" href="">Contact</a>
    </li>
  </ul>
</div>
</nav>
<div class="card">
<h5 class="card-header">Portfolio</h5>
<div class="card-body">
  <h5 class="card-title">Searchify</h5>
  <h6 class="card-text">Objective</h6>
  <p class="card-text">
    To allow a user to quickly and easily find out what is happening within their city with the help of 2 API's.
  </p>
  <h6 class="card-text">Components</h6>
  <p class="card-text">Ticketmaster's API did most of the heavy listing, returning a JSON file dynamically based on search queries such as state code and dates.</p>
  <p class="card-text">The other AI used was Spotify's AI to return more information about the perfoming acts to the user.</p>
  <p class="card-text">It was designed to be completely responsive and uses JQuery.</p>
  <img src="./images/searchify.png" alt="" class="img-fluid" />
  <p class="card-text">
    <span class="bold">GitHub Repo: </span> <a href="https://github.com/Travis297/Searchify">HERE</a>
  </p>
  <p class="card-text">
    <span class="bold">Deployed: </span> <a href="https://travis297.github.io/Searchify/">HERE</a>
  </p>
  <hr>
  <h5 class="card-title">Code Quiz</h5>
  <h6 class="card-text">Objective</h6>
  <p class="card-text">
    A fun mini quiz that tests the users knowledge on javascript.
  </p>
  <h6 class="card-text">Components</h6>
  <p class="card-text">
    Every page is cleared and rebuilt inside a container with the use of javascript so all parts are responsive and dynamic.
  </p>
  <img src="./images/quiz.png" alt="" class="img-fluid" />
  <p class="card-text">
    <span class="bold">GitHub Repo: </span> <a href="https://github.com/Travis297/code-quiz">HERE</a>
  </p>
  <p class="card-text">
    <span class="bold">Deployed: </span> <a href="https://travis297.github.io/code-quiz/">HERE</a>
  </p>
  <hr>
  <h5 class="card-title">Weather Dashboard</h5>
  <h6 class="card-text">Objective</h6>
  <p class="card-text">
    A dashboard that utilises API calls to supply weather information.
  </p>
  <h6 class="card-text">Components</h6>
  <p class="card-text">This application uses JQuery to make Ajax calls to one API to get most of the relevant data and then uses some of that information for another API call.</p>
  <p class="card-text">Using JQuery, localStorage and and API.</p>
  <img src="./images/weather.png" alt="" class="img-fluid" />
  <p class="card-text">
    <span class="bold">GitHub Repo: </span> <a href="https://github.com/Travis297/weather-dashboard">HERE</a>
  </p>
  <p class="card-text">
    <span class="bold">Deployed: </span> <a href="https://travis297.github.io/weather-dashboard/">HERE</a>
  </p>
</div>
</div>`

let contactElement = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand">Travis Witts</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" id="about" href="">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="portfolio" href="">Portfolio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active">Contact</a>
    </li>
  </ul>
</div>
</nav>
<div class="card">
<h5 class="card-header">Contact Me</h5>
<div class="card-body">
  <form>
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="email" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">I never share your email with anyone else.</small>
    </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" type="text" rows="10"></textarea>
      </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</div>`


const mainElement = $(".main");
mainElement.append(aboutElement);


$("#about").on("click", function(event) {
  event.preventDefault();
  mainElement.empty();
  mainElement.append(aboutElement);
})

$("#portfolio").on("click", function(event) {
  event.preventDefault();
  mainElement.empty();
  mainElement.append(portfolioElement);
})

$("#contact").on("click", function(event) {
  event.preventDefault();
  mainElement.empty();
  mainElement.append(contactElement);
})