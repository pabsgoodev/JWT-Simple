import { Request, Response} from 'express';
import { generateToken } from '../service/api.service';

export async function controller(req: Request, res: Response) {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios' });
    }

    const token = generateToken({ nome, email });

    return res.json({ token });
} 