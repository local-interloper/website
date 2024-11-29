import technologies from "@/app/routes/_page.hobbies.programming/data/technologies";

const LanguagesAndTechnologies = () => {

  return (
    <article className="flex flex-col items-center gap-section w-full">
      <section className="flex flex-col items-center gap-item max-w-sm md:max-w-4xl text-center">
        <h1 className="font-title border-b-2 border-black">Languages / Technologies</h1>
        <p>
          During my learning, experimentation, work or whatever else, I&apos;ve utilized many tools.
          Here&apos;s a non exhaustive list of programming languages, technologies and services I had pleasure (or
          displeasure) working with (or against).
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-section">
        {technologies.map(({category, items}, i) => (
          <section key={i} className="flex flex-col items-center rounded-lg p-5 bg-base-200 shadow gap-section">
            <h2 className="text-2xl font-mom">{category}</h2>
            <section className="grid grid-cols-3 gap-item">
              {items.map(({name, Icon}, i) => (
                <section key={i} className="flex items-center justify-center tooltip tooltip-bottom" data-tip={name}>
                  <Icon className="text-5xl" />
                </section>
              ))}
            </section>
          </section>
        ))}
      </section>
    </article>
  );
};

export default LanguagesAndTechnologies;