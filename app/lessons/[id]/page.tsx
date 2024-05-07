import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import OtherTerminal from '@/app/components/OtherTerminal';
import TerminalComponent from '@/app/components/Terminal';
interface LessonProps {
  params: {
    id: string;
  };
}

interface Section {
  type: string;
  level?: number;
  text?: string;
  items?: { text: string }[];
  language?: string;
  code?: string;
}
export default async function Lesson({ params }: LessonProps) {
  const lessonsDirectory = path.join(process.cwd(), 'app', 'lessons');
  const filePath = path.join(lessonsDirectory, `lesson${params.id}.json`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const lesson = JSON.parse(fileContents);
  

  return (
    <div
      className="font-abc font-medium min-h-screen"
      style={{ backgroundColor: lesson.backgroundColor, color: lesson.textColor }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{lesson.title}</h1>
        {lesson.sections.map((section: Section, index: number) => {
          switch (section.type) {
            case 'hero':
              return (
                <div key={index} className="bg-gradient-to-r from-primary to-secondary p-8 mb-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-4">{section.text}</h2>
                </div>
              );
            case 'heading':
              const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
              return <HeadingTag key={index} className="text-2xl font-bold mt-8 mb-4">{section.text}</HeadingTag>;
            case 'paragraph':
              return <p key={index} className="mb-4 text-lg leading-relaxed">{section.text}</p>;
            case 'list':
              return (
                <ul key={index} className="list-disc pl-8 mb-4 space-y-2">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg">{item.text}</li>
                  ))}
                </ul>
              );
            case 'code':
              return (
                <pre key={index} className="bg-gray-800 text-white p-4 mb-4 rounded-lg overflow-x-auto">
                  <code className={`language-${section.language}`}>{section.code}</code>
                </pre>
              );
            default:
              return null;
          }
        })}
      </div>
      <p>Practice Terminal</p>
      <OtherTerminal />
    </div>
  );
}