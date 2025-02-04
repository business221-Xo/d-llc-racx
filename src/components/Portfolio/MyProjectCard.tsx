import Link from 'next/link';
import Image from 'next/image';

function ProjectCard({ imageSrc, title, description, link }) { // Changed to function declaration
  return (
    <Link href={link} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div className="relative pb-2/3">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-t-lg"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-base text-gray-700 text-center">{description}</p>
      </div>
    </Link>
  );
}

export { ProjectCard }; // Export statement at the end