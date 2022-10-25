import React from "react";

const Project = (props) => {

  const { title, website, languages, description } = props;

  return (
    <section className="project">
      <div>
        <p>{title}</p>
        <p>{website}</p>
        <p>{languages}</p>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Project;