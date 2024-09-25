---
layout: layouts/right
title: Tables
tags: patterns
summary: A table shows information in columns and rows.

date: 2024-09-08

table:
  - value: '#1b1b1b'
    token: 'base-darkest'
    cat: 'base'
  - value: '#3d4551'
    token: 'base-darker'
    cat: 'base'

codeblock: |
  <table class="usa-table">
    <thead>
      <tr>
        <th>Token</th>
        <th>Value</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {% for t in table %}
      <tr>
        <td> {{ t.token }}</td>
        <td> {{ t.value }}</td>
        <td> {{ t.cat }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
---

Since tables are unique, there isn't a smart pattern created for use in the library. However there are some theme settings and varations that can be used to adjust the design and functionality.

## Theme settings
- `$theme-table-background-color `: Defines the table background color. A value of default uses the body background color.
- `$theme-table-border-color `: Defines a border color for table cells. A value of default uses either the default text or reverse text color depending on the site background color.
- `$theme-table-header-background-color `: Defines a background color for header cells.
- `$theme-table-header-text-color `: Defines a text color for header cells. A value of default uses either the default text or reverse text color depending on the header background color.
- `$theme-table-sorted-background-color `: Defines a background color for the cells of the sorted column.
- `$theme-table-sorted-header-background-color `: Defines a background color for the sorted column header.
- `$theme-table-sorted-icon-color `: Defines a fill color for the activated sort button in a sortable column header. A value of default uses either the default text or reverse text color depending on the sorted column header background color.
- `$theme-table-sorted-stripe-background-color `: Defines a background color for the alternating horizontal stripes applied to cells of the sorted column.
- `$theme-table-sticky-top-offset `: Defines the top offset for sticky headers. This setting value must include the CSS unit type, for example 10px or 2rem.
- `$theme-table-stripe-background-color `: Defines a background color for alternating horizontal stripes in the striped table variant.
- `$theme-table-stripe-text-color `: Defines a text color for alternating horizontal stripes in the striped table variant. A value of default uses either the default text or reverse text color depending on the stripe background color.
- `$theme-table-text-color `: Defines a text color for table cells. A value of default uses either the default text or reverse text color depending on the site background color.
- `$theme-table-unsorted-icon-color `: Defines a fill color for the unactivated sort button in a sortable column header.

## Variations
- `.usa-table--borderless`: Removes the outer table borders, retaining only a single bottom border on each row. Best for tables with more text than numbers.
- `.usa-table--compact`: Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Pairs well with scrollable and striped variants, but is not suitable for use with stacked variants.
- `.usa-table-container--scrollable > .usa-table`: Add the usa-table-container--scrollable class to a container around any usa-table to apply a horizontal scrollbar if the columns exceed the available width. Ideal for dense tables with many columns.
- `.usa-table--stacked`: Stacks the table cells on narrow screens. Ideal for tables that contain more text information than numerical data. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
- `.usa-table--stacked-header`: Stacks the table cells on narrow screens and visually promotes the first cell of every row into a “header” for that group. Preferred for directories and other lists where the first cell of every row is a name. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
- `.usa-table--sticky-header`: Allows the table header element to stick to the top of the page as the user scrolls. Preferred for long tables with many rows. This variant is not compatible with the scrollable and stacked table variants.
- `.usa-table--striped`: Applies alternating horizontal striping to help the eye track across table rows. Pairs well with the scrollable variant for tables with many columns.

## Library prototyping notes
As stated above, tables are complex and so there is not smart pattern created for the library. That being said, here is a way to use Markdown and Liquid to quickly create your tables.

1. create your table content as an array in the YAML front matter at the top of the page (or as a data file in the date folder.)
2. create your code on the page and use Liguid to loop through the array content.

### Example
**Front Matter**
``` yml
  table:
  - value: '#1b1b1b'
    token: 'base-darkest'
    cat: 'base'
  - value: '#3d4551'
    token: 'base-darker'
    cat: 'base'
```

**Codeblock**
``` html
 {{ codeblock }}
```
**Renders as**
<table class="usa-table">
<thead>
<tr>
<th>Token</th>
<th>Value</th>
<th>Category</th>
</tr>
</thead>
<tbody>
{% for t in table %}
<tr>
<td> {{ t.token }}</td>
<td> {{ t.value }}</td>
<td> {{ t.cat }}</td>
</tr>
{% endfor %}
</tbody>
</table>