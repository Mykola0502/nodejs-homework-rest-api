const bodyValuesNameChecker = (values) => {
  const keysBody = ["name", "email", "phone"];
  const findKeys = keysBody.filter((key) => values[key] === undefined);
  if (findKeys.length === 0) {
    return;
  } else if (findKeys.length > 1) {
    return `Missing required '${findKeys.join(", ")}' fields`;
  }
  return `Missing required '${findKeys[0]}' field`;
};

module.exports = bodyValuesNameChecker;
