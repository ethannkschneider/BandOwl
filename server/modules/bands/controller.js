import Band from './model';

export const createBand = async (req, res, next) => {
  const { name, description, genre } = req.body;
  const newBand = new Band({ name, description, genre });

  try {
    return res.status(201).json({ band: await newBand.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error creating new band' })
  }
};
