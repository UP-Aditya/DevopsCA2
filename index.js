const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("DevOps CA2 Running 🚀");
});

app.get('/health', (req, res) => {
    res.json({ status: "Server is healthy ✅" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});