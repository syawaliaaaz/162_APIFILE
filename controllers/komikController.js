const db = require('../models');
const Komik = db.Komik;

exports.getAll = async (req, res) => {
  const data = await Komik.findAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Komik.findByPk(req.params.id);
  if (!data) return res.status(404).json({ message: 'Not found' });
  res.json(data);
};

exports.create = async (req, res) => {
  const { title, author, genre } = req.body;
  const newKomik = await Komik.create({ title, author, genre });
  res.status(201).json(newKomik);
};

exports.update = async (req, res) => {
  const komik = await Komik.findByPk(req.params.id);
  if (!komik) return res.status(404).json({ message: 'Not found' });
  await komik.update(req.body);
  res.json(komik);
};

exports.delete = async (req, res) => {
  const komik = await Komik.findByPk(req.params.id);
  if (!komik) return res.status(404).json({ message: 'Not found' });
  await komik.destroy();
  res.json({ message: 'Deleted' });
};