
import PortfolioData from './PortfolioData';
import MyProjectCard from '@/components/Portfolio/MyProjectCard'

export default function Portfolio() {
  return (
    <div className="pb-[120px] pt-[120px]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-33xl font-bold text-center mt-18"></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-18">
          {PortfolioData.map((project) => (
            <MyProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>

    </div>
  );
}