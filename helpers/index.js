module.exports = {
  sendResponse: (res, status, isError, errorMessage, data) => {
    res.status(status).json({
      error: isError,
      errorMessage: errorMessage,
      data: data
    });
  }
};
