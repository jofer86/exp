import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { handleInputErrors } from './handlers/middleware';

const router = Router();

/* 
Product
*/
router.get('/product', (req, res) => {
  res.json({ message: 'hello from express' });
});
router.post('/product', () => {});
router.get('/product/:id', () => {});
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  (req, res) => {  
    res.status(200).json({ message: 'hello from express' });
  }
);

router.delete('/product/:id', () => {});

/*
Update
*/
router.get(
  '/update',
  body('title').exists().isString(),
  body('body').exists().isString(),

  () => {})
  ;
router.post(
  '/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  () => {}
);
router.get('/update/:id', () => {});
router.put(
  '/update/:id',
  body('title').optional,
  body('body').optional,
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  () => {}
);
router.delete('/update/:id', () => {});

/**
 * UpdatePoint
 */
router.get('/update-point', () => {}); 
router.post('/update-point',
  body('name').exists().isString(),
  body('description').exists().isString(),
  body('updateId').exists().isString(),  
  () => {}
);
router.get('/update-point/:id', () => {});  
router.put('/update-point/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
);
router.delete('/update-point/:id', () => {});

export default router;