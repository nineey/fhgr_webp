// slice data for pagination
function sliceResultByPage(data, start) {
  const startIndex = (parseInt(start) - 1) * 10;
  const endIndex = startIndex + 10;

  return data.slice(startIndex, endIndex);
}

module.exports = sliceResultByPage;
