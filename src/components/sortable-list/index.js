import React,
{
  useState,
} from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => (
  <ul>
    {items.map((value, index) => (
      <SortableItem key={`item-${value}`} index={index} value={value} />
    ))}
  </ul>
));

const SortableComponent = () => {
  const initial = {
    items: new Array(100).fill(null).map((v, index) => `Item ${index}`),
  };

  const [list, setList] = useState(initial);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setList(({ items }) => ({
      items: arrayMoveImmutable(items, oldIndex, newIndex),
    }));
  };

  return <SortableList items={list.items} onSortEnd={onSortEnd} />;
};

export default SortableComponent;
