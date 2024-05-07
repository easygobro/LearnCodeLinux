import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

export default async function Dashboard() {
  const lessonsDirectory = path.join(process.cwd(), 'app', 'lessons');
  const filenames = fs.readdirSync(lessonsDirectory);

  const lessons = filenames
    .filter((filename) => filename.endsWith('.json'))
    .map((filename) => {
      const filePath = path.join(lessonsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const lessonNumber = parseInt(filename.match(/\d+/)?.[0] || '0', 10);
      return { ...JSON.parse(fileContents), lessonNumber };
    })
    .sort((a, b) => a.lessonNumber - b.lessonNumber);

  return (
    <div className="font-abc text-center">
      <h1 className="font-semibold py-4 text-3xl">Lessons</h1>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {lessons.map((lesson) => (
          <Link key={lesson.lessonNumber} href={`/lessons/${lesson.lessonNumber}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm transition duration-300 hover:scale-105 cursor-pointer h-96">
              <div className="h-48 relative">
                <Image
                  src={lesson.image || '/landing.jpg'}
                  alt={lesson.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 h-32 overflow-hidden">
                <h2 className="font-bold">{lesson.title}</h2>
                <p className="text-gray-700 line-clamp-3">{lesson.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}