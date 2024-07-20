import { addSubscriber, getSubscribers, countSubscribers } from '../services/subscriberService.js';

export const createSubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        const subscriber = await addSubscriber(email);
        res.status(201).json({ message: 'Subscribed successfully!', subscriber });
    } catch (error) {
        if (error.code === 11000) { // Duplicate email error
            res.status(400).json({ message: 'Email already subscribed!' });
        } else {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }
};

export const fetchSubscribers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const subscribers = await getSubscribers(page, limit);
        const totalSubscribers = await countSubscribers();

        res.status(200).json({
            subscribers,
            currentPage: page,
            totalPages: Math.ceil(totalSubscribers / limit),
            totalSubscribers
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};