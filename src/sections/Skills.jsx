export const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "TailwindCSS",
        "Bootstrap",
        "Responsive Design",
        "DOM Manipulation",
      ],
    },
    {
      title: "Backend / Database",
      skills: [
        "Node.js (Basics)",
        "Express.js (Basics)",
        "SQL",
        "MySQL",
        "REST APIs",
        "CRUD Operations",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel / Netlify",
        "Chrome DevTools",
      ],
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP Concepts",
        "DBMS",
        "Operating Systems",
        "Software Engineering Basics",
      ],
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP Concepts",
        "DBMS",
        "Operating Systems",
        "Software Engineering Basics",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold italic text-center mb-12 text-primary-foreground">
          Skill
          <span className="text-primary">s</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition glass-strong glow-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-white hover:text-primary transition">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center text-muted-foreground ">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-muted-foreground rounded-full transition border border-white/10 text-center  "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
