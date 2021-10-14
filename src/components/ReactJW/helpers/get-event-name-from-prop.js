const getEventNameFromProp = (prop) => {
  const beginsWithOn = prop.slice(0, 2) === 'on';

  if (beginsWithOn) {
    const eventName = prop.slice(2);
    const [firstLetter, ...rest] = eventName;

    return `${firstLetter.toLowerCase()}${rest.join('')}`;
  }

  return null;
};

export default getEventNameFromProp;
