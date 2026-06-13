interface CategoryFilterProps {
  selected: string;
  onSelect: (value: string) => void;
}

const categories = [
  { label: "All", value: "artificial intelligence" },
  { label: "Recently", value: "recent" },
  { label: "Bookmarks", value: "bookmarks" },
  { label: "OpenAI", value: "OpenAI" },
  { label: "Anthropic", value: "Anthropic" },
  { label: "NVIDIA", value: "NVIDIA" },
  { label: "Google", value: "Google AI" },
  { label: "Microsoft", value: "Microsoft AI" },
];

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category.label}
          className={
            selected === category.value
              ? "category-button active"
              : "category-button"
          }
          onClick={() => onSelect(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
