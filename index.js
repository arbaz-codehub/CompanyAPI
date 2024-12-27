const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // default error handling
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get(
  "/api/:company",
  asyncHandler(async (req, res) => {
    res.json({
      success: true,
      data: {
        isSelected: true,
        company: req.params.company,
        applicant: "Arbaz Ali",
        apllicantGoal: `${req.params.company}'s perople is now like my family, aur apni family ke growth mein jee jaan lga denge`,
      },
    });
  })
);

// Error Handling Middleware (should be in last)
app.use(errorHandler);

const PORT = process.env.PORT || 5300;
app.listen(PORT, () => console.log("Server is running at port ", PORT));
