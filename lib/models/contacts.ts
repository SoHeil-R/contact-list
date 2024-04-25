import mongoose from "mongoose";

const contacts = new mongoose.Schema(
    {
        name: String,
        mail: String,
        phone: {
            type: Object,
            default: {}
        },
        job: String,
        avatar: String,
        banner: String,
        socials: {
            type: Object,
            default: {}
        }
    }, { timestamps: true }
)

const contact = mongoose.models?.Contact || mongoose.model('Contact', contacts)

export default contact;