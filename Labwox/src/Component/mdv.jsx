

const Mdv = () => {
    const cards = [
      {
        href: "https://resources.franklincovey.com/c/brief-franklincovey?x=3Zbqrh&lb-mode=overlay",
        bgColor: "bg-gray-200",
        title: "A Brief FranklinCovey Overview",
        text: "Learn how FranklinCovey has transformed the lives of over 30 million leaders across 150+ countries and in 25 languages.",
        img: "https://www.franklincovey.com/wp-content/uploads/2024/07/brief-fc-overview_310x230.jpg",
      },
      {
        href: "https://resources.franklincovey.com/c/develop-leaders-at-a?x=3Zbqrh&lb-mode=overlay",
        bgColor: "bg-green-300",
        title: "Develop Leaders at all Levels",
        text: "Our comprehensive programs, including year-long Impact Journeys, offer tailored learning experiences delivered through various modalities.",
        img: "https://www.franklincovey.com/wp-content/uploads/2024/06/develop-leaders_310x230.jpg",
      },
      {
        href: "https://resources.franklincovey.com/c/enhance-existing-str?x=3Zbqrh&lb-mode=overlay",
        bgColor: "bg-blue-200",
        title: "Enhance Existing Strategies",
        text: "See how our principle-centered approach drives enduring change, offering customizable solutions across various domains.",
        img: "https://www.franklincovey.com/wp-content/uploads/2024/06/enhance-existing-strategies_310x230.jpg",
      },
      {
        href: "https://resources.franklincovey.com/c/impact-admin-platform-overview?x=3Zbqrh&lb-mode=overlay",
        bgColor: "bg-orange-300",
        title: "Impact & Admin Platform Overview",
        text: "Discover how FranklinCovey’s Impact Platform revolutionizes learning experiences with facilitated courses, On Demand learning, and microcourses.",
        img: "https://www.franklincovey.com/wp-content/uploads/2024/06/impact-platform_310x230.jpg",
      },
    ];
  
    return (
      <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 ${card.bgColor} rounded-lg shadow-lg hover:shadow-xl transition duration-300`}
            >
              <div className="flex flex-col justify-between h-full">
                {/* Title */}
                <h2 className="text-lg font-bold mb-4">{card.title}</h2>
                {/* Text */}
                <p className="text-sm text-gray-800 mb-4">{card.text}</p>
                {/* Image */}
                <div
                  className="h-40 bg-cover bg-center rounded-md shadow-md"
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Mdv;