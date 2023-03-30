function DessertsList(props) {
  const data = props.data;

  const transformedSortedData = data.filter(item => {
    return item.calories <= 500;
  }).sort((a, b) => {
    return a.calories - b.calories;
  }).map((item, index) => {
    return <li key={index}>{item.name} - {item.calories} cal</li>
  });

  return <ul>{transformedSortedData}</ul>;
}

export default DessertsList;
