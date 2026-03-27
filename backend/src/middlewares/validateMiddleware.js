export const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const issues = error.issues || error.errors || [];

    return res.status(400).json({
      message: "Validation failed",
      errors: issues.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    });
  }
};
