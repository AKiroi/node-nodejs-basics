const parseEnv = () => {
  const res = Object.keys(process.env)
    .reduce((acc, item) => {
      if (item.startsWith('RSS_')) {
        acc.push(`${item}=${process.env[item]}`);
        return acc;
      }
      return acc;
    }, [])
    .join('; ');

  console.log(res);
};

parseEnv();