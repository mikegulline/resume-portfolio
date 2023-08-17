type TagPillsProps = {
  tags: string[];
};

export default function TagPills({ tags }: TagPillsProps) {
  return (
    <ul className='flex flex-wrap'>
      {tags.map((tag, i) => (
        <li
          key={`${tag}-${i}`}
          className={`flex ${
            i < tags.length - 1 ? 'grow' : ''
          } text-xs px-2 py-1 mr-1 mt-1 border border-gray-600 rounded-full hover:border-purple-600 hover:text-black hover:bg-purple-100 cursor-pointer select-none`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
