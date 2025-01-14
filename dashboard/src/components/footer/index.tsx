

export function Footer(){
  return (
    <footer className="mt-auto items-center justify-center bg-zinc-100 text-center p-4">
      <p>
        <span className="mr-1 text-gray-700">&copy; 2025 - By Josué Ribeiro </span>
        <a href="https://www.linkedin.com/in/jribeirow/" target="_blank" rel="noopener noreferrer" className="mr-1 text-blue-500 hover:underline">LinkedIn</a> |
        <a href="https://github.com/Jreng7" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">GitHub</a>
      </p>
      <p>
        <span className="text-gray-700">Inspirado pelo incrível trabalho de </span>
        <a href="https://www.youtube.com/@Sujeitoprogramador" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Sujeitoprogramador</a>
      </p>
    </footer>
  );
}
