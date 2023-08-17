type TagPillsProps = {
  tags: string[];
  className: string;
};

export default function TagPills({ tags, className }: TagPillsProps) {
  return (
    <ul className='flex flex-wrap'>
      {tags.map((tag, i) => (
        <li
          key={`${tag}-${i}`}
          className={`flex ${
            i < tags.length - 1 ? 'grow' : ''
          } ${className} px-2 py-1 mr-1 mt-1 border rounded-full cursor-pointer select-none`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
