import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact API route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required',
    });
  }

  // Email validation (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format',
    });
  }

  // In a real application, you would:
  // - Save to database
  // - Send email notification
  // - Log the contact form submission
  console.log('Contact form submission:', { name, email, message });

  // Return success response
  res.status(200).json({
    success: true,
    message: 'Contact form submitted successfully',
    data: {
      name,
      email,
      message,
    },
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VyomGarud API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


