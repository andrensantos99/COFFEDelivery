// Types Express
import { Request, Response } from 'express';

// Model
import { Product } from '../../app/models/Product';

export async function createProducty(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
