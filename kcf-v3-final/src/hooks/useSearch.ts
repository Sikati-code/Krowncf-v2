import { useState, useCallback, useMemo } from 'react';
import type { Design } from '@/types';

export function useSearch(designs: Design[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState<'all' | 'name' | 'tags'>('all');

  const filteredDesigns = useMemo(() => {
    if (!searchQuery.trim()) return designs;

    const query = searchQuery.toLowerCase().trim();

    return designs.filter(design => {
      if (searchFilter === 'name' || searchFilter === 'all') {
        if (design.title.toLowerCase().includes(query)) return true;
      }
      
      if (searchFilter === 'tags' || searchFilter === 'all') {
        if (design.tags.some(tag => tag.toLowerCase().includes(query))) return true;
      }

      if (searchFilter === 'all') {
        if (design.category.toLowerCase().includes(query)) return true;
        if (design.description.toLowerCase().includes(query)) return true;
      }

      return false;
    });
  }, [designs, searchQuery, searchFilter]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleFilterChange = useCallback((filter: 'all' | 'name' | 'tags') => {
    setSearchFilter(filter);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return {
    searchQuery,
    searchFilter,
    filteredDesigns,
    handleSearch,
    handleFilterChange,
    clearSearch
  };
}
