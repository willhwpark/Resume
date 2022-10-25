import React from "react";
import { SiExpress, SiJava } from "react-icons/si";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";

const Languages = () => {
  return (
    <section className="language">
      <div className="language-cntr">
        <div className="language-title">
          <h1>Developer Skills</h1>
        </div>
        <div className="language-description">
          <div className="language-1">
            <div className="language-icon">
              <DiHtml5 style={{ fontSize: '30px' }} />
              <h3 className="single-language">HTML</h3>
            </div>
            <div className="language-icon">
              <DiCss3 style={{ fontSize: '30px' }} />
              <h3 className="single-language">CSS</h3>
            </div>
            <div className="language-icon">
              <DiJavascript style={{ fontSize: '30px' }} />
              <h3 className="single-language">JavaScript</h3>
            </div>
            <div className="language-icon">
              <SiJava style={{ fontSize: '30px' }} />
              <h3 className="single-language">Java</h3>
            </div>
          </div>
          <div className="language-2">
            <div className="language-icon">
              <DiReact style={{ fontSize: '30px' }} />
              <h3 className="lang">React</h3>
            </div>
            <div className="language-icon">
              <DiNodejsSmall style={{ fontSize: '30px' }} />
              <h3 className="single-language">Node.js</h3>
            </div>
            <div className="language-icon">
              <SiExpress style={{ fontSize: '30px' }} />
              <h3 className="single-language">Express.js</h3>
            </div>
            <div className="language-icon">
              <DiMongodb style={{ fontSize: '30px' }} />
              <h3 className="single-language">MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages;