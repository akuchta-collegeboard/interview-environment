import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: "*"
}));
app.use(express.json());

// Health check endpoint - WORKING EXAMPLE FOR CANDIDATES
app.get('/api/hello-world', (req, res) => {
    console.log("Hello, World!");
    res.json({message: "Hello, World!"});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log(`  GET  http://localhost:${PORT}/api/hello-world`);
});