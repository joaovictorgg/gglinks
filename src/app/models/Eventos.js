import { Schema, model, models } from "mongoose"

const EventSchema = new Schema({
    type: String,
    page: String,
    uri: String,
}, {timestamps: true});

export const Eventos = models?.Eventos || model('Eventos', EventSchema);