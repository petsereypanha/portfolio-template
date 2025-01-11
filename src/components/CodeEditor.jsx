import { useState } from 'react';

const CodeEditor = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const code = `// Welcome to my portfolio
const developer = {
  name: 'Pet Sereypanha',
  role: 'Software Developer',
  location: 'Cambodia',
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'TypeScript',
    'UI/UX Design'
  ],
  experience: {
    current: 'Full Stack Developer',
    years: 0,
    focus: 'Web Applications'
  },
  interests: [
    'Clean Code',
    'Performance Optimization',
    'User Experience',
    'Modern Technologies'
  ],
  contact: {
    email: 'contact@example.com',
    github: 'github.com/your-github',
    linkedin: 'linkedin.com/in/your-linkedin'
  }
};

// Let's build something amazing together!
export default developer;`;

  const lines = code.split('\n');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-500" 
         style={{ height: isExpanded ? '60vh' : '300px' }}>
      <div className="bg-gray-900 h-full shadow-2xl">
        {/* Editor Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">developer.js</div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors px-2 py-1 rounded"
          >
            {isExpanded ? '▼ Minimize' : '▲ Expand'}
          </button>
        </div>

        {/* Editor Content */}
        <div className="p-4 font-mono text-sm overflow-auto h-[calc(100%-40px)]">
          <table className="w-full">
            <tbody>
              {lines.map((line, i) => (
                <tr key={i} className="hover:bg-white/5">
                  <td className="text-gray-500 pr-4 text-right select-none w-10">
                    {i + 1}
                  </td>
                  <td className="text-gray-300">
                    <pre className="whitespace-pre">
                      <code dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/(['"])(.*?)\1/g, '<span class="text-green-400">$&</span>')
                          .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
                          .replace(/\b(const|let|var|function|return|export|default)\b/g, '<span class="text-purple-400">$1</span>')
                          .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-yellow-400">$1</span>')
                          .replace(/({|}|\[|\]|,)/g, '<span class="text-blue-400">$1</span>')
                      }} />
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
