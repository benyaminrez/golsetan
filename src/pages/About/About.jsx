import "./about.css"
import Footer from "../../components/Footer/Footer"
const About = ()=>{



    return (

        <>
<div className="text-center container-fluid about-section bg-success bg-opacity-75">
    <br />
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
<h2 >Our Team</h2>
<br />

<div className="row">
  <div className="col-md-3">
    <div className="card">
      <img src="src/img/images.png" alt="Jane" width={100 + "%"} />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <img src="src/img/images.png" alt="Jane" width={100 + "%"} />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <img src=" src/img/images.png" alt="Jane" width={100 + "%"} />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <img src="src/img/images.png" alt="Jane" width={100 + "%"} />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card">
      <img src="src/img/images.png" alt="Mike" width={100 + "%"} />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card">
      <img src="src/img/images.png" alt="John" width={100 + "%"} />
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</div>

<Footer />
        </>
    )
}
export default About