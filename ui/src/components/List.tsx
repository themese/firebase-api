interface ListProps {
  listItems: ListItemProps[];
}

interface ListItemProps {
  name: string;
}

const ListComponent = (list: ListProps) => {
  return (
    <div>
      <ul>
        {list.listItems.map((listItem, index) => {
          return <li key={index}>{listItem.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListComponent;
