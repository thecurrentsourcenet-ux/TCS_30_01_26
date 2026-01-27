import { Lightbulb } from 'lucide-react';

interface ArticleKeyTakeawaysProps {
  takeaways: string[];
}

export default function ArticleKeyTakeaways({ takeaways }: ArticleKeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 my-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
        <h2 className="text-xl font-bold text-gray-900">Key Takeaways</h2>
      </div>

      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center mt-0.5">
              {index + 1}
            </span>
            <p className="text-gray-700 leading-relaxed flex-1">
              {takeaway}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
