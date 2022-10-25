import React from "react";

const Portfolio = () => {

  const projects = [{
    title: "Hometown",
    languages: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
    description: "First group project from bootcamp, its about our hometown. Since it was during corona, so it was remote and we didn't know where everyone was living. We used JavaScript FullStack(React, MongoDB, Express.js). We also used iframe to show the map of our hometown."
  }]

  return (
    <section className="portfolio">
      <div className="portfolio-cntr">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-description">
          {
            projects.map((project, index) => {
              return (
                <div key={index} className="port-desc-box">
                  <div className="title-link">
                    <h3>Title: <a href="https://github.com/willhwpark/hometown-blog">
                      {project.title}
                    </a></h3>
                  </div>
                  <div className="portfolio-lang-title">
                    <div className="port-lang-left">
                      <h3>Languages: {"  "}</h3>
                    </div>
                    <div className="port-lang-used">
                      {
                        project.languages.map((language, index) => {
                          return (
                            <h3 className="port-languages">{language}</h3>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="portfolio-desc-title">
                    <div className="port-desc-left">
                      <h3>Description: {" "}</h3>
                    </div>
                    <div className="port-desc-used">
                      <h3>{project.description}</h3>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>



    </section>
  )
}

export default Portfolio;