import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
}

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export const CategoryNav = ({ categories, activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className="whitespace-nowrap"
        >
          {category.name}
        </Button>
      ))}
    </nav>
  );
};