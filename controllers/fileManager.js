const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '../AFM-source/input.txt');
const DEST = (method) => path.join(__dirname, `../AFM-destination/output-${method}.txt`);

exports.copySync = (req, res) => {
   const data = fs.readFileSync(SOURCE, 'utf-8');
        fs.writeFileSync(DEST('sync'), data);
        res.json({ message: 'File copied using sync methods.' });
};

exports.copyAsync = (req, res) => {
    fs.readFile(SOURCE, 'utf-8', (err, data) => {
        fs.writeFile(DEST('async'), data, (err2) => {
            if (err2) return res.status(500).json({ error: err2.message });
            res.json({ message: 'File copied using async methods.' });
        });
    });
};

exports.readSyncWriteAsync = (req, res) => {
    try {
        const data = fs.readFileSync(SOURCE, 'utf-8');
        fs.writeFile(DEST('readSyncWriteAsync'), data, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'File read sync, written async.' });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.readAsyncWriteSync = (req, res) => {
    fs.readFile(SOURCE, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        try {
            fs.writeFileSync(DEST('readAsyncWriteSync'), data);
            res.json({ message: 'File read async, written sync.' });
        } catch (err2) {
            res.status(500).json({ error: err2.message });
        }
    });
};
