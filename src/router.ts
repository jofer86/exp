import { Router } from 'express';

const router = Router();

/* 
Product
*/
router.get('/product', (req, res) => {
  res.json({ message: 'hello from express' });
});
router.post('/product', () => {});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.delete('/product/:id', () => {});

/*
Update
*/
router.get('/update', () => {});
router.post('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', () => {});
router.delete('/update/:id', () => {});

/**
 * UpdatePoint
 */
router.get('/update-point', () => {});
router.post('/update-point', () => {});
router.get('/update-point/:id', () => {});  
router.put('/update-point/:id', () => {});
router.delete('/update-point/:id', () => {});

export default router;