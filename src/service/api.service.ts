import jwt from 'jsonwebtoken';
import TokenPayload from '../models/api.model';

export function generateToken(payload: TokenPayload){
    return jwt.sign(payload, 'teste_basico', { expiresIn: '1h' });
} 