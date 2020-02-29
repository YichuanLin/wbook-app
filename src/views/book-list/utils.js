export const sortListByOption = (list, option) => {
  const direction = option ? option.direction : 'ASC';
  const field = option ? option.field : 'price';
  const sortFunctionAsc = (current, next) => current[field] - next[field];
  const sortFunctionDesc = (current, next) => next[field] - current[field];
  let sortFunction = sortFunctionAsc;
  if (direction === 'DESC') {
    sortFunction = sortFunctionDesc;
  }

  return list.sort(sortFunction);
};
