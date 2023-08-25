export const average = (data, filter, property) => {
  const properties = {};
  data.map((entry) => {
    if (entry[filter] in properties) {
      properties[entry[filter]].push(entry[property]);
    } else {
      properties[entry[filter]] = [entry[property]];
    }
  });

  const averageProperty = Object.entries(properties).map(
    ([filterOption, properties]) => {
      const sum = properties.reduce((acc, val) => acc + val, 0);
      return { filterOption, average: sum / properties.length };
    }
  );

  return averageProperty;
};
