class APIFilter {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }

  applyFilters() {
    const excluded = ['limit', 'page', 'sortBy', 'fields', 'keyword'];
    const filters = { ...this.queryString };
    Object.keys(filters).forEach((key) => {
      if (excluded.includes(key)) delete filters[key];
    });

    let qs = JSON.stringify(filters);
    qs = qs.replace(/\b(gte|gt|lte|lt)\b/g, (m) => `$${m}`);

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(qs));
    return this;
  }

  applySort() {
    if (this.queryString.sortBy) {
      const sortBy = this.queryString.sortBy.split(',').join(' ');
      this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery.sort('-createdAt');
    }

    return this;
  }

  applySearch() {
    if (this.queryString.keyword) {
      const regex = new RegExp(this.queryString.keyword, 'i');
      this.mongooseQuery.or([{ title: regex }, { author: regex }]);
    }
    return this;
  }

  applySelection() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery.select('-__v');
    }
    return this;
  }

  ApplyPageination() {
    let { limit, page } = this.queryString;
    limit = limit ? +limit : 50;
    const skip = page ? (+page - 1) * limit : 0;
    this.mongooseQuery.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFilter;
