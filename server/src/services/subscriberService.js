import Subscriber from '../models/Subscriber.js';

export const addSubscriber = async (email) => {
    const newSubscriber = new Subscriber({ email });
    return await newSubscriber.save();
};

export const getSubscribers = async () => {
    return await Subscriber.find();
};

export const countSubscribers = async () => {
    return await Subscriber.countDocuments();
};