import resumeData from "../data/resumeData";

function Resume() {
  return (
    <>
      <h1 className="bg-stone-100 py-20 text-center text-5xl font-semibold uppercase md:text-8xl md:font-normal">
        My Resume
      </h1>
      {/* Professional Experience Section */}
      <section className="m-auto bg-stone-50 px-20 py-10">
        <>
          {resumeData.experience.map((experience, index) => (
            <div key={index}>
              <div className="mb-2 flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-2xl">{experience.company}</h3>
                  <h4 className="text-xl">{experience.title}</h4>
                </div>
                <div className="text-right">
                  <p>{experience.location}</p>
                  <p>{experience.dates}</p>
                </div>
              </div>
              <ul className="mb-2 ml-8">
                {experience.accomplishments.map((description, index) => (
                  <li className="list-disc" key={index}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      </section>
      {/* Education and Training Section */}
      <section className="m-auto bg-stone-200 px-20 py-10">
        <div className="flex flex-col gap-6 md:flex-row">
          {resumeData.education.map((education, index) => (
            <div key={index} className="w-1/4">
              <h3 className="text-2xl">{education.institution}</h3>
              <h4 className="text-lg">{education.program}</h4>
              <p className="mb-2">{education.dates}</p>
              <ul className="ml-6">
                {education.details.map((details, index) => (
                  <li className="list-disc" key={index}>
                    {details}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Skills and Software Section */}
      <section className="bg-orange-500 px-5 py-20 xl:px-0">
        <h2 className="mb-10 text-center text-5xl font-semibold uppercase">
          Skills, Software, &amp; Programming Languages
        </h2>
        <div className="m-auto flex flex-col gap-6 px-20 md:flex-row">
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">General Skills</h3>
            {resumeData.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-stone-500 px-2.5 py-1.5 text-sm text-stone-50"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Software</h3>
            {resumeData.software.map((software, softwareIndex) => (
              <span
                key={softwareIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-stone-500 px-2.5 py-1.5 text-sm text-stone-50"
              >
                {software}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Programming</h3>
            {resumeData.programming.map((programming, programmingIndex) => (
              <span
                key={programmingIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-stone-500 px-2.5 py-1.5 text-sm text-stone-50"
              >
                {programming}
              </span>
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-4 text-xl font-semibold">Technician Skills</h3>
            {resumeData.technician.map((technician, technicianIndex) => (
              <span
                key={technicianIndex}
                className="mb-3 mr-3 inline-block rounded-full bg-stone-500 px-2.5 py-1.5 text-sm text-stone-50"
              >
                {technician}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
