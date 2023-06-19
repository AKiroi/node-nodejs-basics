const parseArgs = () => {
  const res = process.argv
    .reduce((acc, item, i, arr) => {
      if (item.startsWith('--')) {
        acc.push(`${item.slice(2)} is ${arr[i + 1]}`);
        return acc;
      }
      return acc;
    }, [])
    .join(', ');
  console.log(res);
};

parseArgs();
