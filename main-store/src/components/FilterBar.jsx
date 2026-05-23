export function FilterBar({ categories, filters, onFiltersChange, tags }) {
  function updateFilter(event) {
    onFiltersChange((currentFilters) => ({
      ...currentFilters,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <form className="filters" aria-label="Filtros del catálogo">
      <div className="field">
        <label htmlFor="search">Buscar por nombre</label>
        <input
          id="search"
          name="search"
          onChange={updateFilter}
          placeholder="Audífonos, mochila..."
          type="search"
          value={filters.search}
        />
      </div>

      <div className="field">
        <label htmlFor="category">Categoría</label>
        <select id="category" name="category" onChange={updateFilter} value={filters.category}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="tag">Etiqueta</label>
        <select id="tag" name="tag" onChange={updateFilter} value={filters.tag}>
          {tags.map((tag) => (
            <option key={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="sort">Ordenar precio</label>
        <select id="sort" name="sort" onChange={updateFilter} value={filters.sort}>
          <option value="default">Sin ordenar</option>
          <option value="ascending">Menor a mayor</option>
          <option value="descending">Mayor a menor</option>
        </select>
      </div>
    </form>
  )
}
