import mongooes from 'mongoose';

const userSchema = new mongooes.Schema({
    fullName: {
        typeof: String,
        required: true
    },
    imageUrl: {
        typeof: String,
        required: true
    },
    clerkId: {
        typeof: String,
        required: true,
        unique: true
    }
 }, {timestamps: true}// createdAt, updatedAt
);

export const User = mongooes.model('User', userSchema);
