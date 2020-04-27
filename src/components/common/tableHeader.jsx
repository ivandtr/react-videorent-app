import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };
  git;

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (sortColumn.path !== column.path) return null;
    if (sortColumn.order === 'asc') return 'fas fa-sort-up';
    return 'fas fa-sort-down';
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              className="clickable"
            >
              {column.label} <i className={this.renderSortIcon(column)}></i>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
