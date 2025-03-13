import express from 'express';
import {
    myProperties,
    addProperty,
    deleteProperty,
    advertiseProperty,
    getAdvertisementStatus
} from '../controllers/SellerController.js';
import { verifyJWT, roleCheck } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Property Management Routes
router.get('/myProperty', verifyJWT, roleCheck(['seller']), myProperties);
router.post('/property', verifyJWT, roleCheck(['seller']),upload.single("image"), addProperty);
router.post('/delete-property', verifyJWT, roleCheck(['seller']), deleteProperty);

// Advertisement Management Routes
router.post('/advertise', verifyJWT, roleCheck(['seller']), advertiseProperty);
router.get('/advertisement-status', verifyJWT, roleCheck(['seller']), getAdvertisementStatus);



export default router;