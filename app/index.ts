import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/customer', (req, res) => {
    res.json({ message: 'Customer data' });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
