"use client";
import { Button, Input, Label, ListBox, Select } from "@heroui/react";
import { Search } from "lucide-react";
import { ChevronsExpandVertical } from "@gravity-ui/icons";

import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
const SearchFilterUI = ({ categories, sort, category, search }) => {
  const router = useRouter();
  const params = useSearchParams();

  const [query, setQuery] = useState(search || "");
  const [selectedCategory, setSelectedCategory] = useState(category || "");
  const [selectedSort, setSelectedSort] = useState(sort || "desc");

  const updateURL = (newParams) => {
    router.push(`/ideas?${newParams.toString()}`);
  };

  const handleSearch = () => {
    const newParams = new URLSearchParams(params.toString());

    if (query) newParams.set("search", query);
    else newParams.delete("search");

    if (selectedCategory) newParams.set("category", selectedCategory);
    else newParams.delete("category");

    if (selectedSort) newParams.set("sort", selectedSort);

    updateURL(newParams);
  };

  const handleClearFilters = () => {
    setQuery("");
    setSelectedCategory("");
    setSelectedSort("desc");

    router.push("/ideas");
  };
  return (
    <div
      className="flex flex-col md:flex-row items-stretch md:items-center gap-3 
    bg-white/70 backdrop-blur-lg border border-gray-200 
    rounded-2xl shadow-sm px-4 py-3"
    >
      {/* Search */}
      <div className="flex items-center gap-2 w-full md:flex-1">
        <Search className="text-gray-500" />

        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search ideas"
          className="w-full bg-transparent outline-none"
          placeholder="Search startup ideas, keywords..."
        />
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-8 bg-gray-200" />

      {/* Filter */}
      <div className="w-full md:w-auto">
        <Select
          selectedKey={selectedCategory}
          onSelectionChange={(key) => setSelectedCategory(key)}
          placeholder="Category"
        >
          <Select.Trigger className="bg-transparent border-none shadow-none">
            <Select.Value />
            <Select.Indicator className="size-3 text-gray-500">
              <ChevronsExpandVertical />
            </Select.Indicator>
          </Select.Trigger>

          <Select.Popover className="rounded-xl shadow-lg border border-gray-100">
            <ListBox>
              {categories.slice(0, 6).map((category) => (
                <ListBox.Item
                  key={category.id}
                  id={category.id}
                  textValue={category.textValue}
                >
                  {category.textValue}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Sort */}
      <div className="w-full md:w-auto">
        <Select
          selectedKey={selectedSort}
          onSelectionChange={(key) => setSelectedSort(key)}
          s
          placeholder="Sort by"
        >
          <Select.Trigger className="bg-transparent border-none shadow-none">
            <Select.Value />
            <Select.Indicator className="size-3 text-gray-500">
              <ChevronsExpandVertical />
            </Select.Indicator>
          </Select.Trigger>

          <Select.Popover className="rounded-xl shadow-lg border border-gray-100">
            <ListBox>
              <ListBox.Item id="asc" textValue="asc">
                Oldest first
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="dsc" textValue="dsc">
                Newest first
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Search Button */}
      <div className="w-full gap-2 flex md:w-auto">
        <Button
          onClick={handleSearch}
          className="w-full md:w-auto bg-linear-to-tr from-[#291ef1] to-[#544dd3] text-white px-6 py-2 rounded-xl hover:scale-[1.03] transition-all duration-300"
        >
          Search
        </Button>
        <Button
          onClick={handleClearFilters}
          className="w-full md:w-auto border border-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default SearchFilterUI;
