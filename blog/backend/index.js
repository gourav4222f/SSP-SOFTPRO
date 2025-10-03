const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'posts.json');

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Create
app.post('/api/posts', (req, res) => {
  const { title, content, seo = {}, published = false, image } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const posts = readData();
  const post = {
    id: uuidv4(),
    title,
    content: content || '',
    seo,
    image: image || null,
    published: !!published,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  posts.unshift(post);
  writeData(posts);
  res.status(201).json(post);
});

// Read all (with optional ?published=true)
app.get('/api/posts', (req, res) => {
  const { published } = req.query;
  let posts = readData();
  if (published === 'true') posts = posts.filter(p => p.published);
  res.json(posts);
});

// Read one
app.get('/api/posts/:id', (req, res) => {
  const posts = readData();
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'not found' });
  res.json(post);
});

// Update
app.put('/api/posts/:id', (req, res) => {
  const posts = readData();
  const idx = posts.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  const existing = posts[idx];
  const { title, content, seo, published, image } = req.body;
  const updated = {
    ...existing,
    title: title ?? existing.title,
    content: content ?? existing.content,
    seo: seo ?? existing.seo,
    image: image ?? existing.image,
    published: published ?? existing.published,
    updatedAt: new Date().toISOString(),
  };
  posts[idx] = updated;
  writeData(posts);
  res.json(updated);
});

// Delete
app.delete('/api/posts/:id', (req, res) => {
  let posts = readData();
  const idx = posts.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  const [deleted] = posts.splice(idx, 1);
  writeData(posts);
  res.json(deleted);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
